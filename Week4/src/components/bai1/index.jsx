import { useState } from "react";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Bai1 = () => {
  const [users , setUsers] = useState([])
  const fecthUser = async () => {
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error("Api fecth failed")
      }
      const json = await response.json() ;
      setUsers(json) ; 
      
    } catch (error) {
      console.log(error.message) ; 
    }
    finally {
    }
  };

  useEffect(() => {
    fecthUser()
  }, []);

  return <>
    {users?.map(user => <div key={user.id}>
    <div style={{
      "display" :"flex" ,
      "gap" : "20px" , 
      "justifyContent" : "center"
    }}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
    </div>) }
  
  </>;
};

export default Bai1;
