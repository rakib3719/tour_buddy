import paymentImage from '@/asset/image/payment 1.png'
import Image from 'next/image';
import sslImage from '@/asset/image/ssl2 1.png'
const Payment = () => {
    return (
        <div className=''>
            <h1 className="text-2xl px-4 font-bold">
                Payment
                </h1>

                <div className='bg-[#f9fafd] px-4 py-8'>
                <section className="container   mx-auto">

<div className=" mt-8 ">
<h1 className="text-2xl">Choose Payment Method</h1>
{/* payment form */}


<form  className="mt-4">

<div className='flex flex-col md:flex-row justify-between gap-24'>


    <div className='md:w-[80%]'>

    <div className="w-full ">
<label
htmlFor="name"
className="text-lg font-semibold"
>
Name:
</label>
<input
type="text"
name="name"
id="name"
placeholder="Your name"
className="placeholder:bg-[#f0f0f1] bg-[#f0f0f1] outline-none py-3 mt-1 px-4 w-full "
/>
</div>


<div className="w-full mt-4">
<label
htmlFor="Transaction Id"
className="text-lg font-semibold"
>
Transaction Id:
</label>
<input
type="password"
name="name"
id="name"
placeholder="Transaction Id"
className="placeholder:bg-[#f0f0f1] bg-[#f0f0f1] outline-none py-3 mt-1 px-4 w-full "
/>
</div>


<div className="w-full mt-4">
<label
htmlFor="number"
className="text-lg font-semibold"
>
Phone Number:
</label>
<input
type="tel"
name="number"
id="number"
placeholder="Phone Number"
className="placeholder:bg-[#f0f0f1] bg-[#f0f0f1] outline-none py-3 mt-1 px-4 w-full "
/>
</div>


<div className="w-full mt-4">
<label
htmlFor="number"
className="text-lg font-semibold"
>
Pin Code:
</label>
<input
type="password"
name="pin_code"
id="pin_code"
placeholder="Pin code"
className="placeholder:bg-[#f0f0f1] bg-[#f0f0f1] outline-none py-3 mt-1 px-4 w-full "
/>
</div>

</div>

{/* image */}

{/*payment image */}
<div className=' '>
<Image src={paymentImage} alt='payment image'/>
</div>
</div>




{/* select method */}
<div className='mt-12'>
  <h1 className='font-semibold my-2'>Select method:</h1>
  <div className='flex flex-wrap gap-4'>
    
    <label htmlFor="bkash">
      <div className='bg-[#37B1E2] flex items-center rounded-full p-4 gap-2 w-32'>
        <input type="radio" id="bkash" name="paymentMethod" /> 
        <h4 className='text-white font-semibold'>Bkash</h4>
      </div>
    </label>

    <label htmlFor="nagad">
      <div className='bg-[#37B1E2] flex items-center rounded-full p-4 gap-2 w-32'>
        <input type="radio" id="nagad" name="paymentMethod" /> 
        <h4 className='text-white font-semibold'>Nagad</h4>
      </div>
    </label>

    <label htmlFor="upay">
      <div className='bg-[#37B1E2] flex items-center rounded-full p-4 gap-2 w-32'>
        <input type="radio" id="upay" name="paymentMethod" /> 
        <h4 className='text-white font-semibold'>Upay</h4>
      </div>
    </label>

    <label htmlFor="visa">
      <div className='bg-[#37B1E2] flex items-center rounded-full p-4 gap-2 w-32'>
        <input type="radio" id="visa" name="paymentMethod" /> 
        <h4 className='text-white font-semibold'>Visa</h4>
      </div>
    </label>

    <label htmlFor="mastercard">
      <div className='bg-[#37B1E2] flex items-center rounded-full p-4 gap-2 w-32'>
        <input type="radio" id="mastercard" name="paymentMethod" /> 
        <h4 className='text-white font-semibold'>MasterCard</h4>
      </div>
    </label>

    <label htmlFor="others">
      <div className='bg-[#37B1E2] flex items-center rounded-full p-4 gap-2 w-32'>
        <input type="radio" id="others" name="paymentMethod" /> 
        <h4 className='text-white font-semibold'>Others</h4>
      </div>
    </label>

  </div>
</div>



<button type='submit' className='bg-[#13253F] rounded-full py-4 px-12 text-white mx-auto mt-8 flex justify-center'>
Confirm Payment
</button>
</form>




</div>


</section>


<section className='mx-auto  flex justify-center mt-8'>
    <Image src={sslImage} alt='ssl Image'/>
</section>
                </div>
               
        
        </div>
    );
};

export default Payment;