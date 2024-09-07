
"use client"


import '../Home/style.css'

const Homebanner = () => {
    return (
        <div className='mt-5 md:mt-0'>
            <div
                className='  banner-img lg:min-h-[450px]  md:min-h-[350px] min-h-[150px] flex  items-center'
            >
                <img className='mx-auto md:w-[60%]' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/About-us-min-1.png" alt="" />
            </div>
        </div>

    );
}

export default Homebanner;
