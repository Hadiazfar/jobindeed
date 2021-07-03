import React from 'react'
import Main from './Main'
import MainMobile from './MainMobile'
import Header from '../Header/Header'
import Footer from '../../../Footer/Footer'
function Phone(){
    return (
        <div>
            <Header />
            <Main />
            <MainMobile />
            <Footer />
        </div>
    )
}
export default Phone