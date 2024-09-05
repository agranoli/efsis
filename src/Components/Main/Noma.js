import React from 'react';
import NomaContainer from "../Noma/NomaContainer";

const Noma = () => {
    return (
        <div>
            <div id="noma" className="w-screen lg:h-2/3 min-h-screen flex justify-center items-center flex-col text-white">
                <div className="flex flex-col items-center">
                    <p className="text-center font-bold text-4xl mb-4 mt-20">Tehnikas Noma</p>
                    <div className="h-px w-60 bg-amber-300 mb-4"></div>
                </div>
                <NomaContainer/>
            </div>
        </div>
    );
};

export default Noma;
