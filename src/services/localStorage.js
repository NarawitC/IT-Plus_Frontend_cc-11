const ACCESS_TOKEN = 'accessToken';
const MOD_TOKEN = 'modToken';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const removeAccessTOken = () => localStorage.removeItem(ACCESS_TOKEN);

export const getModsToken = () => localStorage.getItem(MOD_TOKEN);
export const setModsToken = (token) => localStorage.setItem(MOD_TOKEN, token);
export const removeModsTOken = () => localStorage.removeItem(MOD_TOKEN);
