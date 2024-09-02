export interface FakeBand {
    _id?: string;
    band: string;
    discs: string[];
    genres: string[];
    bandImage: string;
    startDate: string;
    activeYears?: number;
    numbOfMembers: number;
}

export interface FakeBandGenre {
    _id: string;
    name: string;
}

export interface ResponseFakeBand {
    message: string;
    band: FakeBand;
}

export interface BandCardProps {
    band: FakeBand;
}