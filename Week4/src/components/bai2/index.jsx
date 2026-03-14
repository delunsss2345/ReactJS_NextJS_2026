import { useState } from "react";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Bai2 = () => {
  const [users , setUsers] = useState([]) ; 
  const [loading , setLoading] = useState(false) ; 
  const [error, setError] = useState(null) ; 
  const fecthUser = async () => {
    setLoading(true) ; 
    setError(null) ; 
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error("Api fecth failed")
      }
      const json = await response.json() ;
      setUsers(json) ; 
      
    } catch (error) {
      console.log(error.message) ; 
      setError(error.message) ; 
    }
    finally {
        setLoading(false) ; 
    }
  };

  useEffect(() => {
    fecthUser()
  }, []);

  return <>
    {!loading ? !error && users?.map(user => <div key={user.id}>
    <div style={{
      "display" :"flex" ,
      "gap" : "20px" , 
      "justifyContent" : "center"
    }}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
    </div>) : <div>Loading</div>}

    {error && <div>{error}</div>}
  
  </>;
};

export default Bai2;

