import React from 'react';
import MovingImage from "./MovingImage";

const Ef = () => {
    return (
        <div className="mt-16">
            <MovingImage />
            <div className={'w-screen flex justify-evenly items-center flex-col p-10 bg-neutral-800 text-white z-30'}>
                <p className={'w-full text-center font-bold text-4xl'}>EF SYSTEM</p>
                <div className="h-px w-44 bg-amber-300 mb-4"></div>
                <p className={'w-2/3 text-center font-semibold text-2xl mt-12 '}>EF SYSTEM specializējas skaņas un gaismas tehnikas īrē un uzstādīšanā dažāda veida pasākumos. Neatkarīgi no tā, vai rīkojat koncertu, kāzas, korporatīvo pasākumu vai festivālu, mēs nodrošinām augstas kvalitātes tehnisko risinājumu, kas padara jūsu notikumu neaizmirstamu. Ar profesionālu aprīkojumu un pieredzējušu komandu mēs garantējam perfektu skaņu un iespaidīgu apgaismojumu, pielāgojoties jebkurai videi un pasākuma vajadzībām. Mūsu mērķis ir radīt ideālu atmosfēru, kas pastiprina katra pasākuma emocionālo un vizuālo pieredzi.</p>
            </div>
        </div>
    );
};

export default Ef;