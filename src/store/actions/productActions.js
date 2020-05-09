import axios from 'axios';
import { config } from '../../config/config'
import { productConstants } from '../../_constants/productConstants';

export const saveProduct = (product) => {
    return (dispatch) => {
        let usersSession = JSON.parse(localStorage.getItem('aimsUser'));

        if (usersSession !== null) {
            let formData = new FormData();
            formData.append("file", product.file)
            formData.append("title", product.title)
            formData.append("price", product.price)
            formData.append("description", product.description)
            axios.post(config.baseUrl + '/api/v1/products', formData, config.authToken)
                .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                    dispatch(success(res.data));  
                })
                .catch((error) => {
                    console.log("AXIOS ERROR: ", error);
                })

        }else{
            console.log("user is nottttt logged in.")
        }
        function success(product) { return { type: productConstants.PRODUCT_ADD, product } }
    }

}

export const updateProduct = (product) => {
    return (dispatch) => {
        let usersSession = JSON.parse(localStorage.getItem('aimsUser'));

        if (usersSession !== null) {
            axios.put(config.baseUrl + '/api/v1/products', product, config.authToken)
                .then((res) => {
                    console.log("RESPONSE RECEIVED: ", res);
                    dispatch(success(res.data));
                })
                .catch((error) => {
                    console.log("AXIOS ERROR: ", error);
                })

        }else{
            console.log("user is nottttt logged in.")
        }
        function success(product) { return { type: productConstants.PRODUCT_UPDATE, product } }
    }

}

export const listProduct = () => {
    return (dispatch) => {
        axios.get(config.baseUrl+'/api/v1/products',config.authToken)
             .then(res=>{
                console.log("RESPONSE RECEIVED: ", res);
                 dispatch(success(res.data));
             }).catch((error) => {
                console.log("AXIOS ERROR: ", error);
            })
            function success(products) { return { type: productConstants.PRODUCT_LIST, products } }
    }
}

export const deleteProduct = (id) => {

    return (dispatch) => {
        console.log( config.authToken)
        axios.delete(config.baseUrl+'/api/v1/products/'+id,  config.authToken)
        .then(res => {
            console.log("RESPONSE RECEIVED: ", res);
            dispatch(success(res));
            window.location.replace('/product-list')
        }).catch((error) => {
           console.log("AXIOS ERROR: ", error);
       })
       function success(products) { return { type: productConstants.PRODUCT_DELETE, products } }
    }
}

