import { GET_CURRENT_USER } from "../reduxConstant";

const Current_USER_Reducer = (action,data=[])=>{

    switch(action.type){
       case GET_CURRENT_USER: data=action.data;
                             return data;

        default : return data;
    }


}

export default Current_USER_Reducer;