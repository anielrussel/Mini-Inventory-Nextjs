import React from "react";
import Image from "next/image";

import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

import profile from "../../../public/profile.jpg";
import logo from "../../../public/myLogo.png";
import { Popover } from "antd";
import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "#",
  },
  {
    name: "Inventory",
    href: "#",
  },
  {
    name: "Sales",
    href: "#",
  },
  {
    name: "Employee",
    href: "#",
  },
];

const ProfilePopover = (
  <div className="p-2 flex flex-col gap-10">
    <h1 className="text-lg font-semibold">Russel M. Aniel</h1>
    <Link href={"/login"} className="text-base font-normal">
      Sign out
    </Link>
  </div>
);

const TopNavigation = () => {
  return (
    <div className="flex justify-between items-center">
      <Image src={logo} alt="logo" width={40} height={40} priority />
      <section className="flex items-center gap-28">
        <ul className="flex gap-10 text-gray-900 font-semibold text-base">
          {links.map((link) => (
            <li key={link.name}>{link.name}</li>
          ))}
        </ul>
        <article className="flex items-center gap-8">
          <IoIosSearch size={20} />
          <FaRegBell size={20} />
          <Popover content={ProfilePopover} trigger={"click"}>
            <Image
              src={profile}
              width={40}
              height={40}
              priority
              className="rounded-full"
            />
          </Popover>
        </article>
      </section>
    </div>
  );
};

export default TopNavigation;
