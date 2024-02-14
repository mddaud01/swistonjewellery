import Image from "next/image";

const CustomeRenderSecurity = ({ image, heading, content }) => {
    return (
      <div className="flex gap-2 items-center">
        <div className="w-[53px] h-[53px]  rounded-full bg-black flex justify-center items-center text-white">
         <Image src={image} alt="this is whicle car"/>
        </div>
        <div>
          <h1 className="text-[rgba(0, 0, 0, 1)] font-[600] leading-[17.6px] text-[16px]">{heading}</h1>
          <p className="font-[500] leading-[16.5px] text-[15px]">{content}</p>
        </div>
      </div>
    );
  };
  export default CustomeRenderSecurity