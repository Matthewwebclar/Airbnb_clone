"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";                                               

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div
        className='
flex
flex-row
items-center
gap-3
'
      >
        <div
          onClick={() => { }}
        className="
        hidden
        md:block
        text-sm
        rounded-full
        py-3
        px-4
        hover:bg-neutral-100
        font-semibold
        cursor-pointer
        "
        
        >
          Airbnb your home
        </div>

        <div
          onClick={toggleOpen}
          className=' 
        p-4
        md:py-1
        md:px-2
        border-[1px]
      border-neutral-200
        rounded-full
        py-3
        px-4
        flex
        flex-row
        items-center
        justify-between
        hover:shadow-md
        cursor-pointer
        transition
        '
        >
          <AiOutlineMenu />
          <div
            className='
            hidden 
          md:block
          '
          >
            <Avatar src={""} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='
        absolute
        rounded-xl
        text-sm
        w-[40vw]
        md:w-3/4
        shadow-md
        bg-white
        overflow-hidden
        right-0
        top-12
        '
        >
          <div
            className='
          flex
          flex-col
          cursor-pointer
          '
          >
            <>
              <MenuItem
                onClick={() => router.push("/mytrips")}
                label='My trips'
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
