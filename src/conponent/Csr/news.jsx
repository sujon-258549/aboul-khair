import React from 'react';

const News = () => {
    return (
        <div className=' px-5 md:w-[85%] mx-auto pt-4'>
            {/* <div className='flex gap-10 py-10 lg:flex-row flex-col'>
                <img className='h-[72px] w-[272px]' src="https://www.abulkhairgroup.com/wp-content/uploads/2021/11/PA.jpg" alt="" />
                <div>
                    <h2 className='text-2xl font-bold'>মুদিদোকান থেকে ভারী শিল্পের নেতৃত্বে</h2>
                    <p className='text-[18px] text-[#9ea3a4] py-3'>
                        দেশের শীর্ষস্থানীয় শিল্পগোষ্ঠীর একটি আবুল খায়ের। ছোট একটি দোকানের মাধ্যমে এ শিল্প গ্রুপের ব্যবসার বীজ রোপণ করেছিলেন প্রয়াত আবুল খায়ের। পরে তাঁরই উত্তরসূরিদের হাত ধরে এটি পৌঁছে গেছে সাফল্যের অনন্য এক উচ্চতায়। সেই গল্প নিয়েই এবারের মূল প্রতিবেদন।
                    </p>
                    <h5 className='font-semibold text-[18px]'>
                        Source : <span className='text-red-600'>www.prothomalo.com</span>
                    </h5>
                </div>
            </div> */}


            {/* img0 */}




            <div className='pb-10'>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/01-1024x508-300x150-1.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[70%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]   font-bold'>ASSOCIATION WITH A NOBLE INITIATIVE AHSANIA MISSION CANCER HOSPITAL</h2>
                        <p className='text-xl'>Shah Cement contributed in the fund for establishing Ahsania Mission Cancer Hospital. According to the estimates of the Bangladesh Cancer Society there are currently more than 12,00,000 cancer patients in Bangladesh. About 200,000 new cancer patients are added each year.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div className='w-full lg:w-[30%]'>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/re-300x100-1.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[78%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]   font-bold'>SHAH CEMENT FREE MEDICAL CONSULTANCY</h2>
                        <p className='text-xl'>Throughout the year, Shah Cement arranges free medical consultancy for those who don’t have the economic capabilities to avail medical facilities.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full lg:w-[310px]' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/new-1024x596-300x150-1.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]   font-bold'>COW BRAND COLOUR COATED STEEL SPONSORED SCHOOL</h2>
                        <p className='text-xl'>In order to support a remotely located community Cow Brand Colour Coated Steel has re-constructed Proshikhon Tila Border Guard Primary School at Dighinala, Khagrachari.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/DSC01859-1024x576-600x300-1.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[135%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]   font-bold'>ABUL KHAIR STEEL AND POWER LTD SUPPORTED SCHOOL</h2>
                        <p className='text-xl'>Abul Khair Steel and Power Ltd supported school in Madambibirhat, Sitakundu, Chittagong.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/02-600x456-1.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[135%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]   font-bold'>Seminar on Innovations in Cement Composition & Applications.</h2>
                        <p className='text-xl'>It remains a unique initiative to harness the creative talent of the unsung heroes of construction industry. Shah Cement organizes ‘Shah Cement Nirman er Taroka’ across the country celebrating the life of construction workers to recognize and encourage their versatile talent and their enthusiasm.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
