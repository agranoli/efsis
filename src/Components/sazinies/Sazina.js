import React from 'react';
import NomaContainer from "../Noma/NomaContainer";
import {ContactUs} from "../ContactUs";
import Maps from "./Maps";

const Sazina = () => {
    return (
        <div>
            <div id="sazina" className="w-screen lg:h-2/3 min-h-screen flex justify-center items-center flex-col text-white">
                <div className="flex flex-col items-center">
                    <p className="text-center font-bold text-4xl mb-4 mt-20">Saziņai</p>
                    <div className="h-px w-60 bg-amber-300 mb-4"></div>
                </div>
                <div className="flex w-screen flex-col lg:flex-row mt-12">
                    <div className="lg:w-1/2 w-full h-full lg:h-1/2 flex justify-center items-center">
                        <ContactUs />
                    </div>
                    <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex">
                        <Maps />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sazina;