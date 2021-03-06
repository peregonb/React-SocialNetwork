import React from 'react';
import s from './Login.module.scss';
import style from './../common/FormsFields/formFields.module.scss';
import {Field, reduxForm} from "redux-form";
import {postAuthTC} from "../../redux/auth-reducer";
import {CheckBox, Input} from "../common/FormsFields/formsFields";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


export const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field validate={[requiredField]}
                   component={Input}
                   name={'login'}
                   className={s.login}
                   placeholder={"Login"}
            />
            <Field validate={[requiredField]}
                   component={Input}
                   name={'password'}
                   className={s.password}
                   type={"password"}
                   placeholder={"Password"}
            />
            <div className={s.rememberWrap}>
                <button>Login</button>
                <Field component={CheckBox}
                       name={'rememberMe'}
                       type="checkbox"
                       className={s.remember}
                />
            </div>
            {error && <div className={style.errorField}>{error}</div>}

        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

class Login extends React.Component {

    onSubmit = (formData) => {
        console.log(formData);
        this.props.postAuthTC(formData)
    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to={process.env.PUBLIC_URL + "/profile"}/>
        }
        return (
            <div className={s.wrapper}>
                <div className={s.header}>Login</div>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {postAuthTC})(Login);