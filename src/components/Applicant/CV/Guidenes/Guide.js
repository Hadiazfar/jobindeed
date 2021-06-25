import React from 'react'
import Main from "./Main"
import MainMobile from './MobileMain'
import Footer from '../../../Footer/Footer'
import Header from '../Header/Header'

function Guide (){
    return(
        <div>
            <Header />
            <Main />
            <MainMobile />
            <Footer />
        </div>
    )
}
export default Guide