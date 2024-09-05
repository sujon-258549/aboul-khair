import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className='relative'>
                <video
                    autoPlay
                    loop
                    muted
                    src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/production-ID_3944852.mp4"
                />

                <div className='absolute w-full  top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-30%]'>

                    <div className='bg-[#ffffff9b]'>

                        <img className='mx-auto h-72' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/news-media-min.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Banner;
