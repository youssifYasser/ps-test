import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import en from '../languages/en'
import ar from '../languages/ar'
import {
  ChevronForwardOutline,
  ChevronBackOutline,
  LogoFacebook,
  LogoTwitter,
  LogoInstagram,
  CaretUp,
  CaretDown,
} from 'react-ionicons'

const Footer = () => {
  const [toggleLang, setToggleLang] = useState<boolean>(false)
  const { locale, locales, push } = useRouter()

  const { footerText, logo } = locale === 'en' ? en : ar

  const Arrow = locale === 'en' ? ChevronForwardOutline : ChevronBackOutline

  const handleLanguage = (lang: string) => {
    push('/', '/', { locale: lang })
    setToggleLang(false)
  }

  const socialLinks = [
    { name: footerText.twitter, Icon: LogoTwitter, link: '/' },
    { name: footerText.facebook, Icon: LogoFacebook, link: '/' },
    { name: footerText.instagram, Icon: LogoInstagram, link: '/' },
  ]
  return (
    <div className='w-full'>
      <section className='w-full flex flex-col md:flex-row md:justify-between items-center bg-[#AED3ED] px-5 md:px-10 py-3 md:py-6 space-y-5 md:space-y-0'>
        <p className='text-global text-[#0F75BC] font-[700]'>
          {footerText.joinMailing}
        </p>

        <form className='bg-white md:flex-1 w-full md:max-w-[65%] flex items-center text-md sm:text-lg md:text-xl  rounded-md outline-[#7ea6dc]  focus-within:outline focus-within:outline-4 transition-[outline] duration-200'>
          <input
            type='text'
            className='bg-transparent flex-1 max-w-[70%] outline-none  px-3 pt-2 md:py-3 text-[#717171]'
            placeholder={footerText.emailInput}
          />
          <button
            type='submit'
            onClick={(e) => e.preventDefault()}
            className='bg-[#CDE5F6] w-[30%] px-3 pt-2 md:py-3 border border-[#0F75BC] rounded-md text-[#0F75BC]'
          >
            {footerText.sendBtn}
          </button>
        </form>
      </section>

      <section className='flex flex-col md:flex-row md:items-center p-6 w-full'>
        <div
          className={`md:max-w-[calc(100%/3)] ${
            locale === 'en' ? 'mr-8' : 'ml-8'
          }`}
        >
          <Image
            src={logo}
            width={200}
            height={100}
            alt='droclass logo'
            className='object-cover cursor-pointer'
          />
          <h6 className='text-3xl md:text-4xl lg:text-5xl font-[700] text-[#0F75BC] tracking-wide mt-4 mb-2'>
            {footerText.textLogo}
          </h6>
          <p className='whitespace-pre-wrap text-xl md:text-2xl'>
            {footerText.firstAbout}{' '}
            <span className='block mt-4'>{footerText.secondAbout}</span>
          </p>
        </div>

        <div
          className={`md:self-start flex-1 md:max-w-[calc(100%/3)] ${
            locale === 'en' ? 'mr-8' : 'ml-8'
          }`}
        >
          <h6 className='text-3xl md:text-4xl font-[700] text-[#0F75BC] tracking-wide mt-4 mb-3  whitespace-nowrap'>
            {footerText.usefulLinkHeader}
          </h6>
          <ul>
            {footerText.usefulLinks.map((link) => (
              <li key={link.name} className='mb-3'>
                <a
                  href={link.link}
                  className='text-xl md:text-2xl flex items-center '
                >
                  {link.name}
                  <Arrow color={'#717171'} height={'24px'} width={'24px'} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:self-start md:max-w-[calc(100%/3)]'>
          <h6 className='text-3xl md:text-4xl  font-[700] text-[#0F75BC] tracking-wide mt-4 mb-3 whitespace-nowrap'>
            {footerText.inTouch}
          </h6>
          <ul className='flex '>
            {socialLinks.map((link) => (
              <li
                key={link.name}
                className={`mb-3 ${locale === 'en' ? 'mr-5' : 'ml-5'}`}
              >
                <a href={link.link} className='hover:text-[#0A58CA]'>
                  <link.Icon
                    title={link.name}
                    cssClasses={`social-icons ${
                      link.name === 'تويتر' &&
                      locale === 'ar' &&
                      '!transform !-scale-x-100'
                    }`}
                    height={'36px'}
                    width={'36px'}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='w-full flex flex-col md:flex-row md:justify-between items-center bg-[#AED3ED] px-5 md:px-10 py-3 md:py-6 space-y-5 md:space-y-0'>
        <div>
          <p className='text-global text-[#25aae1] font-[700]'>
            {footerText.rights}
            <a href='#' className='text-[#0F75BC]'>
              {footerText.pioneer}
            </a>
          </p>
        </div>

        <div className='relative w-[70%] md:w-[30%] lg:w-[20%] flex items-center z-50'>
          <div
            onClick={() => setToggleLang((oldVal) => !oldVal)}
            className={`w-full flex items-center justify-between text-white text-xl px-5 py-4 bg-[#0F75BC] cursor-pointer rounded-b-md`}
          >
            {footerText.lang}
            {toggleLang ? (
              <CaretDown color={'#fff'} />
            ) : (
              <CaretUp color={'#fff'} />
            )}
          </div>

          <ul
            className={`bg-[#89afc5] rounded-t-md text-white absolute z-[-1] w-full text-xl overflow-y-hidden transition-all duration-300 ease-linear ${
              toggleLang ? '-translate-y-[90px] max-h-96' : 'max-h-0'
            }`}
          >
            <li
              onClick={() => handleLanguage('en')}
              className={`cursor-pointer whitespace-nowrap w-full hover:bg-[#32A6A6] hover:text-white px-3 py-4 duration-200 flex flex-col ${
                locale === 'en' && 'text-[#0F75BC]'
              }`}
            >
              <span
                className={`${locale === 'en' ? 'self-start' : 'self-end'}`}
              >
                English
              </span>
            </li>
            <li
              onClick={() => handleLanguage('ar')}
              className={`cursor-pointer whitespace-nowrap w-full hover:bg-[#32A6A6] hover:text-white  px-3 pt-4 md:py-4 duration-200 flex flex-col ${
                locale === 'ar' && 'text-[#0F75BC]'
              }`}
            >
              <span
                className={`${locale === 'en' ? 'self-end' : 'self-start'}`}
              >
                العربية
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Footer
