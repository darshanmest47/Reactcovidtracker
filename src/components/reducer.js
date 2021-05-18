

const initState={
    data:[],
    individualData:[],
    changed:false,
    carddisplay:true
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

        case 'CNF_ZERO':
            return{
                ...state,
                carddisplay:false
            }

        case 'MORE_THAN_ZERO':
            return{
                ...state,
                carddisplay:true

            }

        default:
            return state

    };
}

export default updateReducer

