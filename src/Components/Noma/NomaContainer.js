import React from 'react';
import TehnikasNoma from "./TehnikasNoma";
import soundSVG from "../SVG/soundSVG.svg";
import lightSVG from "../SVG/lightSVG.svg";
import electricSVG from "../SVG/electricSVG.svg";
import eventSVG from "../SVG/event.svg";

const NomaContainer = () => {
    return (
        <div className="min-h-96 sm:h-96 w-full p-10 flex justify-center items-center flex-wrap gap-20">
            <TehnikasNoma buttonText="SKAŅU TEHNIKAS NOMA" svg={soundSVG} to="/route1" />
            <TehnikasNoma buttonText="GAISMU TEHNIKAS NOMA" svg={lightSVG} to="/route2" />
            <TehnikasNoma buttonText="KOMUTĀCIJAS NOMA" svg={electricSVG} to="/route3" />
            <TehnikasNoma buttonText="SKATUVES KONSTRUKCIJU NOMA" svg={eventSVG} to="/route3" />
        </div>
    );
};

export default NomaContainer;
