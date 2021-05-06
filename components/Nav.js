import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Nav(props) {

    //const {navigation} = props
    const navigation = [
        { name: 'Our Story', href: '#', current: true },
        { name: 'Our Eggs', href: '#', current: false },
        { name: 'Recipes', href: '#', current: false },
        { name: 'News', href: '#', current: false },
        { name: 'Being Humane', href: '#', current: false },
        { name: 'Contact CVR', href: '#', current: false },
        { name: 'Store Locator', href: '#', current: false, primary:true },
    ]

    return(

        <Disclosure as="nav" className="bg-gray-800 bg-opacity-80 top-0 z-50 fixed w-full">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">

                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden z-50">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>

                    <div className="pt-28 hidden lg:block z-50">
                        <Image
                        src="/images/logo.png"
                        height={161}
                        width={237}
                        alt="Chino Valley Ranchers"
                        />
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center z-0 lg:hidden">
                        <Image
                            src="/images/logo.png"
                            height={52}
                            width={77}
                            alt="Chino Valley Ranchers"
                        />
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden lg:block lg:ml-6">
                        <div className="flex space-x-1">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium text-white uppercase ${item.current ? 'bg-gray-900' : 'hover:bg-gray-700 hover:text-white'} ${item.primary ? 'bg-yellow-500 text-gray-700' : null }`}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">

                        <div className="gap-2 hidden lg:flex lg:items-center">
                        <div className="h-[28px]">
                            <Image
                                src='/images/youtube.png'
                                height={28}
                                width={28}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        <div className="h-[28px]">
                            <Image
                                src='/images/facebook.png'
                                height={28}
                                width={28}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        <div className="h-[28px]">
                            <Image
                                src='/images/twitter.png'
                                height={28}
                                width={28}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        <div className="h-[28px]">
                            <Image
                                src='/images/instagram.png'
                                height={28}
                                width={28}
                                alt="Chino Valley Ranchers"
                            />
                        </div>
                        </div>

                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>

    )

}