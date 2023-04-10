export const motorcycleBrands = ['Yamaha', 'Kawasaki', 'KTM', 'Honda', 'Suzuki', 'Cobra'];

export const motorcycleModels = {
  Yamaha: ['YZ450F', 'YZ250F', 'YZ250 2-stroke', 'YZ125 2-stroke','YZ85', 'YZ65','PW50'],
  Kawasaki: ['KX450', 'KX250', 'KX85', 'KX65', 'KX50', 'KLX110', 'KX112'],
  KTM: ['500 EXC','450 SX-F', '350 SX-F','250 SX-F','250 SX', '250 XC-W TPI', '150 XC-W TPI', '125 SX', '85 SX', '65 SX','50 SX', '50 SX Mini'],
  Honda: ['CRF450R', 'CRF250R', 'CR250', 'CRF150R','CR85R', 'CRF110F', 'CRF50F'],
  Suzuki: ['RM-Z450', 'RM-Z250', 'RM85', 'DR-Z50'],
  Cobra: ['Cobra 50 SX', 'Cobra 65 SX'], // Add Cobra models here
};


  export const modelWeights = {
    'YZ450F': '110 kg',
    'YZ250F': '106 kg',
    'YZ250 2-stroke': '102 kg',
    'YZ125 2-stroke': '94 kg',
    'YZ65': '60 kg',
    'PW50': '41 kg',
    'KX450': '106 kg',
    'KX250': '104 kg',
    'KX85': '75 kg',
    'KX65': '60 kg',
    'KX50': '47 kg',
    'KLX110': 'PLACEHOLDER kg', // Replace with the actual weight
    'KX112': 'PLACEHOLDER kg', // Replace with the actual weight
    '450 SX-F': '100 kg',
    '250 SX-F': '98 kg',
    '250 XC-W TPI': '100 kg',
    '150 XC-W TPI': '92 kg',
    '125 SX': '89 kg',
    '85 SX': '67 kg',
    '65 SX': '53 kg',
    '50 SX': '45 kg',
    '50 SX Mini': '41 kg',
    '500 EXC': 'PLACEHOLDER kg', // Replace with the actual weight
    '350 EXC': 'PLACEHOLDER kg', // Replace with the actual weight
    '250 SX': 'PLACEHOLDER kg', // Replace with the actual weight
    'CRF450R': '112 kg',
    'CRF250R': '105 kg',
    'CR250': '100 kg', 
    'CRF150R': '80 kg',
    'CR85': '75 kg',
    'CRF110F': '73 kg',
    'CRF50F': '50 kg',
    'RM-Z450': '112 kg',
    'RM-Z250': '106 kg',
    'RM85': '74 kg',
    'DR-Z50': '54 kg',
    'Cobra 50 SX': 'PLACEHOLDER kg', // Replace with the actual weight
    'Cobra 65 SX': 'PLACEHOLDER kg', // Replace with the actual weight
  };
  

  export const suspensionSettings = {
    skills: {
      beginner: 1,
      intermediate: 1.2,
      expert: 1.4,
    },
    trackConditions: {
      soft: 1,
      medium: 1.1,
      hard: 1.2,
    },
    'KX450': {
      sag: 103, // Replace with the correct sag value
      forkCompression: 11,
      forkRebound: 12,
      highSpeedCompression: 2.5, // Add high-speed compression value
      lowSpeedCompression: 11, // Add low-speed compression value
      shockRebound: 10,
      baseWeight: 175, // average rider weight
    },
    'KX250': {
      forkCompression: 11,
      forkRebound: 11,
      highSpeedCompression: 2.9, // Add high-speed compression value
      lowSpeedCompression: 9, // Add low-speed compression value
      shockRebound: 11,
      baseWeight: 175, // average rider weight
      sag: 102,
    },
    'KX112': {
      forkCompression: 11,
      forkRebound: 0,
      highSpeedCompression: 0.0, // Add high-speed compression value
      lowSpeedCompression: 11, // Add low-speed compression value
      shockRebound: 5,
      baseWeight: 130, // average rider weight
      sag: 90,
    },
    'KX85': {
      forkCompression: 11,
      forkRebound: 0,
      highSpeedCompression: 0.0, // Add high-speed compression value
      lowSpeedCompression: 11, // Add low-speed compression value
      shockRebound: 5,
      baseWeight: 110, // average rider weight
      sag: 90,
    },
  
  
    'KX65': {
      forkCompression: 4,
      forkRebound: 7,
      highSpeedCompression: 3.0, // Add high-speed compression value
      lowSpeedCompression: 10, // Add low-speed compression value
      shockRebound:  7,
      baseWeight: 90, // average rider weight
      sag: 70,
    },
    'KLX110': {
      forkCompression: 3,
      forkRebound: 5,
      highSpeedCompression: 3.0, // Add high-speed compression value
      lowSpeedCompression: 10, // Add low-speed compression value
      shockRebound: 6,
      baseWeight: 75, // average rider weight
      sag: 80,
    },
    'KX50': {
      forkCompression: 3,
      forkRebound: 2,
      highSpeedCompression: 2.5, // Add high-speed compression value
      lowSpeedCompression: 4, // Add low-speed compression value
      shockRebound: 6,
      baseWeight: 60, // average rider weight
      sag: 60,
    },
  
    'CRF450R': {
      sag: 99,
      forkCompression: 11,
      forkRebound: 16,
      highSpeedCompression: 4.,
      lowSpeedCompression: 6,
      shockRebound: 4,
      baseWeight: 175,
    },
    'CRF250R': {
      sag: 104,
      forkCompression: 9,
      forkRebound: 11,
      highSpeedCompression: 5.25,
      lowSpeedCompression: 5,
      shockRebound: 4,
      baseWeight: 175,
    },
    'CR250': {
      sag: 104,
      forkCompression: 9,
      forkRebound: 11,
      highSpeedCompression: 5.25,
      lowSpeedCompression: 5,
      shockRebound: 4,
      baseWeight: 175,
    },
    'CRF150R': {
      sag: 90,
      forkCompression: 9,
      forkRebound: 11,
      highSpeedCompression: 4.25,
      lowSpeedCompression: 6,
      shockRebound: 4,
      baseWeight: 130,
    },

    'CR85': {
      sag: 87,
      forkCompression: 8,
      forkRebound: 11,
      highSpeedCompression: 3.25,
      lowSpeedCompression: 6,
      shockRebound: 4,
      baseWeight: 130,
    },
    // ... other Honda models
    'CRF110F': {
      sag: 50,
      forkCompression: 6,
      forkRebound: 4,
      highSpeedCompression: 2.5,
      lowSpeedCompression: 6,
      shockRebound: 6,
      baseWeight: 75,
    },
    'CRF50F': {
      sag: 45,
      forkCompression: 5,
      forkRebound: 3,
      highSpeedCompression: 0.25,
      lowSpeedCompression: 2,
      shockRebound: 4,
      baseWeight: 60,
    },
  // KTM models
  '500 EXC': {
    sag: 100,
    forkCompression: 11,
    forkRebound: 16,
    highSpeedCompression: 3.25,
    lowSpeedCompression: 7,
    shockRebound: 5,
    baseWeight: 175,
  },
  '450 SX-F': {
    forkCompression: 14,
    forkRebound: 15,
    highSpeedCompression: 3.0,
    lowSpeedCompression: 6,
    shockRebound: 18,
    baseWeight: 175, // average rider weight
    baseAirForkPressure: 153,
  minAirForkPressure: 148,
  maxAirForkPressure: 153,
    sag: 104,
  },
  '350 SX-F': {
    forkCompression: 13,
    forkRebound: 15,
    highSpeedCompression: 3.5,
    lowSpeedCompression: 8,
    shockRebound: 16,
    baseWeight: 175, // average rider weight
    baseAirForkPressure: 153,
  minAirForkPressure: 148,
  maxAirForkPressure: 153,
    sag: 104,
  },
  '250 SX-F': {
    forkCompression: 12,
    forkRebound: 16,
    highSpeedCompression: 4.5,
    lowSpeedCompression: 10,
    shockRebound: 13,
    baseWeight: 175, // average rider weight
    baseAirForkPressure: 153,
  minAirForkPressure: 148,
  maxAirForkPressure: 152,
    sag: 105,
  },
  '250 SX': {
    forkCompression: 11,
    forkRebound: 13,
    highSpeedCompression: 3.5,
    lowSpeedCompression: 10,
    shockRebound: 12,
    baseWeight: 175, // average rider weight
    baseAirForkPressure: 153,
  minAirForkPressure: 148,
  maxAirForkPressure: 150,
    sag: 104,
  },
  '150 SX': {
    forkCompression: 10,
    forkRebound: 13,
    highSpeedCompression: 3.25,
    lowSpeedCompression: 10,
    shockRebound: 12,
    baseWeight: 130, // average rider weight
    baseAirForkPressure: 153,
  minAirForkPressure: 148,
  maxAirForkPressure: 150,
    sag: 105,
  },
  '125 SX': {
    forkCompression: 11,
    forkRebound: 12,
    highSpeedCompression: 3.55,
    lowSpeedCompression: 9,
    shockRebound: 12,
    baseWeight: 130, // average rider weight
    baseAirForkPressure: 153,
  minAirForkPressure: 148,
  maxAirForkPressure: 148,
    sag: 104,
  },
  
  '85 SX': {
  forkCompression: 10,
  forkRebound: 11,
  highSpeedCompression: 3.0,
    lowSpeedCompression: 8,
    baseAirForkPressure: 153,
    minAirForkPressure: 148,
    maxAirForkPressure: 148,
  shockRebound: 8,
  baseWeight: 110, // average rider weight
  sag: 84,
  },
  '65 SX': {
  forkCompression: 9,
  forkRebound: 8,
  highSpeedCompression: 3.25,
    lowSpeedCompression: 8,

    baseAirForkPressure: 153,
    minAirForkPressure: 148,
    maxAirForkPressure: 148,
  shockRebound: 6,
  baseWeight: 90, // average rider weight
  sag: 70,
  },
  '50 SX': {
  forkCompression: 7,
  forkRebound: 6,
  highSpeedCompression: 3.,
    lowSpeedCompression: 10,
    baseAirForkPressure: 14,
    minAirForkPressure: 14,
    maxAirForkPressure: 20,
  shockRebound: 6,
  baseWeight: 60, // average rider weight
  sag: 65,
  },
  '50 SX Mini': {
  forkCompression: 6,
  forkRebound: 6,
  highSpeedCompression: 2.25,
    lowSpeedCompression: 10,
  shockRebound: 6,
  baseWeight: 60, // average rider weight
  sag: 40,
  },
  
  // Suzuki models
  'RM-Z450': {
  forkCompression: 13,
  forkRebound: 12,
  highSpeedCompression: 3,
    lowSpeedCompression: 11,
  shockRebound: 12,
  baseWeight: 175, // average rider weight
  sag: 103,
  },
  'RM-Z250': {
  forkCompression: 15,
  forkRebound: 13,
  highSpeedCompression: 5,
    lowSpeedCompression: 10,
  shockRebound: 12,
  baseWeight: 175, // average rider weight
  sag: 104,
  },
  'RM85': {
    sag: 105,
    forkCompression: 9,
    forkRebound: 11,
    highSpeedCompression: 3.,
    lowSpeedCompression: 5,
    shockRebound: 5,
    baseWeight: 87,
  },
  'DR-Z50': {
  forkCompression: 2,
  forkRebound: 2,
  highSpeedCompression: 2.25,
    lowSpeedCompression: 2,
  shockRebound: 2,
  baseWeight: 60, // average rider weight
},

// Yamaha models
'YZ450F': {
forkCompression: 11,
forkRebound: 15,
highSpeedCompression: 3.25,
    lowSpeedCompression: 10,
shockRebound: 12,
baseWeight: 175, // average rider weight
sag: 104,
},
'YZ250F': {
forkCompression: 17,
forkRebound: 12,
highSpeedCompression: 2.25,
    lowSpeedCompression: 7,
shockRebound: 6,
baseWeight: 175, // average rider weight
sag: 103.1,
},
'YZ250 2-stroke': {
  forkCompression: 12,
forkRebound: 8,
highSpeedCompression: 3.25,
    lowSpeedCompression: 7,
shockRebound: 5,
baseWeight: 175, // average rider weight
sag: 104,
  },
  
'YZ125 2-stroke': {
forkCompression: 11,
forkRebound: 7,
highSpeedCompression: 3.25,
    lowSpeedCompression: 6,
shockRebound: 5,
baseWeight: 130, // average rider weight
sag: 103,
},
'YZ85': {
forkCompression: 10,
forkRebound: 7,
highSpeedCompression: 3.,
    lowSpeedCompression: 6,
shockRebound: 6,
baseWeight: 110, // average rider weight
sag: 87,
},
'YZ65': {
forkCompression: 8,
forkRebound: 7,
highSpeedCompression: 2.25,
    lowSpeedCompression: 7,
shockRebound: 8,
baseWeight: 90, // average rider weight
sag: 70,
},
'YZ50': {
forkCompression: 6,
forkRebound: 6,
highSpeedCompression: 2.25,
lowSpeedCompression: 10,
shockRebound: 6,
baseWeight: 60, // average rider weight
sag: 40,
},
'TTR110': {
forkCompression: 6,
forkRebound: 6,
highSpeedCompression: 2.25,
    lowSpeedCompression: 10,
shockRebound: 6,
baseWeight: 75, // average rider weight
sag: 70,
},
'TTR50': {
forkCompression: 4,
forkRebound: 4,
highSpeedCompression: 2.25,
    lowSpeedCompression: 10,
shockRebound: 4,
baseWeight: 60, // average rider weight

},
'Cobra 65 SX': {
  forkCompression: 9,
  forkRebound: 7,
  highSpeedCompression: 3.25,
    lowSpeedCompression: 8,
  shockRebound: 5,
  baseWeight: 90, // average rider weight
  sag: 70,
  },
'Cobra 50 SX': {
  forkCompression: 8,
  forkRebound: 7,
  highSpeedCompression: 3.,
    lowSpeedCompression: 10,
  baseWeight: 60, // average rider weight
  sag: 60,
  },
};

const motorcycleData = {
motorcycleBrands,
motorcycleModels,
modelWeights,
suspensionSettings,
};

export default motorcycleData;
// ktm 450,350, 250f, 250SX,kx 450, kx250, CRF 450, Crf 250 so far is all correct data straight from MXA