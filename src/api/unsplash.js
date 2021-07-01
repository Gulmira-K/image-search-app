import axios from "axios";

export default axios.create({
   baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bAokVkExlOv_zi3G_yFgL5apFc3shW2HqCJXqJ3O0Xk'
      }
  })
