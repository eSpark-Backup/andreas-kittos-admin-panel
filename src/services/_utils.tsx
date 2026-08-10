import { toast } from "react-toastify"
import { jwtDecode } from "jwt-decode";
export const baseUrl = import.meta.env.VITE_BASE_URL

// Function to check token expiration
function isTokenExpired(token) {
  if (!token) return true;
  const decodedToken = jwtDecode(token);
  const now = Date.now() / 1000;
  return decodedToken.exp < now;
}

export const prepareHeaders = (headers) => {
  const token = localStorage.getItem('token');

  if (token && isTokenExpired(token)) {
    localStorage.removeItem('token');
    window.location.reload();
    toast.error("Session Expired! Please login again")
    return headers;
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
}


export const TokenValidator = () => {
  const token = localStorage.getItem('token')

  fetch(`${baseUrl}user/checkToken`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      if (data?.statusCode === 401) {
        toast.error("Session Expired! Please login again")
        localStorage.clear("token")
        window.location.reload()
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
