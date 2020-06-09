import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer a1t1j86ThU5iK_52yg3SS18Dg6Y7f0rjhVpO_Qye0vuzKJse_zCc1jcmy1WAonZ8lPCXN-de7c52uuPkLSpC1iqLKxBl9j1W0mcM4LHP_r4UnLRMzKYHCvdgRDPeXnYx",
  },
});
