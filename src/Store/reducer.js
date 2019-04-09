
const ADD_CARD_ACTION = 'ADD-CARD';
const REMOVE_CARD_ACTION = 'REMOVE-CARD';

const addToCard = (id) => ({
    type : ADD_CARD_ACTION, id
});
const removeToCard = (id) => ({
    type : REMOVE_CARD_ACTION, id
});
const initS = {
    product : [
        {id : 1 , title : 'pro1' , price : 25000},
        {id : 2 , title : 'pro2' , price : 88000},
        {id : 3 , title : 'pro3' , price : 33000},
    ],
    card : []
}
const reducer = (state = initS , action) => {
            if(action.type === ADD_CARD_ACTION){
                return{
                    ...state,
                    card : state.card.indexOf(action.id) > -1 ?  state.card : [...state.card,action.id]
                } 
            }
            if(action.type === REMOVE_CARD_ACTION){
                return {
                    ...state,
                    card : state.card.filter(items=> items !== action.id)
                }
            }
    return state;
}
export {
    reducer as default,
    addToCard,
    removeToCard
}