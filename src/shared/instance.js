import axios from "axios";

const instance = axios.create({
    baseURL: "http://54.180.139.140/"
});

export function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
};
    
const USER_TOKEN = getCookie("USER_TOKEN");

instance.defaults.headers.common["Authorization"] = "Bearer " + USER_TOKEN;

export default instance;