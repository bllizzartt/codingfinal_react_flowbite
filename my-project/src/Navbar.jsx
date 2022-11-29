import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}



export default Navbar;







// import React, { Component } from 'react'
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-gray-100">
//         <body class="h-full">
//         ```
//       */}
//       <div className="min-h-full">
//         <Disclosure as="nav" className="bg-gray-800">
//           {({ open }) => (
//             <>
//               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="flex h-16 items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-8 w-8"
//                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                         alt="Your Company"
//                       />
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4">
//                         {navigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className={classNames(
//                               item.current
//                                 ? 'bg-gray-900 text-white'
//                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                               'px-3 py-2 rounded-md text-sm font-medium'
//                             )}
//                             aria-current={item.current ? 'page' : undefined}
//                           >
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-4 flex items-center md:ml-6">
//                       <button
//                         type="button"
//                         className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                       >
//                         <span className="sr-only">View notifications</span>
//                         <BellIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>

//                       {/* Profile dropdown */}
//                       <Menu as="div" className="relative ml-3">
//                         <div>
//                           <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                             <span className="sr-only">Open user menu</span>
//                             <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
//                           </Menu.Button>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <a
//                                     href={item.href}
//                                     className={classNames(
//                                       active ? 'bg-gray-100' : '',
//                                       'block px-4 py-2 text-sm text-gray-700'
//                                     )}
//                                   >
//                                     {item.name}
//                                   </a>
//                                 )}
//                               </Menu.Item>
//                             ))}
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="md:hidden">
//                 <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block px-3 py-2 rounded-md text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="border-t border-gray-700 pt-4 pb-3">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">{user.name}</div>
//                       <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
//                     </div>
//                     <button
//                       type="button"
//                       className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 space-y-1 px-2">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>

//         <header className="bg-white shadow">
//           <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
//           </div>
//         </header>
//         <main>
//           <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
//             {/* Replace with your content */}
//             <div className="px-4 py-6 sm:px-0">
//               <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
//             </div>
//             {/* /End replace */}
//           </div>
//         </main>
//       </div>
//     </>
//   )
// }
