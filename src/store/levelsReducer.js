
const SET_LEVELS = 'SET_LEVELS';


let initialState = {
    levels: [[1,2,3,4],[5,6,7,8],[9,10]],
    select: null
};


const levelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEVELS: {
            return {...state, levels: action.levels}
        }
        default:
            return {...state};
    }
    return state;
};
export const setLevelsAction = (levels) => ({type: SET_LEVELS, levels});



export default levelsReducer;
