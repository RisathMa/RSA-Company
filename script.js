document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const isOpen = mobileMenu.classList.contains('active');
      mobileMenuBtn.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
      });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    function handleScroll() {
      if (window.scrollY > 10) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    // Products filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productGrid = document.getElementById('product-grid');
    
    // Load initial products
    loadProducts('all');
    
    // Filter button click event
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        loadProducts(filter);
      });
    });
    
    // Nav links with filter data
    document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
      link.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => {
          if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
        
        // Filter products
        loadProducts(filter);
      });
    });
    
    // Load products function
    function loadProducts(category) {
      // Clear product grid
      productGrid.innerHTML = '';
      
      // Get filtered products
      const products = getProductsByCategory(category);
      
      // Generate product cards
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card animate__animated animate__fadeIn';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <div class="product-details">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price-status">
              <span class="product-price">${product.price}</span>
              <span class="product-status ${product.status.class}">${product.status.text}</span>
            </div>
            <button class="view-details-btn" data-product-id="${product.id}">View Details</button>
          </div>
        `;
        
        productGrid.appendChild(productCard);
      });
      
      // Add event listeners to view details buttons
      document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function() {
          const productId = this.getAttribute('data-product-id');
          openProductModal(productId);
        });
      });
    }
    
    // Product modal functionality
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Close modal when clicking the close button
    closeModalBtn.addEventListener('click', closeProductModal);
    
    // Close modal when clicking the overlay
    modalOverlay.addEventListener('click', closeProductModal);
    
    // Close modal when pressing escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeProductModal();
      }
    });
    
    // Open product modal
    function openProductModal(productId) {
      const product = getProductById(productId);
      
      if (product) {
        // Set modal content
        document.getElementById('modal-title').textContent = product.title;
        document.getElementById('modal-image').src = product.image;
        document.getElementById('modal-image').alt = product.title;
        document.getElementById('modal-price').textContent = product.price;
        
        const statusEl = document.getElementById('modal-status');
        statusEl.textContent = product.status.text;
        statusEl.className = product.status.class;
        
        // Set specifications
        const specsList = document.getElementById('modal-specs');
        specsList.innerHTML = '';
        product.specs.forEach(spec => {
          const li = document.createElement('li');
          li.textContent = spec;
          specsList.appendChild(li);
        });
        
        // Set description
        document.getElementById('modal-description-text').textContent = product.description;
        
        // Set reserve button state
        const reserveBtn = document.getElementById('reserve-btn');
        if (product.status.text === 'Unavailable') {
          reserveBtn.disabled = true;
          reserveBtn.classList.add('disabled');
        } else {
          reserveBtn.disabled = false;
          reserveBtn.classList.remove('disabled');
        }
        
        // Open modal
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
      }
    }
    
    // Close product modal
    function closeProductModal() {
      modal.classList.remove('open');
      document.body.style.overflow = ''; // Restore body scrolling
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      // Reset errors
      document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
      });
      
      // Validate name
      if (name.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
      }
      
      // Validate email
      if (email.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        isValid = false;
      }
      
      // Validate message
      if (message.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
      }
      
      if (isValid) {
        // Form is valid, show success message
        formSuccess.classList.remove('hidden');
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.classList.add('hidden');
        }, 5000);
      }
    });
    
    // Promo video play button
    const playBtn = document.querySelector('.play-btn');
    
    playBtn.addEventListener('click', function() {
      // In a real implementation, this would play an actual video
      // For this demo, we'll just toggle the button icon
      const icon = this.querySelector('i');
      icon.className = icon.className === 'fas fa-play' ? 'fas fa-pause' : 'fas fa-play';
      
      // Reset to play icon after a short delay
      setTimeout(() => {
        icon.className = 'fas fa-play';
      }, 1000);
    });
    
    // Add animations on scroll
    const animatedElements = document.querySelectorAll('.animate__animated');
    
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get any animation delay already applied
          let delay = entry.target.style.animationDelay;
          
          // Add the animation classes
          if (entry.target.classList.contains('animate__fadeIn')) {
            entry.target.style.opacity = 1;
          } else if (entry.target.classList.contains('animate__fadeInUp')) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          } else if (entry.target.classList.contains('animate__fadeInLeft')) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
          }
          
          // Stop observing the element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Start observing elements
    animatedElements.forEach(element => {
      // Set initial state
      if (element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 0;
      } else if (element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
      } else if (element.classList.contains('animate__fadeInLeft')) {
        element.style.opacity = 0;
        element.style.transform = 'translateX(-20px)';
      }
      
      // Set transition
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      observer.observe(element);
    });
    
    // Logo animation
    const logoCircle = document.querySelector('.logo-circle');
    
    // Add hover effect
    logoCircle.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.boxShadow = '0 0 15px rgba(79, 70, 229, 0.6)';
    });
    
    logoCircle.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });