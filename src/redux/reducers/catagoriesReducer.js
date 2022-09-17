const initialState = {
    catagoriesData : [], 
}

function catagoriesString (arr){
     let res = [];
     arr.forEach(element => {
        res.push(element.name)
     });
     return res;
}

const catagoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "catagories/getCatagories/fulfilled":
            return{
                ...state,
                catagoriesData:catagoriesString(action.payload.payload)
            }
        default:
            return state;
    }
}

export default catagoriesReducer