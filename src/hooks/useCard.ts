import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsRequest } from "../store/reducers/cardSlice";
import { RootState } from "../store/store";

export const useCard = (amount: number) => {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector(
    (state: RootState) => state.card
  );

  useEffect(() => {
    dispatch(fetchCardsRequest(amount));
  }, [dispatch]);

  return { cards, loading, error };
};
