
import React from "react";


const ProgressBar = ({progress, heading, rating}) => {
  return (
      <div >
         <div className='flex gap-4 items-center justify-between'>
            
         <h6 className="w-32">{heading}</h6>
         <div className="w-[250px] h-2 bg-gray-300 rounded-full overflow-hidden">
      <div className={`h-full bg-yellow-400 w-[${progress}]`} ></div>
    </div>
<p>{rating}</p>
         </div>
          {/* <div className='w-[100%]'>
         
          </div> */}
        </div>
  );
};

export default ProgressBar;
