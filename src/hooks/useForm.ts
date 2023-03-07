import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/reducers/userSlice";

export const useForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    dispatch(setUser({ name: name }));
  };

  return { name, handleName };
};

export default useForm;
