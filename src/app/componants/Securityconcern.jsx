import React from "react";
import CustomeRenderSecurity from './Securityconcerncompo';
import car from  '../../../public/assets/whiclecar.png';
import gift from '../../../public/assets/giftpa.png';
import support from '../../../public/assets/personalsupport.png';
import lock from '../../../public/assets/lockfolder.png'


const Securityconcern = () => {
  return (
    <div className="h-[115px] bg-[#CBB477]  items-center w-[1291px] flex mx-auto justify-center gap-[53px] mt-[40px]">  
   <div>
   <CustomeRenderSecurity image={car} heading={'Free Shipping worldwide'} content={'On order over 100$'}/>
   </div>
   <div>
   <CustomeRenderSecurity image={gift} heading={'Free Shipping worldwide'} content={'Special gift for new member'}/>
   </div>
   <div>
   <CustomeRenderSecurity image={support} heading={'Free Shipping worldwide'} content={'Call: 12 345678 900'}/>
   </div>
   <div>
   <CustomeRenderSecurity image={lock} heading={'Security Payment'} content={'Do secure payment'}/>
   </div>
    </div>
  );
};

export default Securityconcern;
