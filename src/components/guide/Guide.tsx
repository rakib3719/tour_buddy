import React from 'react';
import profilePic from '@/asset/image/profile.png';
import Image from 'next/image';
import { FaCarSide, FaStar } from 'react-icons/fa';
import { CiClock2 } from 'react-icons/ci';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import Review from './Review';

interface Profile {
    name: string;
    location: string;
    rate: number;
    image: string;
    reviews: number;
    phoneNumber:number | string,
    Experience:number
}

const guideProfile: Profile = {
    name: 'Raihan Ahmed',
    location: 'Kuakata',
    rate: 250,
    image: profilePic,
    reviews: 594,
    phoneNumber: "01608538567",
    Experience:2
};

const Guide = () => {
    return (
        <div className='container mx-auto px-4 mt-12'>
            
            <h1 className='text-2xl font-semibold mb-6'>Your Selected Guide</h1>

            {/* Profile Section */}
           <div className='md:flex items-center gap-6'>
           <section className='flex md:w-[74%] flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white p-6 gap-6 md:items-center'>
                {/* Profile Image */}
                <div className='flex justify-center md:justify-start'>
                    <Image src={guideProfile.image} alt={guideProfile.name} width={120} height={120} className='rounded-full border shadow-md' />
                </div>

                {/* Profile Details */}
                <div className=''>
                    <div className='flex items-center gap-4 justify-center'>
                        <button className='rounded-full px-4 py-1 text-white bg-[#7BBCB0] text-sm font-medium'>
                            {guideProfile.location}
                        </button>
                        <span className='w-[1px] h-6 bg-gray-300'></span>
                        <div className='flex items-center space-x-1'>
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className={index < 4 ? 'text-yellow-400' : 'text-gray-300'} size={16} />
                            ))}
                        </div>
                        <p className='text-gray-500 text-sm'>({guideProfile.reviews} Reviews)</p>
                    </div>

                    <h1 className='font-semibold text-xl mt-4 text-center md:text-left'>{guideProfile.name}</h1>

                    <div className='flex gap-4 items-center justify-center mt-2 text-sm text-gray-600'>
                        <div className='flex gap-2 items-center'>
                            <CiClock2 className='text-xl' />
                            <p>2 Hours</p>
                        </div>
                        <span className='w-[1px] h-6 bg-gray-300'></span>
                        <div className='flex gap-2 items-center'>
                            <FaCarSide className='text-xl' />
                            <p>Available</p>
                        </div>
                        <span className='w-[1px] h-6 bg-gray-300'></span>
                        <div className='flex gap-2 items-center'>
                            <MdOutlineFamilyRestroom className='text-xl' />
                            <p>Family Plan</p>
                        </div>
                    </div>
                </div>
                
                {/* Price & Hire Button */}
                <div className='flex flex-col items-center md:items-end'>
                    <h1 className='font-bold lg:ml-28 text-xl text-[#7BBCB0]'>Tk {guideProfile.rate}</h1>
                    <p className='text-gray-400'>Per person</p>
                    
                </div>
                <button className='bg-[#13253F]  px-14 flex justify-center items-center text-white  h-14 md:hidden  md:w-auto shadow-md hover:bg-[#0f1d2f]  rounded-full'>
                        Hire Me
                    </button>
            </section>
            <button className='bg-[#13253F]  px-14 md:flex justify-center hidden items-center text-white  h-14   md:w-auto shadow-md hover:bg-[#0f1d2f]  rounded-full'>
                        Hire Me
                    </button>
           </div>

            {/* Review Section */}
            <section className='mt-12 flex flex-col md:flex-row items-center md:justify-between gap-6'>
                <div className='text-center md:text-left'>
                    <div className='flex items-center gap-4'>
                        <h1 className='font-bold text-2xl'>4.0</h1>
                        <p className='text-gray-400'>14 reviews</p>
                    </div>
                    <div className='flex items-center justify-center md:justify-start mt-2'>
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className={index < 4 ? 'text-yellow-400' : 'text-gray-300'} size={20} />
                        ))}
                    </div>
                </div>

                <div className='bg-gray-100 p-4 px-6 rounded-lg shadow-sm text-center md:text-left'>
               
                    <p className='font-medium'>Proficiency in: English, Bangla, and French.</p>
                    <p>Phone Number: {guideProfile.phoneNumber}</p>
                    <p>Experience: {guideProfile.Experience} Years</p>

                    <p className='text-gray-600'>Guided: Nearly 20 individuals.</p>
                    
                </div>
            </section>

            <Review />
        </div>
    );
};

export default Guide;
