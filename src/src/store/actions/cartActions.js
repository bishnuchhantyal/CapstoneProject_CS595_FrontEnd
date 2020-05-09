import axios from 'axios';
import { config } from '../../config/config'
import { productConstants } from '../../_constants/productConstants';

export const addToCart = (product) => {
 
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: 1
        }
    }
};



export const updateCartQuantity = (productId, quantity) => {

    return {
        type: 'UPDATE_CART_QUANTITY',
        payload: {
            productId,
            quantity: quantity
        }
    }
};

export const addCarts = (products) => {
    return (dispatch) => {
        let usersSession = JSON.parse(localStorage.getItem('aimsUser'));

        if (usersSession !== null) {
            axios.post(config.baseUrl + '/api/v1/carts', products, config.authToken)
                .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                    // dispatch(success(res.data));
                })
                .catch((error) => {
                    console.log("AXIOS ERROR: ", error);
                })

        }else{
            console.log("user is nottttt logged in.")
        }
        function success(products) { return { type: productConstants.ADD_TO_CART, products } }
    }

};
