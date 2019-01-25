import { API_URL } from 'api/auth.js';

const auth = (user, password) => fetch(`${API_URL}/auth?user=${user}&&password=${password}`);

export { auth };
