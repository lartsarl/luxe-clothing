import React from 'react';
import './sign-in-and-sing-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

class SignInAndSignUpPage extends React.Component {
    render() {
        return (
            <div className='sign-in-and-sign-up'>
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        )
    }
    
    componentWillMount(){
        document.body.style.backgroundImage = `url(https://i.postimg.cc/L6hZqzYK/margo-robbi-margot-robbie-blondinka-krasotka-stoit-u-steny-v.jpg)`;
        document.body.style.backgroundSize = 'cover';
    }

    componentWillUnmount(){
        document.body.style.backgroundImage = null;
    }
}

export default SignInAndSignUpPage;