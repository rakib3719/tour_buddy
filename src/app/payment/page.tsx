import Link from "next/link";
import Payment from '@/components/payment/Payment';
import React from 'react';

const Page = () => {
    return (
        <div>
             <Link href="/">
                <p className="inline-block px-4 py-2 mt-6 text-center text-white bg-gray-500 rounded-md hover:bg-gray-600">
                    Go to Home
                </p>
            </Link>
            <Payment />

            {/* Simple Button to go back to Home */}
           
        </div>
    );
};

export default Page;
