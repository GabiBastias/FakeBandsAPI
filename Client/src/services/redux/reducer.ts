import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FakeBand, FakeBandGenre } from '../../interfaces/fakeBand';
import { State } from '../../interfaces/redux';

const initialState: State = {
    allBandsCopy: [],
    allBands: [],
    allGenres: [],
    language: 'Spanish',
};

const fakeBandsReducer = createSlice({
    name: 'fakeBands',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
        },
        setAllBands(state, action: PayloadAction<FakeBand[]>) {
            state.allBandsCopy = action.payload;
            state.allBands = action.payload;
        },
        setAllGenres(state, action: PayloadAction<FakeBandGenre[]>) {
            state.allGenres = action.payload;
        },
        setBandsById(state, action: PayloadAction<FakeBand[]>) {
            state.allBands = action.payload;
        },
        createRandomBand(state, action: PayloadAction<FakeBand[]>) {
            state.allBands = action.payload;
        },
        createBandByBody(state, action: PayloadAction<FakeBand[]>) {
            state.allBands = action.payload;
        },
        updateBand(state, action: PayloadAction<FakeBand[]>) {
            state.allBands = action.payload;
        },
        patchBand(state, action: PayloadAction<FakeBand[]>) {
            state.allBands = action.payload;
        },
        deleteBand(state, action: PayloadAction<FakeBand[]>) {
            state.allBands = action.payload;
        },
    },
});

export const { 
    setLanguage, 
    setAllBands, 
    setAllGenres, 
    setBandsById, 
    createRandomBand, 
    createBandByBody, 
    updateBand, 
    patchBand, 
    deleteBand 
} = fakeBandsReducer.actions;

export default fakeBandsReducer.reducer;