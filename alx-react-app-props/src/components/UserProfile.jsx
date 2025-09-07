

import { useContext } from "react";



function UserProfile() {

const username = useContext(UserContext)
   return (
     <div>
       <h2>{username.name}</h2>
       <p>Age: {username.age}</p>
       <p>Bio: {username.bio}</p>
     </div>
   );
 };

 export default UserProfile;