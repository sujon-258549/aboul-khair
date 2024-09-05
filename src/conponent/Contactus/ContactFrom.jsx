import React from 'react';

const ContactFrom = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto">
                {/* Author: FormBold Team */}
                {/* Learn More: https://formbold.com */}
                <div className=" py-10 md:py-20 ">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-[#000001c4]"
                            >
                                Your Full Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
            
                                className="w-full md:w-1/2  border border-[#0000005c] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#000001a6]"
                            >
                              Your Email Address*
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                               
                                className="w-full md:w-1/2  border border-[#0000005c] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="subject"
                                className="mb-3 block text-base font-medium text-[#000001a6]"
                            >
                              Your Current Address*
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                             
                                className="w-full  border border-[#0000005c] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#000001a6]"
                            >
                               Your Phone*
                            </label>
                            <input
                                type="number"
                                name="email"
                                id="email"
                               
                                className="w-full md:w-1/2  border border-[#0000005c] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-base font-medium text-[#000001a6]"
                            >
                              Your Message*
                            </label>
                            <textarea
                                rows={4}
                                name="message"
                                id="message"
                              
                                className="w-full resize-none  border border-[#0000005c] bg-white py-10 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>
                        <div>
                            <button className="] py-1 px-4 text-base font-semibol border border-black outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default ContactFrom;
