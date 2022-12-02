import Current_USER_Reducer from "./reducer/Current_User_Reducer";
import combineReducer from "@reduxjs/toolkit"

const RootReducer = combineReducer({

    Current_USER_Reducer,


});

export default RootReducer;