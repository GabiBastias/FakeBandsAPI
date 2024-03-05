import { ThunkAction } from "redux-thunk";
import { ALL_BANDS } from "../services/redux/actionTypes";
import { FakeBand, FakeBandGenre, ResponseFakeBand } from "./fakeBand";

export type ThunkResult<R> = ThunkAction<R, State, undefined, Actions>;

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

export interface State {
  allBandsCopy: FakeBand[];
  allBands: ResponseFakeBand | FakeBand[];
  allGenres: FakeBandGenre[];
  language: string;
}

export interface LanguageSelectorAction {
  type: string;
  payload: string;
}

export interface AllBandsAction {
  type: typeof ALL_BANDS;
  payload: unknown;
}

export interface AllGenresAction {
  type: string;
  payload: FakeBandGenre[];
}

export interface BandsActions {
  type: string;
  payload: ResponseFakeBand;
}
