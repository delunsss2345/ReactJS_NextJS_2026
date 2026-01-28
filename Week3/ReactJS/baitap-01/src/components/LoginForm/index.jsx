import { useState } from "react";
import FormInput from "../FormInput";

const LoginForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({
            name: "",
            email: "",
            age: ""
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormInput onChange={handleOnChange} name='name' type='text' value={form.name} />
                <FormInput onChange={handleOnChange} name='email' type='text' value={form.email} />
                <FormInput onChange={handleOnChange} name='age' type='text' value={form.age} />
                <button type="submit">Submit</button>
            </form>
            <pre>
                {JSON.stringify(
                    form
                )}
            </pre></>
    );
}

export default LoginForm