import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const loginState = useSelector((state) => state.loginReducer);

  return (
    <>
      <LoginContext.Provider value={loginState}>
        {children}
      </LoginContext.Provider>
      ;
    </>
  );
};

// context를 리턴하는 커스텀 훅 생성 -> 구독 컴포넌트 마다 useContext를 쓰지 않기 위함
export const useLoginState = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("Cannot find LoginContext");
  return context;
};
