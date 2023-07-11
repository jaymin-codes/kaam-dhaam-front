export const initialState = {

    IsLogin:false,
    DIsLogin:false,
    IsRegister:false,
    Loading:false,

};

const reducer = (state,action)  =>
{

    switch(action.type)
    {
    case 'Login':
    return{
        ...state,IsLogin:true,
    };
    case 'Logout':
        return{
            ...state,IsLogin:false,
        };
    case 'Register':
        return{
            ...state,IsRegister:true,
        };
    case 'NotRegister':
        return{
            ...state,IsRegister:false,
        };
    case 'DLogin':
        return{
            ...state,DIsLogin:true,
        };
    case 'DLogout':
        return{
            ...state,DIsLogin:false,
        };
    case 'StartLoad':
    return{
        ...state,Loading:true,
    };
    case 'StopLoad':
        return{
            ...state,Loading:false,
        };

    default: return state;
    }
}
export default reducer;