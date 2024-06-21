import { toast } from "react-toastify"



export const baseUrl = "https://api.mpougadalaundry.com/"
// export const baseUrl = "http://localhost:3000"

export const prepareHeaders = (headers) => {
  const token = localStorage.getItem('token')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}

export const TokenValidator = () => {
  const token = localStorage.getItem('token')

  fetch(`${baseUrl}category`, {
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
