import React from 'react';
import Theme from './Theme';

import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';
import Navbar from './Navbar';
import SignInMobile from './mobile/Mobile_Widget'
import RegisterBook from './RegisterBook';
const Main =()=> {
    return (

     <div className='flex justify-center content-center h-screen touch-none'>
        <Theme/>
        <MainContainer page='list' isAdmin={true}/>
        {/* <SignInWidget/> */}
        {/* <SignInMobile/> */}
        <RegisterBook />
     </div>
    );
}

export default Main;