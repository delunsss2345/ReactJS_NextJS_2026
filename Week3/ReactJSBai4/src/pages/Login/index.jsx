import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
const Login = () => {
    return <div className="form">
        <FormInput  type='text' label='Username' />
        <FormInput  type='password' label='Password' />
        <Button title='Login' />
    </div>
}

export default Login;