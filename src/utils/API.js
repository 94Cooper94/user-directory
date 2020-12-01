import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getUserList: function() {
    return axios.get("https://dummyapi.io/data/api/user?limit=10", { headers: { 'app-id': "5fc67e44fa7a26679e467b77" }});
  }
};
