
"use client"

import React, { useEffect, useState } from 'react';

const Kyedata = () => {
    const [kyemanegment, setkyemanegment] = useState([])
    console.log(kyemanegment.length)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/kyemaneger.json');
                const data = await response.json();
                setkyemanegment(data);
            } catch (error) {
                console.error('Error fetching the gallery data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10'>
            {
                kyemanegment.map((kyedata, index) => (
                    <div key={index}>
                        <img className='w-full' src={kyedata.image} alt="" />
                    </div>
                ))
            }
        </div>
    );
}

export default Kyedata;
