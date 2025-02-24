import Link from "next/link";
import Guide from "@/components/guide/Guide";
import Payment from "@/components/payment/Payment";

export default function Home() {
  return (
    <div className="mx-auto">
 
      <Link href="/payment">
                <p className="inline-block px-4 py-2 mt-6 text-center text-white bg-gray-500 rounded-md hover:bg-gray-600">
                    Go to Payment page
                </p>
            </Link>

      {/* Guide Component */}
      <Guide />
    </div>
  );
}
