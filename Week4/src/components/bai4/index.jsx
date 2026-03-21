import { options } from "joi";
import { useCallback, useMemo, useRef, useState } from "react";
import { useEffect } from "react";

const url = "/json.json"
const cts = "/category.json"


const Bai4 = () => {
  const [loading , setLoading] = useState(false) ; 
  const [error, setError] = useState(null) ; 
  const [query , setQuery] = useState("") ; 
  const [categories , setCategories] = useState([]) ; 
  const [categorySelect , setCategorySelect] = useState("") ; 

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

  const fetchCategories = async () => {
    setLoading(true) ; 
    setError(null) ; 
    try {
      const response = await fetch(cts);
      if(!response.ok) {
        throw new Error("Api fecth failed")
      }
      const json = await response.json() ;
      setCategories(json) ; 
      
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
    fetchCategories()
  }, []);


  const filterPost = useMemo(() => {
    if(!query && !categorySelect) return posts ; 
    const pos = posts.filter(p => p.title.includes(query.toLocaleLowerCase()) && (categorySelect ? p.category === categorySelect : true))
    return pos
  } , [query , posts , categorySelect])

  const searchPost =  (value) => {
    setQuery(value)
  };

  return <>
   <div>
    <label htmlFor="">Tim bai viet</label>
    <input onChange={(e) => searchPost(e.target.value)} type="text" name="search" />
   </div>
   <select onChange={(e) => setCategorySelect(e.target.value)}>
    <option value="">Chon category</option>
    {categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>)}
   </select>
    {
        !loading && !error ? 
        filterPost.length ? filterPost?.map(p => <div key={p.id}>
            <div style={{
            "display" :"flex" ,
            "gap" : "20px" , 
            "justifyContent" : "center"
            }}>
            <p>{p.title}</p>
            <p>{p.category}</p>

            </div>
            </div> )
        :  "Khong tim thay bai" : <div>Loading</div>
    }

    {error && <div>{error}</div>}
  
  </>;
};

export default Bai4;

