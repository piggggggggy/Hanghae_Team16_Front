import axios from "axios";

const instance = axios.create({
    baseUrl: "이따 적을거"
});

// instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default instance;