import React from 'react'
import Header from '../views/common/Header.jsx'

const Protectedlayout = (props) => {
    return (
        <div className="">
            <Header />
            {props.children}
        </div>
    );
}

export default Protectedlayout;