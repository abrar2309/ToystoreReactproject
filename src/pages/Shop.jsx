import React from 'react'
import Hero from '../components/Hero/Hero'; // Adjust the path as needed
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import Newcollections from '../components/Newcollections/Newcollections';
import Newsletter from '../components/Newsletter/Newsletter';
function Shop() {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollections/>
            <Newsletter/>
        </div>
    );
}

export default Shop
