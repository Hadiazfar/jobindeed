import React from 'react'
import Main from './Main'
import MainMobile from './MainMobile'
import Header from '../../CV/Header/Header'
import Footer from '../../../Footer/Footer'
function Dashboard (){
    return(
        <div>
            <Header />
            <Main />
            <MainMobile />
            <Footer />
        </div>
    )
}
export default Dashboard