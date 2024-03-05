export interface FakeBand {
    id?: string;
    bandName: string;
    bandDiscs: string[];
    bandGenres: string[];
    startDate: string;
    activeYears?: number;
    numbOfMembers: number;
}

export interface FakeBandGenre {
    _id:string;
    name:string
}

export interface ResponseFakeBand {
    message: string;
    band: FakeBand;
}