import { FakeBand } from "../../interfaces/fakeBand";
import { FakeBandGenre } from "../../interfaces/fakeBandGenre";
import { Actions } from "../../interfaces/actions";
import { ALL_BANDS, ALL_GENRES, BANDS_BY_ID, CREATE_RANDOM_BAND, CREATE_RANDOM_BAND_BY_BODY, DELETE_BAND, LANGUAJE, PATCH_BAND, UPDATE_BAND } from "./actionTypes";

const initialState = {
    allBandsCopy: [] as FakeBand[],
    allBands: [] as FakeBand[],
    allGenres: [] as FakeBandGenre[],
    language: "Spanish"
}

const reducer = (state = initialState, action:Actions) => {
    switch (action.type) {
        case LANGUAJE:
            return{
                ...state,
                language: action.payload
            }
        case ALL_BANDS:
            return {
                ...state,
                allBandsCopy: [...action.payload],
                allBands: [...action.payload]
            }
        case ALL_GENRES:
            return {
                ...state,
                allGenres: [...action.payload] 
            }
        case BANDS_BY_ID:
            return {
                ...state,
                allBands: action.payload
            }
        case CREATE_RANDOM_BAND:
            return {
                ...state,
                allBands: action.payload
            }
        case CREATE_RANDOM_BAND_BY_BODY:
            return {
                ...state,
                allBands: action.payload
            }
        case UPDATE_BAND:
            return {
                ...state,
                allBands: action.payload
            }
        case PATCH_BAND:
            return {
                ...state,
                allBands: action.payload
            }
        case DELETE_BAND:
            return {
                ...state,
                allBands: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;


// import { State } from "../../interfaces/State";
// import { Actions } from "../../interfaces/actions";
// import { ALL_BANDS, ALL_GENRES, BANDS_BY_ID, CREATE_RANDOM_BAND, CREATE_RANDOM_BAND_BY_BODY, DELETE_BAND, LANGUAJE, PATCH_BAND, UPDATE_BAND } from "./actionTypes";

// const initialState: State = {
//     allBandsCopy: [],
//     allBands: [],
//     allGenres: [],
//     language: "Spanish"
// }

// const reducer = (state: State = initialState, action: Actions): State => {
//     switch (action.type) {
//         case LANGUAJE:
//             return{
//                 ...state,
//                 language: typeof action.payload === 'string' ? action.payload :state.language
//             }
//         case ALL_BANDS:
//             return {
//                 ...state,
//                 allBandsCopy: Array.isArray(action.payload) ? [...action.payload] : [],
//                 allBands: Array.isArray(action.payload) ? [...action.payload] : []
//             }
//         case ALL_GENRES:
//             return {
//                 ...state,
//                 allGenres: Array.isArray(action.payload) ? [...action.payload] : []
//             }
//         case BANDS_BY_ID:
//             return {
//                 ...state,
//                 allBands: action.payload
//             }
//         case CREATE_RANDOM_BAND:
//             return {
//                 ...state,
//                 allBands: action.payload
//             }
//         case CREATE_RANDOM_BAND_BY_BODY:
//             return {
//                 ...state,
//                 allBands: Array.isArray(state.allBands) ?  action.payload : []
//             }
//         case UPDATE_BAND:
//             return {
//                 ...state,
//                 allBands: action.payload
//             }
//         case PATCH_BAND:
//             return {
//                 ...state,
//                 allBands: action.payload
//             }
//         case DELETE_BAND:
//             return {
//                 ...state,
//                 allBands: action.payload
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }

// export default reducer;