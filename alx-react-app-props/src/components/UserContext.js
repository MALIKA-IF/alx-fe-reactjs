
const usercontext = React.createContext();

function UserContext(){
    

  const data = useContext(DataContext);
  return <div>{data}</div>;

}


export default UserContext;

