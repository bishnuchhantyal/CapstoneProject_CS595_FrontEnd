import axios from "axios";
import { config } from '../config/config';
const BASE_URL = "http://localhost:8081/";

const products = [
   {id: 1, title: 'Apple iPhone 8 Plus Gold 256GB 4G', description: 'Meld style and practicality with the Apple iPhone 8 Plus smartphone', price: '649.54', image: 'https://i.ebayimg.com/images/g/2tQAAOSwnhldR6hD/s-l640.jpg', amount: 5},
    {id: 2, title: 'Apple MacBook Pro Core i5 2.5GHz 13"', description: 'This MacBook Pro has been professionally restored to working order by an approved vendor', price: '339.97', image: 'https://i.ebayimg.com/images/g/AbEAAOSw2FJc3cCF/s-l1600.jpg', amount: 3},
    {id: 3, title: 'Canon EOS M50 Mirrorless Camera Body', description: '2160p UHD Video Recording, Built-in Flash, Body only, Auto Focus, AE/FE Lock, Tripod Thread', price: '450.00', image: 'https://i.ebayimg.com/images/g/PV8AAOSwX4FdRIac/s-l1600.jpg', amount: 4},
    {id: 4, title: 'VIZIO D-Series D24F-F1 24" Full HD Smart TV ', description: 'VIZIO D-Series D24F-F1 24" Full HD LED Smart TV. Condition is Manufacturer refurbished', price: '104.99', image: 'https://i.ebayimg.com/images/g/Pr0AAOSwd9ZdMgTG/s-l1600.jpg', amount: 2}
];

export function getProducts() {
  return axios.get(BASE_URL + "api/products").then(response => response.data);
}

export function getCartProducts(cart) {
  // return axios
  //   .post(BASE_URL + "api/products", { cart })
  //   .then(r esponse => response.data);
  return Promise.resolve(products);
}

export function isAuthenticated(username) {
 
  return true;
}

export function getUserRole(username) {
   axios.get(BASE_URL+'api/v1/users/username/'+username, config.authToken)
           .then(response =>{
             console.log(response.data.params.user.role.roleName);
            return response.data.params.user.role.roleName;
          });
}

export function login(date) {
  return true;
}

export function pay (){
  return Promise.resolve(true);
}
