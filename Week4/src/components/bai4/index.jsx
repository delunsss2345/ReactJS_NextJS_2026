import { useCallback, useMemo, useRef, useState } from "react";
import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts"

const Bai4 = () => {
  const [loading , setLoading] = useState(false) ; 
  const [error, setError] = useState(null) ; 
  const [query , setQuery] = useState("") ; 

  const [posts , setPosts] = useState([]) ; 
  const fetchPost = async () => {
    setLoading(true) ; 
    setError(null) ; 
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error("Api fecth failed")
      }
      const json = await response.json() ;
      setPosts(json) ; 
      
    } catch (error) {
      console.log(error.message) ; 
      setError(error.message) ; 
    }
    finally {
        setLoading(false) ; 
    }
  };

  useEffect(() => {
    fetchPost()
  }, []);


  const filterPost = useMemo(() => {
    if(!query) return posts ; 
    const pos = posts.filter(p => p.title.includes(query))
    return pos
  } , [query , posts])

  const searchPost =  (value) => {
    setQuery(value)
    console.log(query) ;
  };

  return <>
   <div>
    <label htmlFor="">Tim bai viet</label>
    <input onChange={(e) => searchPost(e.target.value)} type="text" name="search" />
   </div>

    {
        !loading && !error ? 
        filterPost.length ? filterPost?.map(p => <div key={p.id}>
            <div style={{
            "display" :"flex" ,
            "gap" : "20px" , 
            "justifyContent" : "center"
            }}>
            <p>{p.title}</p>
            </div>
            </div> )
        :  "Khong tim thay bai" : <div>Loading</div>
    }

    {error && <div>{error}</div>}
  
  </>;
};

export default Bai4;

