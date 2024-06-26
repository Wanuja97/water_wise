// import static contents
import Logo from '../../assets/logo1.jpeg'
import BackgroundImage from '../../assets/aqua_auto_login.png'
import { useState } from 'react'
export default function ClientAuthPage() {
  const [isLoginForm, setLoginForm] = useState(false);
  const [isSignUpForm, setSignUpForm] = useState(true);

  const handleAuthForms = () => {
    setLoginForm(!isLoginForm);
    setSignUpForm(!isSignUpForm);
  }
  return (
    <>
      <div className="min-h-screen text-gray-900 flex justify-center bg-indigo-950">
        <div className="max-w-screen-xl m-0 sm:m-6 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-4 sm:p-4">
            <div>
              <img src={Logo}
                className="w-wuto h-12 mx-auto" />
            </div>
            {isSignUpForm && (
              <div className="mt-0 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                  Create Account
                </h1>
                <h2 className="text-xl xl:text-xl font-extrabold">
                  Sign Up
                </h2>
                <div className="w-full flex-1 mt-8">
                  <div className="mx-auto max-w-xs">
                    <form >
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email" placeholder="Email" required />
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text" placeholder="Device MAC Address" required />
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text" placeholder="User Name" required />
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="Password" required />
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="tel" placeholder="Mobile No" required />
                      <input
                        className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text" placeholder="NIC" required />
                      <button
                        type="submit"
                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <span className="ml-3">
                          Sign Up
                        </span>
                      </button>
                    </form>

                    <p className="mt-6 text-sm text-gray-600 text-center">
                      Already have an account? <br />
                      <button
                        onClick={handleAuthForms}
                        className=" text-blue-500">
                        SignIn here
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {isLoginForm && (
              
                <div className="mt-0 flex flex-col items-center justify-center">
                  <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Welcome Back !!!
                  </h1>
                  <h2 className="text-xl xl:text-xl font-extrabold">
                    Sign In
                  </h2>
                  <div className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-xs">
                      <form >
                        <input
                          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                          type="text" placeholder="User Name" required />
                        <input
                          className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                          type="password" placeholder="Password" required />
                        <button
                          type="submit"
                          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                          <span className="ml-3">
                            Sign In
                          </span>
                        </button>
                      </form>

                      <p className="mt-6 text-sm text-gray-600 text-center">
                        Don't have an account? <br />
                        <button
                          onClick={handleAuthForms}
                          className=" text-blue-500">
                          SignUp here
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
            )}

          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
