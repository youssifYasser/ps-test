import Image from 'next/image'
import { MenuOutline } from 'react-ionicons'
import { useState } from 'react'
import { useRouter } from 'next/router'
import en from '../languages/en'
import ar from '../languages/ar'

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const { locale } = useRouter()
  const { navbarText, logo } = locale === 'en' ? en : ar

  const NavList = () => (
    <>
      {navbarText.navbarLinks.map((link) => (
        <li
          key={link.name}
          className={`text-lg whitespace-nowrap my-5 md:my-0 ${
            locale === 'en' ? 'mr-8' : 'ml-8'
          }`}
        >
          <a
            href={link.link}
            className={`${
              link.green ? 'text-[#8cc63f]' : 'text-[#25aae1]'
            } hover:text-gray-800 duration-200`}
          >
            {link.name}
          </a>
        </li>
      ))}
      <li className='flex items-center w-full '>
        <input
          type='text'
          className={`flex-1 py-[0.4rem] px-3 pt-2 rounded-md outline-[#AFC8EB]  focus:outline focus:outline-4 transition-[outline] duration-200 ${
            locale === 'en' ? 'mr-2' : 'ml-2'
          }`}
          placeholder={navbarText.searchInput}
        />
        <button className='pt-2 md:py-2 px-4 rounded-md text-[0.95rem] bg-transparent text-[#198754] border border-[#198754] hover:bg-[#198754] hover:text-white transition-colors duration-150 ease-out'>
          {navbarText.searchBtn}
        </button>
      </li>
    </>
  )

  return (
    <nav className='w-full sticky top-0 left-0  bg-[#E6E6E6] p-4 md:px-10'>
      <div className='md:flex items-center justify-between max-w-7xl mx-auto z-50'>
        <Image
          src={logo}
          width={120}
          height={100}
          alt='droclass logo'
          className='object-cover'
        />

        <div
          onClick={() => setToggleNav((oldVal) => !oldVal)}
          className={`${
            locale === 'en' ? 'right-6' : 'left-6'
          } absolute top-8 cursor-pointer md:hidden py-1 px-2 outline outline-1 outline-[#a6a6a6] ${
            toggleNav && 'outline-4'
          } transition-all delay-150 duration-150 rounded-md`}
        >
          <MenuOutline color={'#686868'} height={'32px'} width={'32px'} />
        </div>
        <ul
          className={`md:hidden ${locale === 'en' ? 'pl-4' : 'pr-4'} ${
            toggleNav ? 'max-h-96' : 'max-h-0'
          } overflow-y-hidden transition-[max-height] duration-500 ease-linear bg-[#E6E6E6] left-0 w-full`}
        >
          {NavList()}
        </ul>
        <ul className='hidden md:flex items-center py-1 w-auto'>{NavList()}</ul>
      </div>
    </nav>
  )
}

export default Navbar
