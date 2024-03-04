import { FakeBand } from "./fakeBand";
import { FakeBandGenre } from "./fakeBandGenre";
import { ResponseFakeBand } from "./responses";

export type Actions = 
  | { type: 'LANGUAJE'; payload: string }
  | { type: 'ALL_BANDS'; payload: FakeBand[] }
  | { type: 'ALL_GENRES'; payload: FakeBandGenre[] }
  | { type: 'BANDS_BY_ID'; payload: ResponseFakeBand }
  | { type: 'CREATE_RANDOM_BAND'; payload: ResponseFakeBand }
  | { type: 'CREATE_RANDOM_BAND_BY_BODY'; payload: ResponseFakeBand }
  | { type: 'UPDATE_BAND'; payload: ResponseFakeBand }
  | { type: 'PATCH_BAND'; payload: ResponseFakeBand }
  | { type: 'DELETE_BAND'; payload: ResponseFakeBand };