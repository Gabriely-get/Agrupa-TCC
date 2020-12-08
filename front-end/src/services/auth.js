<<<<<<< HEAD
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
=======
export const TOKEN_KEY = "secret-key-agrupatcc BEGIN-2020-56397810";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = api_token => {
  localStorage.setItem(TOKEN_KEY, api_token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
};