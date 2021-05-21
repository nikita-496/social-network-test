 import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"} name={"login"} validate ={[required]}component={Input}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} validate ={[required]} component={Input} />
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
        </form> 
}

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div> 
}

const LoginReduxForm =  reduxForm({ form: 'login' })(LoginForm)



export default Login