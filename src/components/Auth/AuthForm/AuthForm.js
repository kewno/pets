import React, {useState} from "react";
import Button from "../../ui/Button/Button";
import {NavLink} from "react-router-dom";
import Input from "../../ui/Input/Input";
import {Formik} from 'formik'
import * as yup from 'yup'
import './auth-form.scss'

const AuthForm = ({...attr}) => {

    let [textOne, setTextOne] = useState('');
    let [textTwo, setTextTwo] = useState('');

    const validationsSchema = yup.object().shape({
        emailA : yup.string().email('Введите верный email').required('Обязательно'),
        passwordA: yup.string().required('Обязательно'),
    });

    return (
        <Formik initialValues={{
            emailA: '',
            passwordA: ''
            //confirmPassword: '', () => console.log(!isValid + " " + !dirty)
        }}
                validateOnBlur
                onSubmit={() => {alert("submit!")}}
                // onSubmit={(values, {validate}) => validate(values)}//loginThunkCreator
                validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div className="auth-form">
                    {/*{console.log(values)}*/}
                    <div className="auth-form__input">
                        <Input
                            name={'email'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.emailA}
                            type={'text'}
                            id='emailA'
                            error={errors.emailA ? errors.emailA : null}
                            success={!errors.emailA && values.emailA ? true : null}
                        >E-mail</Input>
                    </div>

                    <div className="auth-form__input">
                        <Input
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.passwordA}
                            type={'password'}
                            id='passwordA'
                            error={errors.passwordA ? errors.passwordA : null}
                            success={!errors.passwordA && values.passwordA ? true : null}
                        >Пароль</Input>
                    </div>

                    <NavLink className="auth-form__reestablish" to={'/registr'}>Забыли пароль?</NavLink>

                    <div className="auth-form__btn">
                        <Button
                            disable={errors.emailA || errors.passwordA} //!isValid
                            func={() => handleSubmit()}//   console.log(!isValid + " " + !dirty)  && !dirty handleSubmit
                            type={'submit'}
                        >Войти</Button>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default AuthForm