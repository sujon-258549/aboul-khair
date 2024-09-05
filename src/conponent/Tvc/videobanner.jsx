import Link from 'next/link';
import React from 'react';

const Videobanner = () => {
    return (
        <div>

            <div className='relative'>
                <video
                    autoPlay
                    loop
                    muted
                    src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/Pexels-Videos-2512878.mp4"
                />

                <div className='absolute w-full  top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-30%]'>

                    <div className='bg-[#ffffff9b]'>

                        <img className='mx-auto h-72' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/TVC-min.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='w-[95%] mx-auto'>
                <div className='py-14'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='w-full'>
                            <iframe width={'100%'} height={'210px'} src="https://www.youtube.com/embed/eUj72_Lp3eE?si=ilu3MS9JqyMma8WT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='w-full'>
                            <iframe width={'100%'} height={'210px'} src="https://www.youtube.com/embed/8gSYKzntUew" title="Shah Cement has won the ‘Superbrands Award 2020&#39;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='w-full'>
                            <iframe width={'100%'} height={'210px'} src="https://www.youtube.com/embed/jf8YjaqT3ug" title="পদ্মা সেতু ও রেল লিংক তৈরিতে ব্যবহার হচ্ছে EAF (Electric Arc Furnace) এ পরিশোধিত AKS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                        <div className='w-full'>
                            <iframe width={'100%'} height={'210px'} src="https://www.youtube.com/embed/Rc6p3c6b260" title="MARKS Young Star" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='w-full'>
                            <iframe width={'100%'} height={'210px'} src="https://www.youtube.com/embed/sW5hi_NJfRE" title="Marks Wishes Happy Mother&#39;s Day 2020" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='w-full'>
                            <iframe width={'100%'} height={'210px'} src="https://www.youtube.com/embed/toJhvEYKrOQ" title="হাই কমোডের সুবিধা || Benefits of High Commode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </div>




            <div>
                <div className='relative'>
                    <video
                    className='w-full'
                        autoPlay
                        loop
                        muted
                        src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/Pexels-Videos-2764.mp4"
                    />

                    <div className='absolute w-full  top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-30%]'>

                        <div className='bg-[#ffffff9b]'>

                            <img className='mx-auto h-56' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/official-youtube-channels-min.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>



            {/* grid 222222222222 */}

            <div className='w-[95%] mx-auto'>
                <div className='py-14'>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-10'>
                        <Link href={'https://www.youtube.com/c/ShahCementBD/featured'}>
                            <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/SCIL-youtube-min.png" alt="" />
                        </Link>
                        <Link href={'https://www.youtube.com/channel/UCFUzblQnvQgz4Uudn9JILaQ/featured'}>
                            <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/SEYLON-tea-youtube-min.png" alt="" />
                        </Link>
                        <Link href={'https://www.youtube.com/channel/UCOd1BfNRmDbC5QAjZQ3L9aA/featured'}>
                            <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/marks-FCMP-youtube-min.png" alt="" />
                        </Link>
                        <Link href={'https://www.youtube.com/channel/UCXNhCYS4LgRlVsdZhmo7ZWQ/featured?view_as=subscriber'}>
                            <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/STELLA-youtube-min.png" alt="" />
                        </Link>
                        <Link href={'https://www.youtube.com/channel/UC-mQsA3b1m1UXICqOoe4iOQ/featured'}>
                            <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/AKCGD-youtube-min.png" alt="" />
                        </Link>
                        <Link href={'https://www.youtube.com/channel/UCiDwFajuN6ziARTUb-VPLwQ/featured'}>
                            <img src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/AKS-youtube-min.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Videobanner;
