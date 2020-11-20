import React from 'react';

import LoginPage from './login';
import ScanPage from './scan';

const LocalStor = () => {

    const JWT = localStorage.getItem('jwt');
    let jwt = JWT ? true : false;

    return (
        <div>
            <LoginPage item={ jwt }/>
            <ScanPage item={ jwt }/>
        </div>
    )
}

export default LocalStor;