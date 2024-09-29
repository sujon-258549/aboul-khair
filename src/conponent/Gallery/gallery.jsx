'use client'; // Add this line at the top

import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallerydata, setgallerydata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/member.json'); // Adjust path if needed
                const data = await response.json();
                setgallerydata(data);
            } catch (error) {
                console.error('Error fetching the gallery data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-[85%] mx-auto'>

            {/* <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 md:py-20' > */}

            <div className='flex flex-wrap justify-center gap-5 mt-10 md:py-14 '>
                {gallerydata.map((item, index) => (
                    <div key={index} className="w-full md:w-[31%] lg:w-[23%] overflow-hidden border rounded-md" style={{ boxShadow: '1px 1px 10px #fc2' }}>
                        <img
                            className="object-cover w-full h-56"
                            src={item.image}
                        />
                        <div className="py-5 text-center">
                            <p
                                href="#"
                                className="block text-xl text-center px-2"
                                tabIndex={0}
                                role="link"
                            >
                                {item.text}
                            </p>

                        </div>
                    </div>


                ))}


                {/* 
<div className=" mt-10">
  
  <div className="p-4 ">
    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
      <div className="flex items-center mb-3">
       
        <h2 className="text-white dark:text-white text-lg font-medium">
          Feature 1
        </h2>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-base text-white dark:text-gray-300">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
      </div>
    </div>
  </div> */}



            </div>

















        </div>

        // </div >
    );
};

export default Gallery;
