import blockedData from "../data/blockedZones.json";

export const fetchBlockedZones = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blockedData);
    }, 800);
  });
};
