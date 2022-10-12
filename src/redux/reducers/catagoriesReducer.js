const initialState = {
    catagoriesData : [], 
}

const catagoriesReducer = (state = initialState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case "catagories/getCatagories/fulfilled":
            return{
                ...state,
                catagoriesData:action.payload.payload
            }
        default:
            return state;
    }
}

export default catagoriesReducer