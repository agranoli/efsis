import React from 'react';
import PiedavajamCont from "./PiedavajamCont";
import soundSVG from "../SVG/soundSVG2.svg";
import lightSVG from "../SVG/lightSVG2.svg";
import speakerSVG from "../SVG/speaker.svg";
import eventSVG from "../SVG/event2.svg";
import consultationSVG from "../SVG/consultation.svg";

const Piedavajam = () => {
    return (
        <div className="min-h-screen flex">
            <div id="piedavajumi" className="w-full lg:h-2/3 min-h-screen flex flex-col justify-center items-center text-white p-0 lg:p-20">
                <div className="flex flex-col h-full w-full items-center">
                    <div className="flex flex-col items-center justify-center h-1/4">
                        <p className="text-center font-bold text-4xl mb-4 mt-20">Ko mēs piedāvājam?</p>
                        <div className="h-px sm:w-80 w-48 bg-amber-300 mb-4"></div>
                    </div>
                    <div className="h-3/4 w-full flex lg:flex-row flex-col">
                        <div className="lg:h-full h-1/3 w-full lg:w-1/3 flex justify-center items-center">
                            <div className="h-36 lg:w-3/4 w-full flex justify-center items-center">
                                <PiedavajamCont svg={soundSVG} />
                                <div className="flex flex-col h-1/2">
                                    <p className="font-bold text-amber-400 text-xl mb-3">Apskaņošanas Pakalpojumi</p>
                                    <p className="text-xs">Izmantojam industrijas standarta ražotāju aprīkojumu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-full lg:w-1/3 w-full flex justify-evenly items-center flex-col">
                            <div className="sm:h-36 h-36 lg:w-3/4 w-full flex justify-center items-center">
                                <PiedavajamCont svg={lightSVG}/>
                                <div className="flex flex-col h-1/2">
                                    <p className="font-bold text-amber-400 text-xl mb-3">Gaismu Aprīkojums</p>
                                    <p className="text-xs">Izvēlamies gadiem pārbaudītu tehnikas ražotāju kvalitāti.</p>
                                </div>
                            </div>
                            <div className="sm:h-36 h-52 lg:w-3/4 w-full flex justify-center items-center">
                                <PiedavajamCont svg={speakerSVG}/>
                                <div className="flex flex-col h-1/2">
                                    <p className="font-bold text-amber-400 text-xl mb-3">Tehnikas Noma</p>
                                    <p className="text-xs">Piedāvājam kolēģiem tehnisko atbalstu - plašs sortiments, elastīga nomas iekārtu saņemšana un atgriešana. Iespējama piegāde uz Jūsu pasākuma vietu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-full lg:w-1/3 w-full flex justify-evenly items-center flex-col">
                            <div className="h-36 sm:w-3/4 w-full flex justify-center items-center">
                                <PiedavajamCont svg={eventSVG}/>
                                <div className="flex flex-col h-1/2">
                                    <p className="font-bold text-amber-400 text-xl mb-3">Skatuves Iekārtas</p>
                                    <p className="text-xs">Drošība pirmajā vietā. Izmantojam tikai TÜV sertificētas konstrukcijas.</p>
                                </div>
                            </div>
                            <div className="h-36 sm:w-3/4 w-full flex justify-center items-center">
                                <PiedavajamCont svg={consultationSVG}/>
                                <div className="flex flex-col h-1/2">
                                    <p className="font-bold text-amber-400 text-xl mb-3">Pasākumu Tehniskās Konsultācijas</p>
                                    <p className="text-xs">Ar prieku padalīsimies ar mūsu pieredzi pasākumu jomā - palīdzēsim izstrādāt piemērotākos risinājumus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Piedavajam;
