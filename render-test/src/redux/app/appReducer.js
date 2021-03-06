import { appActionTypes } from './appActionTypes';

const initialState = {
    svgBcr: {
        w: 1000,
        h: 1000,
        zoom: 1
    },
    draggable: false,
};

const appReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case appActionTypes.SET_SVG_BCR:
            return {
                ...state,
                svgBcr: {...state.svgBcr, ...payload}
            }

        default: return state;
    }
};

export default appReducer;