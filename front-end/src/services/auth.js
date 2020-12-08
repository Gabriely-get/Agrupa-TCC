export const TOKEN_KEY = "secret-key-agrupatcc BEGIN-2020-56397810";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = api_token => {
  localStorage.setItem(TOKEN_KEY, api_token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};