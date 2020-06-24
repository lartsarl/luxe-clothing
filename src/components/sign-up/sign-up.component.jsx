import React, {useState} from 'react';
import {connect} from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {TitleContainer, SignUpContainer} from './sign-up.styles'
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        signUpStart({displayName, email, password});
    };

    const handleChange = event => {
        const {name, value} = event.target;

        setCredentials({...userCredentials, [name]: value});
    }

        return (
            <SignUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display name'></FormInput>
                    <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email'></FormInput>
                    <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password'></FormInput>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm password'></FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);