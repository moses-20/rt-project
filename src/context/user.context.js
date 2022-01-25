import { createContext, useReducer, useState } from "react";
import userReducer from "../redux/user.reducer";
import people from "../data";
import { userActions } from "../redux/user.actions";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [store, dispatch] = useReducer(userReducer, people);

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReset = () => {
    setUser({
      fname: "",
      lname: "",
      email: ""
    });
  };

  const handleUser = () => {
    if (user.fname === "" || user.lname === "" || user.email === "") return;

    dispatch(userActions.add(user));
  };

  const deleteCard = (email) => {
    dispatch(userActions.remove(email));
  };

  return (
    <UserContext.Provider
      value={{ user, store, handleChange, handleReset, handleUser, deleteCard }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
