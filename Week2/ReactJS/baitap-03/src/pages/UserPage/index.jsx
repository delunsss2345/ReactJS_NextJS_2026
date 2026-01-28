import { useState } from "react";
import FormInput from "../../components/FormInput";

const UserPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: ""
    })

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return <>
        <div>
            <FormInput onChange={handleOnchange} value={form.name} name='name' type='text' />
            <FormInput onChange={handleOnchange} value={form.email} name='email' type='email' />
        </div>
    </>
}

export default UserPage;