import React from 'react';

import SignIn from '../../components/sign_in/sign_in';
import SignUp from '../../components/sign_up/sign_up';

import './sign_in_and_sign_up.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
       <SignIn/>
       <SignUp/>
    </div>
);

export default SignInAndSignUpPage;