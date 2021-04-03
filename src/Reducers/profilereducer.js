import {PROFILE_ACTION} from '../Actions'

const initialProfile={
    name:'',
}
export default function profilereducer(state,action){
    state= state || initialProfile
    switch(action.type){
        case PROFILE_ACTION.SET:
            return{
                name:action.payload,
            }
        case PROFILE_ACTION.RESET:
            return{
                ...initialProfile
            }
        default :
            return state
    }
}