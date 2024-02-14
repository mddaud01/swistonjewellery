"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import indianFlag from "../../../../../../public/assets/indianFlag.png";

const LeftpartUperNavigation = () => {
  return (
    <div className="  flex justify-between items-center">
      <div className="flex gap-[5px]">
        <span>English</span>{" "}
        <span>
          <Image src={indianFlag} />
        </span>{" "}
        <span>INR</span>
      </div>
      <Link
        href={"/login"}
        className="flex  items-center justify-between gap-1"
      >
        <span>
          <CiUser fontSize={"30px"} />
        </span>{" "}
        <span className="text-[#CBB477]">Login </span>
      </Link>
      <Link href={"/cart"} className="flex  items-center justify-between gap-1">
        <span>
          <CiShoppingCart fontSize={"30px"} />
        </span>{" "}
        <span className="text-[#CBB477]">My-Cart </span>
      </Link>
      <Link
        href={"/whishlist"}
        className="flex  items-center justify-between gap-1"
      >
        {" "}
        <span>
          <CiHeart fontSize={"30px"} />
        </span>{" "}
        <span className="text-[#CBB477]"> My-Wishlist </span>
      </Link>
    </div>
  );
};

export default LeftpartUperNavigation;
