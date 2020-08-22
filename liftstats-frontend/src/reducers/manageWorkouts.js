export default function manageWorkouts(state = {userId: "", displayName: "Not Logged In"}, action) {
    switch (action.type){
        case "LOGIN_REQUEST":
            return {...state, displayName: "Logging In"}
        case "LOGIN":
            return {userId: action.displayName};            
        case "LOGOUT":
            return {userID: ""};
        default:
            return state;
    }
}
