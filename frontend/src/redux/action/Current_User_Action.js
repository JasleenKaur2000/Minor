import { GET_CURRENT_USER } from "../reduxConstant";


const Get_Current_User = (data)=>{
    return({
        type:GET_CURRENT_USER,
        data:data
    })

}


export default Get_Current_User;