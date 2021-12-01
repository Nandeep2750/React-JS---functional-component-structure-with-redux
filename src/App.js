import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/css/style.css';

import { BASENAME } from './components/config/constants';
import Loader from './components/views/common/Loader'
import Main from './components/container/Main'

export function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(false);
        setTimeout(() => setLoading(false), 500); // simulates an async action, and hides the spinner
    }, [])

    return (
        <div>
            <BrowserRouter basename={BASENAME}>
                {loading ? <Loader /> : <Main /> }
                <ToastContainer autoClose={3000} />
            </BrowserRouter>
        </div>
    );
}

export default App;