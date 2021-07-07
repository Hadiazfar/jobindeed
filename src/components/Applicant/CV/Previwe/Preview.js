import React from 'react'
import Main from './Main'
import MainMobile from './MainMobile'
import Header from '../Header/Header'
import Footer from '../../../Footer/Footer'
function Preview(){
    return (
        <div>
            <Header />
            <Main />
            <MainMobile />
            <Footer />
        </div>
    )
}
export default Preview