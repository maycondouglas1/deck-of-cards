import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Card from "../../types/Card";

interface ICardState {
  cards: Card[];
  loading: boolean;
  error: string | null;
}

const initialState: ICardState = {
  cards: [],
  loading: false,
  error: null,
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    fetchCardsRequest(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
    },
    fetchOneCardRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCardsSuccess(state, action: PayloadAction<Card[]>) {
      state.cards = action.payload;
      state.loading = false;
    },
    fetchCardsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchOneCardSuccess(state, action: PayloadAction<Card>) {
      state.cards = [...state.cards, action.payload];
      state.loading = false;
    },
    shuffleCardsRequest(state) {
      const cards = state.cards;
      state.cards = cards.sort(() => Math.random() - 0.5);
    },
  },
});

export const {
  fetchCardsRequest,
  fetchCardsSuccess,
  fetchCardsFailure,
  fetchOneCardSuccess,
  fetchOneCardRequest,
  shuffleCardsRequest,
} = cardSlice.actions;

export default cardSlice.reducer;
