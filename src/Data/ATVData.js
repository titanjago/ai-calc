export const atvBrands = ['Yamaha', 'Kawasaki', 'KTM', 'Honda', 'Suzuki'];

export const atvModels = {
  Yamaha: ['YFZ450R', 'Raptor 700R', 'Raptor 250'],
  Kawasaki: ['KFX450R', 'KFX400', 'KFX250'],
  KTM: ['XC 525', 'XC 450', 'XC 250'],
  Honda: ['TRX450R', 'TRX400X', 'TRX250X'],
  Suzuki: ['LTR450', 'Quadracer R450', 'QuadSport Z400'],
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

  'Raptor 250': {
    sag: 110,
    frontShockCompression: 10,
    frontShockRebound: 8,
    rearShockCompression: 12,
    rearShockRebound: 10,
    highSpeedCompression: 2.3,
    lowSpeedCompression: 8,
    baseWeight: 175, // average rider weight
  },

  'YFZ450R': {
    sag: 105,
    frontShockCompression: 12,
    frontShockRebound: 10,
    rearShockCompression: 14,
    rearShockRebound: 12,
    highSpeedCompression: 2.5,
    lowSpeedCompression: 10,
    baseWeight: 185,
  },

  'Raptor 700R': {
    sag: 115,
    frontShockCompression: 11,
    frontShockRebound: 9,
    rearShockCompression: 13,
    rearShockRebound: 11,
    highSpeedCompression: 2.4,
    lowSpeedCompression: 9,
    baseWeight: 190,
  },

  'KFX450R': {
    sag: 100,
    frontShockCompression: 9,
    frontShockRebound: 7,
    rearShockCompression: 11,
    rearShockRebound: 9,
    highSpeedCompression: 2.2,
    lowSpeedCompression: 7,
    baseWeight: 180,
  },

  'KFX400': {
    sag: 95,
    frontShockCompression: 8,
    frontShockRebound: 6,
    rearShockCompression: 10,
    rearShockRebound: 8,
    highSpeedCompression: 2.1,
    lowSpeedCompression: 6,
    baseWeight: 170,
  },

  'KFX250': {
    sag: 90,
    frontShockCompression: 7,
    frontShockRebound: 5,
    rearShockCompression: 9,
    rearShockRebound: 7,
    highSpeedCompression: 2.0,
    lowSpeedCompression: 5,
    baseWeight: 160,
  },

  'XC 525': {
    sag: 120,
    frontShockCompression: 14,
    frontShockRebound: 12,
    rearShockCompression: 16,
    rearShockRebound: 14,
    highSpeedCompression: 2.7,
    lowSpeedCompression: 12,
    baseWeight: 200,
  },

  'XC 450': {
    sag: 115,
    frontShockCompression: 13,
    frontShockRebound: 11,
    rearShockCompression: 15,
    rearShockRebound: 13,
    highSpeedCompression: 2.6,
    lowSpeedCompression: 11,
    baseWeight: 195,
  },

  'XC 250': {
    sag: 110,
    frontShockCompression: 12,
    frontShockRebound: 10,
    rearShockCompression: 14,
    rearShockRebound: 12,
    highSpeedCompression: 2.5,
    lowSpeedCompression: 10,
    baseWeight: 190,
  },

  'TRX450R': {
    sag: 105,
    frontShockCompression: 11,
    frontShockRebound: 9,
    rearShockCompression: 13,
    rearShockRebound: 11,
    highSpeedCompression: 2.4,
    lowSpeedCompression: 9,
    baseWeight: 185,
  },

  'TRX400X': {
    sag: 100,
    frontShockCompression: 10,
    frontShockRebound: 8,
    rearShockCompression: 12,
    rearShockRebound: 10,
    highSpeedCompression: 2.3,
    lowSpeedCompression: 8,
    baseWeight: 180,
  },

  'TRX250X': {
    sag: 95,
    frontShockCompression: 9,
    frontShockRebound: 7,
    rearShockCompression: 11,
    rearShockRebound: 9,
    highSpeedCompression: 2.2,
    lowSpeedCompression: 7,
    baseWeight: 175,
  },
  'LTR450': {
    sag: 110,
    frontShockCompression: 12,
    frontShockRebound: 10,
    rearShockCompression: 14,
    rearShockRebound: 12,
    highSpeedCompression: 2.5,
    lowSpeedCompression: 10,
    baseWeight: 190,
  },

  'Quadracer R450': {
    sag: 105,
    frontShockCompression: 11,
    frontShockRebound: 9,
    rearShockCompression: 13,
    rearShockRebound: 11,
    highSpeedCompression: 2.4,
    lowSpeedCompression: 9,
    baseWeight: 185,
  },

  'QuadSport Z400': {
    sag: 100,
    frontShockCompression: 10,
    frontShockRebound: 8,
    rearShockCompression: 12,
    rearShockRebound: 10,
    highSpeedCompression: 2.3,
    lowSpeedCompression: 8,
    baseWeight: 180,
  },
};
   


const AtvData = {
  atvBrands,
  atvModels,
  suspensionSettings,
};

export default AtvData;
