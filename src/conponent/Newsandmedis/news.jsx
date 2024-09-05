import React from 'react';

const News = () => {
    return (
        <div className=' px-5 md:w-[85%] mx-auto pt-4'>
            <div className='flex gap-10 py-10 lg:flex-row flex-col'>
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
            </div>


            {/* img0 */}




            <div className='pb-10'>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2021/11/p2.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className='pb-2 text-xl md:text-[30px]  mt-5 font-bold'>Visit From ROYAL NORWEGIAN EMBASSY.</h2>
                        <p>Her Excellency Ms. Sidsel Bleken, Ambassador of Royal Norwegian Embassy recently visited Abul Khair Steel Flat factory.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div className='w-full lg:w-[30%]'>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/blob-1.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[70%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]  mt-5 font-bold'>AKS & Shah Cement Achieved Superbrands Recognition.</h2>
                        <p>Along with 29 other brands from diverse industries, Abul Khair Steel (AKS) and Shah Cement have been honoured as the Superbrands Bangladesh for their consistent uncompromised quality and distinguished customer service, at a ceremony held at Radisson Blu Dhaka Water Garden hotel in Dhaka.
                        Superbrands is a global media communications and publishing business with presence in 88 countries. It’s a UK-based independent authority on branding, started its journey in 1994 in London and has been publishing a prestigious series of books, which identify and pay tribute to the strongest brands in the world.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2021/11/p4.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[100%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]  mt-5 font-bold'>Stella Participated in Interior-Exterior International Expo- 2018.</h2>
                        <p>A three-day twin expo titled “Interior-Exterior International Expo-2018” and “Bangladesh Lighting Expo-2018” were held from 11th October to 13th October, 2018 in Dhaka. Around 50 companies from seven countries including Bangladesh showcased products related to interior design such as paints, flooring materials, wall laminates, tiles, ceramics and stone, sanitary and kitchenware, plywood and veneer, doors and windows, furniture, bathroom fittings and accessories, security and access control systems, home automation and smart living, decorative and industrial lighting.
                        Country’s luxurious sanitary brand Stella participated on that expo with their products that were appreciated by the visitors.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/3-1024x683-300x200-1.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[65%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]  mt-5 font-bold'>AKS Organized Earthquake Awareness Seminar.</h2>
                        <p>From the responsibility towards society Abul Khair Steel (AKS) awakens the engineers of the country by organizing engineer’s seminar on a regular basis to share knowledge and experience of the construction sector and to make them cautious for any future threats.
                        It covers creative future vision, planning and development in some nearest countries and Bangladesh, impact of impure steel bars on RCC structures and process for refined steel production, assurance of extra safety to the RCC structures, world recognized routes for high strength steel bar production, the importance of high strength and high ductility steel bars, earthquake and its impact on structures, the importance of ELECTRIC ARC FURNACE in the process of steel production etc.</p>
                    </div>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mt-10'>
                    <div>
                        <img className='w-full' src="https://www.abulkhairgroup.com/wp-content/uploads/2020/11/blob-3.jpg" alt="" />
                    </div>
                    <div className='w-full lg:w-[135%]'>
                        <h2 className='pb-2 text-xl md:text-[30px]  mt-5 font-bold'>Seminar on Innovations in Cement Composition & Applications.</h2>
                        <p>A seminar with a difference where advancement in cement technology is explored from a unique chemical and composition perspective. Superior knowledge and understanding of cement elements are paving way to new innovations and fresh applications.
                        Shah Cement hosts this exciting innovation journey of cement with Professor Dr. Md. Aminul Islam, Department of Materials & Metallurgical Engineering, BUET and discuss implications for Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
