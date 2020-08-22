export default function manageWorkouts(state = {displayName: "Not Logged In"}, action) {
    switch (action.type){
        case "LOGIN_REQUEST":
            return {displayName: "Logging In"}
        case "LOGIN":
            return {displayName: action.displayName};            
        case "LOGOUT":
            return {displayName: ""};
        default:
            return state;
    }
}
