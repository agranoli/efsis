import React from 'react';
import { Link } from "react-router-dom";

const PiedavajamCont = ({ svg }) => {
    return (
        <div className="p-4">
            <button className="flex items-center justify-center p-3 border border-amber-400 border-opacity-30 rounded-full w-16 h-16">
                {svg && <img src={svg} alt="Icon" className="w-3/4 h-3/4 opacity-70" />}
            </button>
        </div>
    );
};

export default PiedavajamCont;
