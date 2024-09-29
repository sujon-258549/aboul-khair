"use client"

// import Image from 'next/image';
import './style.css'

const Homebanner = () => {
    return (
        <div className='mt-5 md:mt-0'>
            <div
                className='banner-img lg:min-h-[450px] md:min-h-[350px] min-h-[150px] flex items-center'
            >
                <img
                    className='mx-auto md:w-[60%]'
                    src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/Picture2-min.png"
                    alt="A banner of Abul Khair Group"
                    width={1000}
                    height={500}
                    priority // Optimizes loading for critical images
                />
            </div>
        </div>
    );
}

export default Homebanner;
