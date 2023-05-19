import { role } from "./apiCalls/auth"

function getCookies(){
    const cookies = document.cookie.split('; ')
    const cookiesObject = {}

    cookies.forEach(cookie =>{
        const [name, value] = cookie.split('=')
        cookiesObject[name] = value
    })
    return cookiesObject
}

export function checkAuth(){
    const cookies = getCookies()
    if(!cookies.userID){
        return false
    }
    return true
}