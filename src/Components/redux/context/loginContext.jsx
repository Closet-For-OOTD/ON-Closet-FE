import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";

const LoginContext = createContext();

export const LoginProvier = ({ children }) => {
  const loginState = useSelector((state) => state.loginReducer);
  console.log("..", loginState);
  return (
    <>
      <LoginContext.Provider value={loginState}>
        {children}
      </LoginContext.Provider>
      ;
    </>
  );
};

export const useLoginState = () => {
  const state = useContext(LoginContext);
  if (!state) throw new Error("Cannot find LoginContext");
  return state;
};
