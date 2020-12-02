import axios from "../utils/request"
import base from "./base"

const KEY = "d7c335f2e7856ec48c1962a99fcc6f98"

const api  = {
    /**
     * 抗击疫情
     */
    ncov(){
        return axios.get(base.baseUrl + base.ncov +"?key=" + KEY)
    },
    ncovcity(){
        return axios.get(base.baseUrl + base.ncovcity +"?key=" + KEY)
    }
}

export default api;