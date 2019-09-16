import axios from 'axios'
import qs from 'qs'

export  const IP="http://192.168.43.140"

export function login(acc,pwd){
    return axios.post(IP+'/login.php',qs.stringify({acc,pwd}))
}
export function reg(acc,pwd){
    return axios.post(IP+'/reg.php',qs.stringify({acc,pwd}))
}
export function getcode(){
    return axios.get(IP+'/valitecode.php')
}
export function getlist(){
    return axios.get(IP+'/gethouselist.php')
}