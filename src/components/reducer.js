

const initState={
    data:[],
    individualData:[],
    changed:false
}

const updateReducer=(state=initState,action)=>{

    switch(action.type){
        case 'LOAD_DATA':
            return{
                ...state,
                data: action.payload
            }

        case 'GET_DATA':
            return{
                ...state,
                individualData:action.payload,
                changed:true
            }

        default:
            return state

    };
}

export default updateReducer

