import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  /**
   * context の値が更新されたときは、その context を使用可能な
   * component は(使用しているかどうかに関わらず)全て再レンダリングされる
   * -> そのため、再レンダリングが不要な component については関数を
   *    memo化して再レンダリングが発生しないようにしておく
   */
  const [userInfo, setUserInfo] = useState(null);

  /**
   * context として state, setState 関数を渡すことで
   * context を参照できる範囲では state の参照、
   * state への値の設定が可能となる
   */
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
