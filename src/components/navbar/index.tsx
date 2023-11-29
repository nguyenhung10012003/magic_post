import React from 'react';
import Dropdown from '@/components/dropdown';
import NavLink from '@/components/link/NavLink';
import Search from "@/components/icons/Search";
import User from "@/components/icons/User";
import Bars3 from "@/components/icons/Bars3";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
}) => {
  const {onOpenSidenav, brandText, mini, hovered} = props;

  return (
    <nav
      className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl ">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700">
              {' '}
              /{' '}
            </span>
          </a>
          <NavLink
            className="text-sm font-normal capitalize text-navy-700 hover:underline"
            href="#"
          >
            {brandText}
          </NavLink>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700">
          <NavLink
            href="#"
            className="font-bold capitalize hover:text-navy-700"
          >
            {brandText}
          </NavLink>
        </p>
      </div>

      <div
        className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div
          className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 w-full">
          <p className="pl-3 pr-2 text-xl">
            <Search/>
          </p>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 xl:hidden"
          onClick={onOpenSidenav}
        >
          <Bars3/>
        </span>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <span className={`bg-gray-200 p-[8px] rounded-full cursor-pointer hover:text-navy-500 hover:bg-gray-400`}>
              <User/>
            </span>
          }
          classNames={'py-2 top-8 -left-[180px] w-max'}
        >
          <div
            className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500">
            <div className="ml-4 mt-3">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-navy-700">
                  👋 Chào mừng bạn trở lại
                </p>
                {' '}
              </div>
            </div>
            <div className="mt-3 h-px w-full bg-gray-200 "/>

            <div className="ml-4 mt-3 flex flex-col">
              <a
                href=" "
                className="text-sm text-gray-800"
              >
                Cá nhân
              </a>
              <a
                href=" "
                className="mt-3 text-sm text-gray-800"
              >
                Cài đặt
              </a>
              <a
                href=" "
                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
              >
                Đăng xuất
              </a>
            </div>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
