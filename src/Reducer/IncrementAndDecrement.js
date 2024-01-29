const initialState = 0 ;

const Change =(state = initialState,action )=>{
    switch(action.type){
        case "INCREMENT_NUMBER" : return state + 1;
        case "DECREMENT_NUMBER" : return state -1 ;
        default :return state ; 
    }
}
export default Change