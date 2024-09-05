import React from 'react';
import Header from "./Header/Header";
import EF from "./Main/EF";
import Noma from "./Main/Noma";
import Footer from "./Footer/Footer";
import Piedavajam from "./piedavajam/Piedavajam";
import Sazina from "./sazinies/Sazina";

const MainPage = () => {
    return (
        <div id="home1" className={'w-screen min-h-screen flex flex-col bg-neutral-800'}>
            <Header/>
            <EF />
            <Noma/>
            <Piedavajam />
            <Sazina />
            <Footer />
        </div>
    );
};

export default MainPage;
