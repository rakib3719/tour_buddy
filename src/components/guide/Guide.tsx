import React from 'react';
import profilePic from '@/asset/image/profile.png';
import Image from 'next/image';
import { FaCarSide, FaStar } from 'react-icons/fa';
import { CiClock2 } from "react-icons/ci";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import Review from './Review';

interface Profile {
    name: string;
    location: string;
    rate: number;
    image: string;
    reviews: number;
}

const gudieProfile: Profile = {
    name: "Raihan Ahmed",
    location: 'Kuakata',
    rate: 250,
    image: profilePic,
    reviews: 594
};

const Guide = () => {
    return (
        <div className='container mt-12 mx-auto'>
            <h1 className='text-xl'>Your Selected Guide:</h1>

            {/* Profile Section */}
            <section className='flex mt-12 rounded items-center gap-4 justify-between'>
                <div className='flex shadow-xl pr-12 items-center gap-12 justify-between'>

                   <div className='flex items-center'>
                     {/* Profile Picture (No Bottom Padding) */}
                     <div className="pb-0">
                        <Image src={gudieProfile.image} alt={gudieProfile.name} />
                    </div>

                    {/* Profile Details */}
                    <article className='ml-8'>

                        <div className='flex items-center mt-6 gap-4'>
                            <button className='rounded-full px-4 py-1 text-white bg-[#7BBCB0]'>
                                {gudieProfile.location}
                            </button>

                            <span className='w-[1px] h-6 bg-gray-300'></span>

                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={index < 4 ? "text-yellow-400" : "text-gray-300"}
                                        size={16}
                                    />
                                ))}
                            </div>
                            <p className='text-gray-500'>({gudieProfile.reviews} Reviews)</p>
                        </div>

                        {/* Name */}
                        <h1 className='font-semibold text-xl mt-4'>{gudieProfile.name}</h1>

                        <div className='flex pb-4 gap-4 items-center mt-2'>

                            <div className='flex gap-2 items-center'>
                                <CiClock2 />
                                <p>2 Hours</p>
                            </div>

                            <span className='w-[1px] h-6 bg-gray-300'></span>

                            <div className='flex gap-2 items-center'>
                                <FaCarSide />
                                <p>Available</p>
                            </div>

                            <span className='w-[1px] h-6 bg-gray-300'></span>

                            <div className='flex gap-2 items-center'>
                                <MdOutlineFamilyRestroom />
                                <p>Family Plan</p>
                            </div>
                        </div>
                    </article>
                   </div>
                    <div className=''>
                        <h1 className='font-bold text-xl text-[#7BBCB0]'>Tk {gudieProfile.rate}</h1>
                        <p className='text-gray-400'>Per person</p>
                    </div>
                </div>

                {/* Hire Me Button */}
                <div>
                    <button
                        type='submit'
                        className='bg-[#13253F] rounded-full py-4 px-12 text-white mx-auto mt-8 flex justify-center'
                    >
                        Hire Me
                    </button>
                </div>
            </section>

{/*  */}

<section className='flex justify-between mt-24'>

    <div>
        <div className='flex gap-6'>
        <h1 className='font-bold text-2xl'>4.0</h1>
        <p className='text-gray-400 mt-3'>14 reviews</p>
        </div>


        <div className="flex items-center space-x-1 mt-4">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={index < 4 ? "text-yellow-400" : "text-gray-300"}
                                        size={24}
                                    />
                                ))}
                            </div>
    </div>
    <div className='bg-gray-300 mt-12 p-3 px-8 rounded-full'>
<p>    Proficiency in: English, Bangla, and French.</p>
    <p>Guided: Nearly 20 individuals.</p>
    </div>
</section>
<Review/>
        </div>
    );
};

export default Guide;
