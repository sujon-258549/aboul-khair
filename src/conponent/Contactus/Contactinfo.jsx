import React from 'react';

const Contactinfo = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center h-auto p-5 pl-[6%] pt-[9%]">
                <div className="w-full md:w-2/5 p-4">
                    <h2 className="text-2xl md:text-2xl font-medium mb-5">Our Address</h2>
                    <h2 className="text-xl mt-16 font-semibold">CORPORATE OFFICE (ABUL KHAIR GROUP)</h2>

                    <p className='text-[18px]'>
                        Phone: +8802333314541-44 <br />
                        Fax: +8802333320239, 02333310051 <br />
                        D.T. Road, Pahartali, Chittagong, 4217
                    </p>
                    <h2 className="text-xl mt-4 font-semibold">DHAKA OFFICE (Empori Financial Center)</h2>

                    <p className='text-[18px]'>
                        +880-2-8881221, 8881223 <br />
                        +880-2-8881057, 8881051-2 <br />
                        Level-13, Plot-6, Road-93, North Avenue, Gulshan-2 Dhaka, 1212
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-4 flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10162.048935114382!2d89.27496385975827!3d25.776281930102787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1725561494561!5m2!1sen!2sbd"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>

        </div>
    );
}

export default Contactinfo;
