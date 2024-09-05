// TehnikasNoma.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const TehnikasNoma = ({ buttonText, svg, to }) => {
    return (
        <Link to={to}>
            <button className="flex items-center justify-center gap-4 bg-amber-400 p-3 flex-col w-56 h-56 mt-8">
                {svg && <img src={svg} alt="Icon" className="w-1/3 h-1/3" />}
                <span className="font-bold text-gray-700">{buttonText}</span>
            </button>
        </Link>
    );
};

export default TehnikasNoma;
