let user = JSON.parse(localStorage.getItem('aimsUser'));
let accesToken;
if(user!==null){
    accesToken = user.access_token
}else{
    console.log('user is not logged in.')
}
export const config = {
    baseUrl: 'http://localhost:8081',
    // baseUrl: 'http://onlineshoppingcartdemousingspringboo-env.eba-7qt2bm2h.us-east-2.elasticbeanstalk.com',
    grantType: 'password',
    clientId: 'ecommerce-read-write-client',
    authUser: 'ecommerce-read-write-client',
    authPassword: 'pass1234',
    initAuthorization: 'Basic ZWNvbW1lcmNlLXJlYWQtd3JpdGUtY2xpZW50OnBhc3MxMjM0',
    authToken: {
        headers: { Authorization: "Bearer " + accesToken }} 
}
