// Product data for the website
const productData = {
    drone1: {
      id: 'drone1',
      title: 'Drone X Pro',
      image: 'https://images.unsplash.com/photo-1600441296601-f1b362e9a58f?auto=format&fit=crop&q=80',
      price: '₹5,000 per day',
      category: 'drone',
      status: {
        text: 'Available',
        class: 'status-available'
      },
      specs: [
        'Flight Time: 30 minutes',
        'Range: 7 km',
        'Camera: 4K @ 60fps',
        'Includes: Controller, 1 battery, charger, carrying case'
      ],
      description: 'The Drone X Pro is a professional-grade drone perfect for aerial photography and videography. With its 4K camera and stable flight performance, it delivers stunning aerial footage in any environment.'
    },
    drone2: {
      id: 'drone2',
      title: 'Drone X Pro (with 2 batteries)',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80',
      price: '₹8,000 per day',
      category: 'drone',
      status: {
        text: 'Available',
        class: 'status-available'
      },
      specs: [
        'Flight Time: 60 minutes (with 2 batteries)',
        'Range: 7 km',
        'Camera: 4K @ 60fps',
        'Includes: Controller, 2 batteries, charger, carrying case'
      ],
      description: 'Get extended flight time with the Drone X Pro dual battery package. This setup includes everything in the standard package plus an extra battery, allowing you to capture twice as much footage without interruption.'
    },
    drone3: {
      id: 'drone3',
      title: 'DJI Mavic Air 2',
      image: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&q=80',
      price: '₹6,500 per day',
      category: 'drone',
      status: {
        text: 'Available',
        class: 'status-available'
      },
      specs: [
        'Flight Time: 34 minutes',
        'Range: 10 km',
        'Camera: 4K @ 60fps, 48MP photos',
        'Includes: Controller, 1 battery, charger, carrying case'
      ],
      description: 'The DJI Mavic Air 2 takes power and portability to the next level, offering advanced features, longer flight time, and a 1/2" image sensor that captures stunning 48MP photos and 4K/60fps video.'
    },
    camera1: {
      id: 'camera1',
      title: 'Canon DSLR 1500D',
      image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80',
      price: '₹3,500 per day',
      category: 'camera',
      status: {
        text: 'Available',
        class: 'status-available'
      },
      specs: [
        'Sensor: 24.1MP APS-C CMOS',
        'ISO Range: 100-6400',
        'Video: Full HD 1080p',
        'Includes: 18-55mm lens, battery, charger, carrying case'
      ],
      description: 'The Canon 1500D is an excellent entry-level DSLR camera that delivers impressive image quality. It\'s perfect for beginners and enthusiasts looking to capture high-quality photos and videos.'
    },
    camera2: {
      id: 'camera2',
      title: 'Sony Alpha A6400',
      image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&q=80',
      price: '₹5,500 per day',
      category: 'camera',
      status: {
        text: 'Available',
        class: 'status-available'
      },
      specs: [
        'Sensor: 24.2MP APS-C Exmor CMOS',
        'ISO Range: 100-32000',
        'Video: 4K @ 30fps, Full HD @ 120fps',
        'Includes: 16-50mm lens, battery, charger, carrying case'
      ],
      description: 'The Sony Alpha A6400 is a versatile mirrorless camera with lightning-fast autofocus and exceptional image quality. Its compact size, 4K video capabilities, and advanced features make it ideal for both photography and videography.'
    },
    camera3: {
      id: 'camera3',
      title: 'Nikon Z6',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
      price: '₹6,000 per day',
      category: 'camera',
      status: {
        text: 'Unavailable',
        class: 'status-unavailable'
      },
      specs: [
        'Sensor: 24.5MP Full-Frame BSI CMOS',
        'ISO Range: 100-51200',
        'Video: 4K @ 30fps, Full HD @ 120fps',
        'Includes: 24-70mm lens, battery, charger, carrying case'
      ],
      description: 'The Nikon Z6 is a professional-grade full-frame mirrorless camera that excels in low-light conditions. With its advanced image stabilization, stunning image quality, and robust build, it\'s a top choice for serious photographers.'
    },
    camera4: {
      id: 'camera4',
      title: 'Blackmagic Pocket Cinema 6K',
      image: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80',
      price: '₹9,500 per day',
      category: 'camera',
      status: {
        text: 'Available',
        class: 'status-available'
      },
      specs: [
        'Sensor: Super 35 Size',
        'Recording: 6K RAW @ 50fps',
        'Dynamic Range: 13 stops',
        'Includes: Battery, charger, carrying case (lens not included)'
      ],
      description: 'The Blackmagic Pocket Cinema Camera 6K is a compact cinema camera that delivers Hollywood-quality 6K images with a Super 35 sensor and EF lens mount. Perfect for professional filmmakers and cinematographers looking for exceptional image quality.'
    }
  };
  
  // Helper functions to work with product data
  function getAllProducts() {
    return Object.values(productData);
  }
  
  function getProductById(id) {
    return productData[id];
  }
  
  function getProductsByCategory(category) {
    return Object.values(productData).filter(product => 
      category === 'all' || product.category === category
    );
  }