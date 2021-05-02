import Axios from "axios";
import ReduxStore from "../redux/Store";

// // Intercept fetch request
Axios.interceptors.request.use(function (config) {
  // Get token
  const store = ReduxStore.getStore();
  const state = store.getState();
  const token = state.AuthStore.tokenAPI;

  // Set token
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Intercept fetch response
Axios.interceptors.response.use(function (response) {
  
  console.log("Fetch Result", response.data)
  if (response.data) {

    // Handle Response success
    if (response.data.status === "SUCCESS") {
      return response.data;
    }

    // HandleResponse Error
    else {

      const errorMsg = response.data.message;
      // Handle Error message string
      if (typeof errorMsg === 'string') {
        return response.data;
      }

      // Handle Error message javascript object
      else {
        try {
          response.data.message = JSON.stringify(response.data.message)
        } catch (err) { }
        return response.data
      }

    }
  } else {
    throw new Error('Invalid response')
  }

}, function (error) {
  console.error("Fetch Error", error)
  return Promise.reject({
    status: "FATAL_ERROR",
    error: error,
  });
});

export default Axios;