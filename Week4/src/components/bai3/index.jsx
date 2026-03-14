import { useRef, useState } from "react";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Bai3 = () => {
  const [user , setUser] = useState(null) ; 
  const [loading , setLoading] = useState(false) ; 
  const [error, setError] = useState(null) ; 
  const ref = useRef() ;
  const fecthUserById = async () => {
    const userId = ref.current.value ;
    setLoading(true) ; 
    setError(null) ; 
    try {
      const response = await fetch(`${url}/${userId}`);
      if(!response.ok) {
        throw new Error("User not found")
      }
      const json = await response.json() ;
      setUser(json) ; 
      
    } catch (error) {
      console.log(error.message) ; 
      setError(error.message ?? "User not found") ; 
    }
    finally {
        setLoading(false) ; 
    }
  };

  

  return <>
   <div>
    <label htmlFor="">Nhap id user</label>
    <input ref={ref} type="text" name="name" />
   </div>
  <button onClick={fecthUserById}>Click fetchUser</button>
    {!loading ? !error && user && <div key={user.id}>
    <div style={{
      "display" :"flex" ,
      "gap" : "20px" , 
      "justifyContent" : "center"
    }}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
    </div> : <div>Loading</div>}

    {error && <div>{error}</div>}
  
  </>;
};

export default Bai3;

