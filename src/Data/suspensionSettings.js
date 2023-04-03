export function getSuspensionSettings(model, weight, skill) {
    const baseSettings = suspensionSettings[model];
    if (!baseSettings) {
      return null;
    }
  
    const weightDifference = weight - baseSettings.baseWeight;
    const weightMultiplier = skill === 'expert' ? 0.5 : skill === 'intermediate' ? 0.75 : 1;
  
    const adjustedSettings = {
      forkCompression: baseSettings.forkCompression + Math.round(weightDifference * weightMultiplier),
      forkRebound: baseSettings.forkRebound + Math.round(weightDifference * weightMultiplier),
      shockCompression: baseSettings.shockCompression + Math.round(weightDifference * weightMultiplier),
      shockRebound: baseSettings.shockRebound + Math.round(weightDifference * weightMultiplier),
    };
  
    if (baseSettings.airForkPressure) {
      adjustedSettings.airForkPressure = baseSettings.airForkPressure;
    }
  
    return adjustedSettings;
  }
  