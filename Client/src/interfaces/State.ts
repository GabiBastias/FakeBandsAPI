import { FakeBand } from "./fakeBand";
import { FakeBandGenre } from "./fakeBandGenre";
import { ResponseFakeBand } from "./responses";

export interface State {
    allBandsCopy: FakeBand[];
    allBands: ResponseFakeBand | FakeBand[];
    allGenres: FakeBandGenre[];
    language: string;
}