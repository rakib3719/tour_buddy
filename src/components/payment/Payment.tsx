

const Payment = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">
                Payment
                </h1>

                <div className='bg-[#f9fafd] py-8'>
                <section className="container  mx-auto">

<div className=" mt-8">
<h1 className="text-2xl">Choose Payment Method</h1>
{/* payment form */}


<form  className="mt-4">

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

</form>




</div>

<div>
    
</div>
</section>
                </div>
               
        
        </div>
    );
};

export default Payment;