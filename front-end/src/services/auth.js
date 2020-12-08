export const TOKEN_KEY = "secret-key-agrupatcc BEGIN-2020-56397810";
export const testeKey = 'njrvberjkvenflv';
let acessToken = '';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(acessToken);
export const login = acessToken => {
  localStorage.setItem(testeKey, acessToken);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};