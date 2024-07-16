import React from 'react';
import Form from '../../components/Form.jsx';
import '../../sass/pages/_SignIn.scss';


export default function Login () {
    return (
        <div className='signin-page'>
            <main className='bg-dark'>
                {/* Returns form component */}
                < Form />
            </main>
        </div>
        
    )
}
