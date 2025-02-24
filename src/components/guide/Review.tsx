import React from 'react';
import ProgressBar from '../shared/ProgressBar';
import customerProfile1 from '@/asset/image/customerProfile.png';
import customerProfile2 from '@/asset/image/customerProfile2.png';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';


const Review = () => {
  const reviews = [
    {
      image: customerProfile1,
      name: 'Arlene McCoy',
      date: '2/1/2023',
      rating: 4,
      heading: 'Good tour, really well organised',
      comment: '"Amazing Guide!" Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!',
    },
    {
      image: customerProfile2,
      name: 'Alex hales',
      date: '2/1/2023',
      rating: 4,
      heading: 'Good tour, really well organised',
      comment: '"Amazing Guide!" Our tour guide in Kuakata was fantastic! They showed us the best spots for sunrise and sunset, shared fascinating local stories, and made the trip smooth and enjoyable. Their friendly attitude and attention to detail truly made our visit unforgettable. Highly recommend!',
    },
  ];

  return (
    <div className='mt-24'>
      <div className='md:flex justify-between'>
        <h1 className='font-semibold text-xl'>Customer Review</h1>

        <div className='mt-4 md:mt-0'>
          <ProgressBar heading={"Guide"} rating={"4.8"} progress={"80%"} />
          <ProgressBar heading={"Transportation"} rating={"3.0"} progress={"60%"} />
          <ProgressBar heading={"Value for money"} rating={"4.8"} progress={"82%"} />
          <ProgressBar heading={"Safety"} rating={"4.2"} progress={"72%"} />
        </div>
      </div>

      {/* Customer Reviews */}
      {reviews.map((review, index) => (
        <div key={index}>
          <div className='md:flex border-b justify-between gap-12 my-8 items-center'>
            <section className='flex gap-2 items-center md:items-start'>
              <div>
                {/* Set width and height to maintain the image size */}
                <Image src={review?.image} alt={review.name} width={80} height={80} className='rounded-full mt-3' />
              </div>
              <div className='space-y-1'>
                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < review.rating ? "text-yellow-400" : "text-gray-300"}
                      size={24}
                    />
                  ))}
                </div>
                <h4 className='font-semibold'>{review.name}</h4>
                <h2 className='text-gray-600'>{review.date}</h2>
              </div>
            </section>
            <section>
              <h1 className='text-xl font-semibold'>{review.heading}</h1>
              <p className='mt-2'>{review.comment}</p>
            </section>
            <h4 className='text-gray-500 flex'>Helpful? <span className='text-green-600 ml-2'>Yes</span></h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
