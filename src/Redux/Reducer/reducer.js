const initialState = {
    isConnected: false,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isConnected: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isConnected: false,
        };
      default:
        return state;
    }
  }