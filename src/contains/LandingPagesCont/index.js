import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Brand from '../../components/Brand'
import Recipe from '../../components/Recipe'

const landingPagesCont = () => {
    return (
        <div className="landing__body">
            <Header />
            <Brand />
            <Banner/>
            <Recipe/>
            
        </div>
    )
}

export default landingPagesCont
