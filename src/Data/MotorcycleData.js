export const motorcycleBrands = ['Yamaha', 'Kawasaki', 'KTM', 'Honda', 'Suzuki'];

export const motorcycleModels = {
    Yamaha: ['YZ450F', 'YZ250F', 'YZ250 2-stroke', 'YZ125 2-stroke', 'PW50'],
    Kawasaki: ['KX450', 'KX250', 'KX85', 'KX65', 'KX50', 'KLX110', 'KX112'],
    KTM: ['500 EXC','450 SX-F', '350 SX-F','250 SX-F','250 SX', '250 XC-W TPI', '150 XC-W TPI', '125 SX', '85 SX', '65 SX', '50 SX Mini'],
    Honda: ['CRF450R', 'CRF250R', 'CRF150R', 'CRF110F', 'CRF50F'],
    Suzuki: ['RM-Z450', 'RM-Z250', 'RM85', 'DR-Z50'],
  };

  export const modelWeights = {
    'YZ450F': '110 kg',
    'YZ250F': '106 kg',
    'YZ250 2-stroke': '102 kg',
    'YZ125 2-stroke': '94 kg',
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
    '50 SX Mini': '41 kg',
    '500 EXC': 'PLACEHOLDER kg', // Replace with the actual weight
    '350 EXC': 'PLACEHOLDER kg', // Replace with the actual weight
    '250 SX': 'PLACEHOLDER kg', // Replace with the actual weight
    'CRF450R': '112 kg',
    'CRF250R': '105 kg',
    'CRF150R': '80 kg',
    'CRF110F': '73 kg',
    'CRF50F': '50 kg',
    'RM-Z450': '112 kg',
    'RM-Z250': '106 kg',
    'RM85': '74 kg',
    'DR-Z50': '54 kg',
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
      sag: 105, // Replace with the correct sag value
      forkCompression: 11,
      forkRebound: 15,
      shockCompression: 17,
      shockRebound: 12,
      baseWeight: 175, // average rider weight
    },
    'KX250': {
      forkCompression: 11,
      forkRebound: 11,
      shockCompression: 12,
      shockRebound: 11,
      baseWeight: 175, // average rider weight
      sag: 104,
    },
    'KX112': {
      forkCompression: 11,
      forkRebound: 0,
      shockCompression: 14,
      shockRebound: 9,
      baseWeight: 130, // average rider weight
      sag: 104,
    },
    'KX85': {
      forkCompression: 12,
      forkRebound: 12,
      shockCompression: 14,
      shockRebound: 14,
      baseWeight: 110, // average rider weight
      sag: 104,
    },
    'KX65': {
      forkCompression: 10,
      forkRebound: 10,
      shockCompression: 10,
      shockRebound: 10,
      baseWeight: 90, // average rider weight
      sag: 104,
    },
    'KLX110': {
      forkCompression: 6,
      forkRebound: 6,
      shockCompression: 6,
      shockRebound: 6,
      baseWeight: 75, // average rider weight
      sag: 104,
    },
    'KX50': {
      forkCompression: 8,
      forkRebound: 8,
      shockCompression: 8,
      shockRebound: 8,
      baseWeight: 60, // average rider weight
      sag: 104,
    },
  
    // ... other dirt bike models,
  
    'CRF450R': {
      forkCompression: 11,
      forkRebound: 12,
      shockCompression: 7,
      shockRebound: 9,
      baseWeight: 175, // average rider weight
      sag: 104,
    },
    'CRF250R': {
      forkCompression: 9,
      forkRebound: 10,
      shockCompression: 7,
      shockRebound: 10,
      baseWeight: 175, // average rider weight
      sag: 104,
    },
    'CRF150R': {
      forkCompression: 8,
      forkRebound: 8,
      shockCompression: 8,
      shockRebound: 8,
      baseWeight: 130, // average rider weight
      sag: 104,
    },
    'CRF110F': {
      forkCompression: 6,
      forkRebound: 6,
      shockCompression: 6,
      shockRebound: 6,
      baseWeight: 75, // average rider weight
      sag: 104,
    },
    'CRF50F': {
      forkCompression: 4,
      forkRebound: 4,
      shockCompression: 4,
      shockRebound: 4,
      baseWeight: 60, // average rider weight
      sag: 104,
    },
  
  // KTM models
  '500 EXC': {
  forkCompression: 12,
  forkRebound: 12,
  shockCompression: 12,
  shockRebound: 12,
  baseWeight: 175, // average rider weight
  sag: 104,
  },
  '450 SX-F': {
    forkCompression: 14,
    forkRebound: 15,
    shockCompression: 11,
    shockRebound: 14,
    baseWeight: 175, // average rider weight
    airForkPressure: 152, // average air pressure between 148 and 157
    sag: 104,
  },
  '350 EXC': {
    forkCompression: 13,
    forkRebound: 15,
    shockCompression: 11,
    shockRebound: 15,
    baseWeight: 175, // average rider weight
    airForkPressure: 152, // average air pressure between 148 and 157
    sag: 104,
  },
  '250 SX-F': {
    forkCompression: 12,
    forkRebound: 16,
    shockCompression: 12,
    shockRebound: 13,
    baseWeight: 175, // average rider weight
    airForkPressure: 152, // average air pressure between 148 and 157
    sag: 104,
  },
  '250 SX': {
    forkCompression: 12,
    forkRebound: 12,
    shockCompression: 14,
    shockRebound: 14,
    baseWeight: 175, // average rider weight
    airForkPressure: 152, // average air pressure between 148 and 157
    sag: 104,
  },
  '150 SX': {
    forkCompression: 12,
    forkRebound: 12,
    shockCompression: 12,
    shockRebound: 12,
    baseWeight: 130, // average rider weight
    airForkPressure: 152, // average air pressure between 148 and 157
    sag: 104,
  },
  '125 SX': {
    forkCompression: 12,
    forkRebound: 12,
    shockCompression: 12,
    shockRebound: 12,
    baseWeight: 130, // average rider weight
    airForkPressure: 152, // average air pressure between 148 and 157
    sag: 104,
  },
  
  '85 SX': {
  forkCompression: 10,
  forkRebound: 10,
  shockCompression: 10,
  shockRebound: 10,
  baseWeight: 110, // average rider weight
  sag: 104,
  },
  '65 SX': {
  forkCompression: 8,
  forkRebound: 8,
  shockCompression: 8,
  shockRebound: 8,
  baseWeight: 90, // average rider weight
  sag: 104,
  },
  '50 SX': {
  forkCompression: 6,
  forkRebound: 6,
  shockCompression: 6,
  shockRebound: 6,
  baseWeight: 60, // average rider weight
  sag: 104,
  },
  '50 SX Mini': {
  forkCompression: 6,
  forkRebound: 6,
  shockCompression: 6,
  shockRebound: 6,
  baseWeight: 60, // average rider weight
  sag: 104,
  },
  
  // Suzuki models
  'RM-Z450': {
  forkCompression: 12,
  forkRebound: 12,
  shockCompression: 12,
  shockRebound: 12,
  baseWeight: 175, // average rider weight
  sag: 104,
  },
  'RM-Z250': {
  forkCompression: 12,
  forkRebound: 12,
  shockCompression: 12,
  shockRebound: 12,
  baseWeight: 175, // average rider weight
  sag: 104,
  },
  'RM85': {
  forkCompression: 8,
  forkRebound: 8,
  shockCompression: 10,
  shockRebound: 10,
  baseWeight: 110, // average rider weight
  sag: 104,
  },
  'DR-Z50': {
  forkCompression: 2,
  forkRebound: 2,
  shockCompression: 2,
  shockRebound: 2,
  baseWeight: 60, // average rider weight
  sag: 104,
},

