import Image from 'next/image'
import { LogoFacebook, LogoGoogle } from 'react-ionicons'
import { useRouter } from 'next/router'
import en from '../languages/en'
import ar from '../languages/ar'

const Login = () => {
  const { locale } = useRouter()
  const { loginText } = locale === 'en' ? en : ar

  return (
    <div className='flex flex-col md:flex-row w-full md:items-center bg-[#EAE6DD]'>
      <section className='md:order-2 w-full md:h-screen'>
        <Image
          src='https://droclass.com/_next/static/media/auth-photo.7f4273f1.png'
          width={500}
          height={100}
          alt='droclass-logo'
          className='object-cover w-full h-[400px] md:h-full'
        />
      </section>
      <section className='w-full md:order-1 px-4 py-6 md:px-[6%] md:py-8 '>
        <div className='flex flex-col space-y-2 md:space-y-6'>
          <h6 className='text-global'>{loginText.welcome}</h6>
          <h6 className='text-global font-[700]'>{loginText.login}</h6>
          <form className='flex flex-col space-y-4'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email' className='text-global'>
                {loginText.emailLabel}
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder={loginText.emailInput}
                className='login-input'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='password' className='text-global'>
                {loginText.passLabel}
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder={loginText.passInput}
                className='login-input'
              />
            </div>

            <p className='text-global transition-colors duration-200 hover:text-[#25aae1] self-end'>
              <a href='#'>{loginText.forgetPass}</a>
            </p>

            <button
              type='submit'
              onClick={(e) => e.preventDefault()}
              className='bg-[#25aae1] hover:bg-[#0F75BC] text-global px-3 py-2 rounded-md text-white transition-colors duration-200 '
            >
              {loginText.loginBtn}
            </button>

            <hr className='bg-gray-400 !my-8 h-[3px] ' />

            <button
              type='button'
              className='!mt-0 flex items-center justify-center space-x-2 text-xl md:text-2xl text-white bg-[#67A2C9] hover:bg-[#25aae1] px-3 py-2 rounded-md transition-colors duration-200'
            >
              <span className={`${locale === 'en' ? 'order-1' : 'order-2'}`}>
                <LogoFacebook color={'#fff'} height='32px' width='32px' />
              </span>
              <span className={`${locale === 'en' ? 'order-2' : 'order-1'}`}>
                {loginText.facebookLogin}
              </span>
            </button>
            <button
              type='button'
              className='flex items-center justify-center space-x-2 text-xl md:text-2xl text-black bg-white hover:bg-[lightgray] px-3 py-2 rounded-md transition-colors duration-200'
            >
              <span className={`${locale === 'en' ? 'order-1' : 'order-2'}`}>
                <LogoGoogle color={'#000'} height='32px' width='32px' />
              </span>
              <span className={`${locale === 'en' ? 'order-2' : 'order-1'}`}>
                {loginText.googleLogin}
              </span>
            </button>

            <div className='text-xl md:text-global text-[#717171] self-center whitespace-nowrap'>
              {loginText.noAcc}{' '}
              <a className='text-[#0F75BC] hover:text-[#717171] transition-colors duration-200 cursor-pointer'>
                {loginText.freeJoin}
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login
