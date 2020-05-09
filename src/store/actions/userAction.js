import axios from 'axios';
import { config } from '../../config/config'
import { userConstants } from '../../_constants/userConstants';

export const saveUser = (user) => {
    return (dispatch) => {
        axios.post(config.baseUrl + '/signup', user, config.authToken)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
                dispatch(success(res.data));
            })
            .catch((error) => {
                console.log("AXIOS ERROR: ", error);
            })

        function success(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    }

}


export const listUser = () => {
    return (dispatch) => {
        axios.get(config.baseUrl+'/api/v1/users',config.authToken)
             .then(res=>{
                console.log("RESPONSE RECEIVED: ", res);
                 dispatch(success(res.data));
             }).catch((error) => {
                console.log("AXIOS ERROR: ", error);
            })
            function success(users) { return { type: userConstants.DETALL_REQUEST, users } }
    }
}

export const deleteUser = (id) => {

    return (dispatch) => {
        axios.delete(config.baseUrl+'/api/v1/users/'+id,  config.authToken)
        .then(res => {
            console.log("RESPONSE RECEIVED: ", res);
            dispatch(success(res));
            window.location.replace('/user-list')
        }).catch((error) => {
           console.log("AXIOS ERROR: ", error);
       })
       function success(users) { return { type: userConstants.DELETE_REQUEST, users } }
    }
}