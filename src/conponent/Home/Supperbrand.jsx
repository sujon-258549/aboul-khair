import React from 'react';
import './style.css'

const Supperbrand = () => {
    return (
        <div className='supperbrand'>

            <div className='flex justify-between py-20 md:flex-row flex-col w-[90%] mx-auto px-5 items-center'>
                <div >
                    <img className=' md:w-[450px]' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/BD-Header.png" alt="" />
                </div>
                <div>
                    <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/BD-Logo.png" alt="" />
                </div>
            </div>
            <p className='text-2xl  w-[90%] mx-auto text-white pt-10 pb-32 text-center'>Along with 40 other brands from diverse industries, Abul Khair Steel (AKS) , Cow Brand Colour Coated Steel and Shah Cement have been honoured as the Superbrands Bangladesh for their consistent uncompromised quality and distinguished customer service.</p>

        </div>
    );
}

export default Supperbrand;
