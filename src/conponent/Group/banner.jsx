import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className='relative'>
                <video
                    autoPlay
                    loop
                    muted
                    src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/video-1.mp4"
                />

                <div className='absolute w-full  top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-30%]'>

                    <div className='bg-[#ffffff9b]'>

                        <img className='mx-auto h-96' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/at-a-glance-min.png" alt="" />
                    </div>
                </div>
            </div>


            <div className='py-10'>

                <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/111.png" alt="" />

                <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/222.png" alt="" />
                <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/333.png" alt="" />
                <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/444.png" alt="" />

            </div>

        </div>
    );
}

export default Banner;
