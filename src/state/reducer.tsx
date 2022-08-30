export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
      };
    case 'LOAD_DEVICES':
      console.log(action);
      return {
        ...state,
        devices: action.payload.devices,
      };
    case 'LOAD_USERS':
      console.log(action);
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};
