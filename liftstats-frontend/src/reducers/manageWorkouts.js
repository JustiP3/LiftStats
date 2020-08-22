export default function manageWorkouts(state = {userId: "", displayName: ""}, action) {
    switch (action.type){
        case "LOGIN":
            return {userId: action.id};
        case "LOGOUT":
            return {userID: ""};
        default:
            return state;
    }
}
