import React from "react";
import Image from "next/image";
import call from "../../../../../public/assets/image 34.png"
import massage from "../../../../../public/assets/image35.png"
import location from "../../../../../public/assets/mingcute_location-fill.png"
const ContactDetail = [
    {id: "0", logo: call , title: "Phone Number", dContact: "+987 876 123 456"},
    {id: "1", logo: massage , title: "Email Address", dContact: "info@swistonjewellery,com"},
    {id: "2", logo: location, title: "office Addreess", dContact: "14/A, Miranda City, New Delhi"},
]

export default function Contact(){
    return(
        <div className="mt-[99px] py-[14px] ml-[30px] px-[41px] ">
            <div className="flex gap-[54px]">
                {ContactDetail.map((index)=>
                    <div className="flex gap-[21px] items-center">
                    <div>
                        <Image src={index.logo} className="w-[47px] h-[49px]"/>
                    </div>
                    <div>
                        <h1 className="font-[600] text-[29px] text-[#fff]">{index.title}</h1>
                        <p className="text-[23px] font-[400] text-[white]">{index.dContact}</p>
                    </div>
                </div>
                )}
                
            </div>
        </div>
    )
}