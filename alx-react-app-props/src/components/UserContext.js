import { createContext } from "react";

export const context = createContext();


function usercontext() {
  const data = useContext(context);
  return <div>{data}</div>;
}

export default usercontext;