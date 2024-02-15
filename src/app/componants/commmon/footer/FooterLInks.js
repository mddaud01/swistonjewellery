import React from "react";

const footerlinks = [
    {id:"0", title: "Customer Service", child: [
        {id: "0.1", title: "Returns Policy"},
        {id: "0.2", title: " Order Status"},
    ]},
    {id:"1", title: "About Us", child: [
        {id: "1.1", title: "Our Story"},
        {id: "1.2", title: "Press"},
        {id: "1.3", title: "Blog"},
        {id: "1.4", title: "Careers"},
        {id: "1.5", title: "Testimonial"},
        {id: "1.6", title: " Vedio Gallery"},
        {id: "1.7", title: " Photo Gallery"},
        {id: "1.8", title: " Contact Us"},
    ]},
    {id:"2", title: "Customer Service", child: [
        {id: "2.1", title: "15-Day Returns"},
        {id: "2.2", title: "Free Shipping"},
        {id: "2.3", title: "Free Shipping"},
        {id: "2.4", title: "Financing Options"},
        {id: "2.5", title: "Old Gold Exchange"},
    ]},
    {id:"3", title: "Swicton Advantage", child: [
        {id: "3.1", title: "Returns Policy"},
        {id: "3.2", title: " Order Status"}
    ]},
    {id:"4", title: "Contact Us", child: [
        {id: "4.1", title: "24X7 Enquiry Support ( ALL Days )"},
        {id: "4.2", title: "General : contacus@Swiston.com"},
        {id: "4.3", title: "Corporate : B&B@Swiston.com"},
        {id: "4.4", title: " HR : Swiston@Swiston.com"},
        {id: "4.5", title: " Grievance : Click here"},
    ]},
]

export default function FooterLinks(){
    return(
        <div className="mt-[30px] p-[30px] border-t border-solid border-[#5b5b5f]">
            <div className="pl-[51px] pr-[118px] pb-[4px]">
                <ul className="flex justify-between">
                    {footerlinks.map((index)=>
                    <li> 
                         <h1 className="text-[#cbb477] text-[22px] font-[600] capitalize mb-15">{index.title}</h1>
                         <ul>
                            {index.child.map((text)=>
                                 <li className="text-[16px] font-[400] text-[white] capitalize">{text.title}</li>
                            )}
                         </ul>
                     </li>
                    )}
                   
                </ul>
            </div>
            
        </div>
    )
}