import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";

export default function SelectMenu({menuBtn, items, popoverClassname}: {
  menuBtn: any,
  items: any[],
  popoverClassname?: string
}) {
  return (
    <Menu as={"div"} className="relative">
      <Menu.Button>{menuBtn}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={"absolute right-0 origin-top-right focus:outline-none flex flex-col z-10"
          + " " + popoverClassname || ""}
        >
          {items.map((item, index) => {
            return <Menu.Item as={Fragment} key={index}>
              {({active}) => (
                <div
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-textColor1'
                  } group flex w-full items-center rounded-md text-sm hover:cursor-pointer`}
                >
                  {item}
                </div>
              )}
            </Menu.Item>
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}