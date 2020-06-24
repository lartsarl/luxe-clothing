import React, {useState} from 'react';
import { connect } from 'react-redux'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {TitleContainer, SignInContainer, ButtonsContainer} from './sign-in.styles'

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const {name, value} = event.target;

        setCredentials({...userCredentials, [name]: value});
    }
        return(
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type='email' name='email' value={email} handleChange={handleChange} label='Email' required></FormInput>
                    <FormInput type='password' name='password' value={password} handleChange={handleChange} label='Password' required></FormInput>
                    <ButtonsContainer>
                        <CustomButton type='submit'> SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn > SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);