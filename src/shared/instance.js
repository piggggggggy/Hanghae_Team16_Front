import axios from "axios";

const instance = axios.create({
    baseUrl: "http://54.180.139.140/"
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;