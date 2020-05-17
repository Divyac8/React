
import { axios } from 'axios';


export const register = newUser => {

    return axios.post('http://18.219.121.39:8080/auth/register',{
        fistname : newUser.firstname,
        lastname : newUser.lastname,
        username : newUser.username,
        password : newUser.password

    })
    .then(res =>{
        console.log("registered!");
    })
}


export const login = loginUser => {

    return axios.post('http://18.219.121.39:8080/auth/login',{
        email : loginUser.email,
        password : loginUser.password

    })
    .then(res =>{
        console.log("login!");
    })
}




// export function postData(type, userData) {
//     let apiUrl = "http://18.219.121.39:8080/auth/register";
//     return new promise((resolve, reject) => {
//             fetch(apiUrl + type), {
//                     method = 'POST',
//                     body: JSON.stringify(userData,{
                        
//                       }),
//                 }
//                 .then((response) => response.json())
//                 .then((responseJson) => {
//                     resolve(responseJson);
//                 })
//                 .catch((error) => {
//                     reject(error);
//                 });


//         }

//     )
// }