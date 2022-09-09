import React, {useState} from "react";
import './registr-form.scss'
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import * as yup from "yup";
import {Formik} from "formik";


const RegistrForm = ({...attr}) => {

    const validationsSchema = yup.object().shape({
        nameR: yup.string().required('Обязательно'),
        emailR : yup.string().email('Введите верный email').required('Обязательно'),
        passwordR: yup.string().required('Обязательно')
    });

    return (
        <Formik initialValues={{
            nameR: '',
            emailR: '',
            passwordR: ''
        }}
                validateOnBlur
                onSubmit={() => {alert("submit!")}}
                validationSchema={validationsSchema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <div className="regist-form">

                    <div className="regist-form__input">
                        <Input
                            name={'name'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nameR}
                            type={'text'}
                            id='nameR'
                            error={errors.nameR ? errors.nameR : null}
                            success={!errors.nameR && values.nameR ? true : null}
                        >Имя</Input>
                    </div>

                    <div className="regist-form__input">
                        <Input
                            name={'email'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.emailR}
                            type={'text'}
                            id='emailR'
                            error={errors.emailR ? errors.emailR : null}
                            success={!errors.emailR && values.emailR ? true : null}
                        >E-mail</Input>
                    </div>

                    <div className="regist-form__input">
                        <Input
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.passwordR}
                            type={'password'}
                            id='passwordR'
                            error={errors.passwordR ? errors.passwordR : null}
                            success={!errors.passwordR && values.passwordR ? true : null}
                        >Пароль</Input>
                    </div>

                    <div className="regist-form__btn">
                        <Button
                            disable={errors.nameR || errors.emailR || errors.passwordR}
                            func={() => handleSubmit()}
                            type={'submit'}
                        >Зарегистрироваться</Button>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default RegistrForm