import { appActionTypes } from './appActionTypes';

export const setSvgBcr = bcr => ({
    type: appActionTypes.SET_SVG_BCR,
    payload: bcr
});