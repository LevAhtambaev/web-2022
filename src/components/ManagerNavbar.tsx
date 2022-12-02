import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {NavLink} from "react-router-dom";
import {Fragment} from "react";
import {logoutUser} from "../modules";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function ManagerNavbar() {
    const navigation = [
        {name: 'Автомобили', href: '/cars'},
        {name: 'Корзина', href: '/cart'},
        {name: 'О нас', href: '/info'},
        {name: 'Добавить машину', href: '/add'},
    ]

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                    <div className="flex space-x-3">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({isActive}) =>
                                                    [
                                                        "px-3 py-2 rounded-md text-lg font-medium",
                                                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    ]
                                                        .filter(Boolean)
                                                        .join(" ")
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-3">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className={({isActive}) =>
                                                    [
                                                        "px-3 py-2 rounded-md text-lg font-medium",
                                                        isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    ]
                                                        .filter(Boolean)
                                                        .join(" ")
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button
                                            className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://res.cloudinary.com/dl0tawm7w/image/upload/v1667748734/logo/chrome_YfuwE6ZZWj_cnrbky.png"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        href="/profile"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Ваш профиль
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        onClick={() => logoutUser("logout")}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Выход
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </Disclosure>
    )
}