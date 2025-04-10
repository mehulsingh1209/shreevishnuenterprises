 description: 'High-Efficiency Power Transformer 100KVA designed for optimal energy conversion with minimal losses. Built with premium materials and advanced technology for reliable operation in demanding environments.',
      features: [
        'Energy efficiency rating: 98.5%',
        'Low-noise operation',
        'Built-in thermal protection',
        'Advanced cooling system',
        'Robust metal casing for enhanced protection'
      ],
      specifications: {
        'Power Rating': '100 KVA',
        'Input Voltage': '11 kV',
        'Output Voltage': '440V',
        'Frequency': '50 Hz',
        'Cooling Method': 'ONAN (Oil Natural Air Natural)',
        'Dimensions': '1200 x 900 x 1500 mm',
        'Weight': '1200 kg'
      },
      stock: 15
    },
    {
      id: 'grid-analyzer',
      title: 'Advanced Grid Performance Analyzer',
      category: 'Grid Operations',
      price: 135000,
      rating: 4.0,
      reviews: 18,
      image: '/images/grid-analyzer.jpg',
      badge: 'New',
      description: 'State-of-the-art grid performance analyzer that monitors and diagnoses power quality issues in real-time. Provides comprehensive insights for optimizing grid operations and preventing failures.',
      features: [
        'Real-time power quality monitoring',
        'Advanced fault detection algorithms',
        'Data logging with cloud backup',
        'Harmonic analysis up to 50th order',
        'Integrated reporting tools'
      ],
      specifications: {
        'Display': '10.1" touchscreen',
        'Communication': 'Ethernet, Wi-Fi, 4G',
        'Memory': '32 GB SSD',
        'Sampling Rate': '25.6 kHz',
        'Battery Life': '8 hours',
        'IP Rating': 'IP65',
        'Dimensions': '320 x 240 x 60 mm',
        'Weight': '2.5 kg'
      },
      stock: 8
    },
    // More products...
  ];
  
  // Handle GET request
  if (req.method === 'GET') {
    const { category, search, limit } = req.query;
    
    let filteredProducts = [...products];
    
    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by search term
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // Limit results
    if (limit) {
      filteredProducts = filteredProducts.slice(0, parseInt(limit, 10));
    }
    
    res.status(200).json(filteredProducts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
