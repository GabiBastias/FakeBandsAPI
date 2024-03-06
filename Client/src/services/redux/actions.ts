import { createAsyncThunk } from "@reduxjs/toolkit";
import { FakeBand } from "../../interfaces/fakeBand";
const backURL = import.meta.env.VITE_BACK_URL;

export const setLanguage = (language:string) => ({
    type: 'fakeBands/setLanguage',
    payload: language
})

export const getAllFakeBands = createAsyncThunk(
    'fakeBands/getAllFakeBands',
    async () => {
        const response = await fetch(`${backURL}/fakeBands`);
        if (!response.ok) throw new Error("Failed to fetch Bands");
        const data = await response.json();
        return data
    }
)

export const getAllFakeGenres = createAsyncThunk(
    'fakeBands/getAllFakeGenres',
    async () => {
        const response = await fetch(`${backURL}/fakeGenres`);
        if (!response.ok) throw new Error("Failed to fetch Genres");
        const data = response.json();
        return data;
    }
)

export const getBandById = createAsyncThunk(
    'bands/getBandById',
    async (id: string) => {
        const response = await fetch(`${backURL}/fakeBands/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch Band');
        }
        const data = await response.json();
        return data;
    }
);

export const createRandomFakeBand = createAsyncThunk(
    'bands/createRandomFakeBand',
    async () => {
        const response = await fetch(`${backURL}/fakeBands/random`, { method: "POST"})
        if (!response.ok) {
            throw new Error('Failed to create Band');
        }
        const data = await response.json();
        return data;
    }
);

export const createFakeBandByBody = createAsyncThunk(
    'bands/createFakeBandByBody',
    async (fakeBand: FakeBand) => {
        const response = await fetch(`${backURL}/fakeBands`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeBand)
        })
        if (!response.ok) {
            throw new Error('Failed to create Band');
        }
        const data = await response.json();
        return data;
    }
);

export const updateFakeBand = createAsyncThunk(
    'bands/updateFakeBand',
    async ({id, fakeBand}: {id: string, fakeBand: FakeBand}) => {
        const response = await fetch(`${backURL}/fakeBands?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeBand)
        })
        if (!response.ok) {
            throw new Error('Failed to update Band');
        }
        const data = await response.json();
        return data;
    }
);

export const patchFakeBand = createAsyncThunk(
    'bands/updateFakeBand',
    async ({id, fakeBand}: {id: string, fakeBand: FakeBand}) => {
        const newBand = {
            band: fakeBand.bandName,
            discs: fakeBand.bandDiscs,
            genres: fakeBand.bandGenres,
            startDate: fakeBand.startDate,
            numbOfMembers: fakeBand.numbOfMembers
        }

        const response = await fetch(`${backURL}/fakeBands?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBand)
        })
        if (!response.ok) {
            throw new Error('Failed to patch Band');
        }
        const data = await response.json();
        return data;
    }
);



export const deleteFakeBandById = createAsyncThunk(
    'fakeBands/deleteFakeBandById',
    async (id:string) => {
        const response = await fetch(`${backURL}/fakeBands?id=${id}`, { 
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json",
            } 
        });
        if (!response.ok) {
            throw new Error('Failed to delete Band');
        }
        const data = await response.json();
        return data;
    }
)
