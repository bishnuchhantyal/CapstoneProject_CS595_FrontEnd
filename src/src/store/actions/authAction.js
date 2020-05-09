import axios from 'axios';
import { userConstants } from '../../_constants/userConstants';
import { config } from '../../config/config';

export const login = (username, password) => {

    return (dispatch) => {
        const params = new URLSearchParams();
        params.set('grant_type', config.grantType);
        params.set('client_id', config.clientId);
        params.set('username', username);
        params.set('password', password);

        console.log('roleeee vvv '+localStorage.getItem('roleName'))
        axios.post(config.baseUrl + '/oauth/token', params, { headers: { Authorization: config.initAuthorization } })
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res.data);
                let data = res.data;
                let usersSession = localStorage.getItem('aimsUser');
                if (usersSession === null) {
                    let objUserAuth = {
                        access_token: data.access_token,
                        expires_in: data.expires_in,
                        refresh_token: data.refresh_token,
                        scope: data.scope,
                        token_type: data.token_type,
                    }
                    localStorage.setItem('aimsUser', JSON.stringify(objUserAuth));
                    dispatch(success(objUserAuth));
                }
                
               let role = localStorage.getItem('roleName');
               if(role === null){
                axios.get(config.baseUrl + '/api/v1/users/username/' + username, {headers: { Authorization: "Bearer " +  data.access_token }})
                .then(response => {
                    let roleName =  response.data.params.user.role.roleName;
                    localStorage.setItem('roleName', roleName);
                    if(roleName==='ROLE_ADMIN'){
                        window.location.replace('/product-list')
                    }else{
                        window.location.replace('/')
                    }
                }).catch((error) => {
                    console.log("AXIOS ERRORRRR: ", error);
                    dispatch(failure(error))
                })
               }
            }).catch((error) => {
                console.log("AXIOS ERROR: ", error);
                dispatch(failure(error))
            })

    }

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export const logout = () => {
    localStorage.clear();
    window.location.replace('/')
}
