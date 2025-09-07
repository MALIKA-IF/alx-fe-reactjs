import { createContext } from "react";

export const context = createContext();


function UserContext() {
  const data = useContext(context);
  return <div>{data}</div>;
}

export default UserContext;