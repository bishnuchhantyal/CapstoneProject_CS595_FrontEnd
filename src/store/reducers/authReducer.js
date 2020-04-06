import { userConstants } from '../../_constants/userConstants';
  
  const initialState = {
    userAuth: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case userConstants.LOGIN_SUCCESS:
        return {
          ...state,
          userAuth: action.user
        };
      case userConstants.LOGIN_FAILURE:
        return {
          ...state,
          userAuth: action.error
          
        };

      case userConstants.LOGOUT:
        return {};
      
      default:
        return state;
    }
  }
  