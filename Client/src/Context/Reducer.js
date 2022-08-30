const Reducer = (state,action)=>{
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                user:null,
                isFetching:true,
                error:false
            };
            
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user:action.payload,
                isFetching:false,
                error:false
            };
        case "ACCESS_TOKEN":
            return {
                ...state,
                accessToken:action.payload,
               
            };
           
        case "LOGIN_FAIL":
            return {
                ...state,
                user:null,
                isFetching:false,
                error:true
            };
           
        case "LOGOUT":
            return {
                user:null,
                isFetching:false,
                accessToken:'',
                error:false
            };
           
    
        default:
            break;
    }
}

export default Reducer;