// Yamaha models
'YZ450F': {
forkCompression: 12,
forkRebound: 12,
shockCompression: 12,
shockRebound: 12,
baseWeight: 175, // average rider weight
sag: 104,
},
'YZ250F': {
forkCompression: 12,
forkRebound: 12,
shockCompression: 12,
shockRebound: 12,
baseWeight: 175, // average rider weight
sag: 104,
},
'YZ125': {
forkCompression: 12,
forkRebound: 12,
shockCompression: 12,
shockRebound: 12,
baseWeight: 130, // average rider weight
sag: 104,
},
'YZ85': {
forkCompression: 10,
forkRebound: 10,
shockCompression: 10,
shockRebound: 10,
baseWeight: 110, // average rider weight
sag: 104,
},
'YZ65': {
forkCompression: 8,
forkRebound: 8,
shockCompression: 8,
shockRebound: 8,
baseWeight: 90, // average rider weight
sag: 104,
},
'YZ50': {
forkCompression: 6,
forkRebound: 6,
shockCompression: 6,
shockRebound: 6,
baseWeight: 60, // average rider weight
sag: 104,
},
'TTR110': {
forkCompression: 6,
forkRebound: 6,
shockCompression: 6,
shockRebound: 6,
baseWeight: 75, // average rider weight
sag: 104,
},
'TTR50': {
forkCompression: 4,
forkRebound: 4,
shockCompression: 4,
shockRebound: 4,
baseWeight: 60, // average rider weight
sag: 104,
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