export const setAccessToken = accToken => {
  localStorage.setItem("accToken", accToken);
};
export const getAccessToken = () => {
  return localStorage.getItem("accToken");
};
export const clearAccessToken = () => {
  localStorage.removeItem("accToken");
};
