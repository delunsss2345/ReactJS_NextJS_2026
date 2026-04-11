import { useState } from "react";

const Login = () => {
    const [formUser , setFormUser] = useState({
        tk : null , 
        mk : null
    })
    const hanLogin = (e) => {
        e.preventDefault() ;
        localStorage.setItem("auth" , formUser)
    }
    return <>
    <div>
        <form  onSubmit={hanLogin}>
        <input 
            onChange={(e) => setFormUser(prev => ({ ...prev, tk: e.target.value }))} 
            type="text" 
            placeholder="TK" 
        />

        <input 
            onChange={(e) => setFormUser(prev => ({ ...prev, mk: e.target.value }))} 
            type="password" 
            placeholder="MK" 
        />
        <button type="submit">dang nhap</button>
        </form>
    </div></>
}
 
export default Login;