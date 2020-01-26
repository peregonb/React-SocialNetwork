import React from 'react';
import s from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {postAuthTC} from "../../redux/auth-reducer";
import {Input} from "../common/FormsFields/formsFields";
import {requiredField} from "../../utils/validators/validators";


export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField]} component={Input} name={'login'} className={s.login} placeholder={"Login"}/>
            <Field validate={[requiredField]} component={Input} name={'password'} className={s.password} placeholder={"Password"}/>
            <div className={s.rememberWrap}>
                <Field component={Input} name={'rememberMe'} type="checkbox" className={s.remember}/>
                <label for={'rememberMe'}>remember me</label>
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

class Login extends React.Component {

    onSubmit = (formData) => {
        console.log(formData);
        postAuthTC(formData)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default Login;