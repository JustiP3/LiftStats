export default function manageWorkouts(state = {userId: "", displayName: "Not Logged In"}, action) {
    switch (action.type){
        case "LOGIN_REQUEST":
            return {displayName: "Logging In"}
        case "LOGIN":
            return {displayName: action.displayName, userId: action.userId};            
        case "LOGOUT":
            return {displayName: "Not Logged In"};
        default:
            return state;
    }
}
