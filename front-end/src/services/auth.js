import bcrypt from 'bcryptjs';

export const campotoken = 'hfjbf83hubf9484yhfih20.thth.5.g5g';
export const secret = "secret-key-agrupatcc BEGIN-2020-56397810";

export const isAuthenticated = () => localStorage.getItem(campotoken) !== null;

export const getToken = () => localStorage.getItem(campotoken) !== null;

export const loginSetStorage = (crypttoken) => {
  localStorage.setItem(campotoken, crypttoken);
};
export const logout = () => {
  localStorage.removeItem(campotoken);
}
