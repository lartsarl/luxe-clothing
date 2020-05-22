import React from 'react';
import {auth, SingInWithGoogle} from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {TitleContainer, SignInContainer, ButtonsContainer} from './sign-in.styles'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render(){
        const {email, password } = this.state;
        return(
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email' required></FormInput>
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password' required></FormInput>
                    <ButtonsContainer>
                        <CustomButton type='submit'> SIGN IN</CustomButton>
                        <CustomButton onClick={SingInWithGoogle} isGoogleSignIn > SIGN IN WITH GOOGLE</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;