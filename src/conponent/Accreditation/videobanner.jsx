import React from 'react';

const Videobanner = () => {
    return (
        <div>

            <div className='relative'>
                <video
                    autoPlay
                    loop
                    muted
                    src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/pexels-pavel-danilyuk-5519762.mp4"
                />

                <div className='absolute w-full  top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-30%]'>

                    <div className='bg-[#ffffff9b]'>

                        <img className='mx-auto h-72' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/accreditation-min.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='w-[85%] mx-auto'>
                <div>
                    <h3 className='text-2xl md:text-3xl font-bold text-center pt-5 pb-8'>SUMMARY</h3>
                    <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/45-1000x401-1.png" alt="" />
                </div>
                <div className='pt-10'>
                    <h3 className='text-2xl md:text-3xl font-bold text-center pt-5 pb-8'>CERTIFICATES</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pb-10'>

                    <img className='' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/SCIL-14001.jpg" alt="" />
                    <img className='' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/SCIL-9001.jpg" alt="" />
                </div>
                    </div>
            </div>

        </div>
    );
}

export default Videobanner;
