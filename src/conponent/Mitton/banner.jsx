import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className='relative'>
                <video
                    className='w-full'
                    autoPlay
                    loop
                    muted
                    src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/video-1-1.mp4"
                />

                <div className='absolute w-full  top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-30%]'>

                    <div className='bg-[#ffffff9b]'>

                        <img className='mx-auto h-72' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/mission-and-values-min.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row py-10 md justify-between'>
                <div>
                    <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/mnv-3-1024x618-680x410-1.png" alt="" />
                </div>
                <div>
                    <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/Picture1-768x439-1.png" alt="" />
                </div>
            </div>

        </div>
    );
}

export default Banner;
