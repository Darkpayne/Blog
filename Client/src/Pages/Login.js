import React from "react";

const Login = () => {
  return (
    <>
      <div id="root">
        <div className="bg-gradientPinkRed mx-auto min-h-screen w-full  md:bg-none">
          <a
            className="hidden px-3 pt-8 opacity-80 md:block md:px-4 lg:px-8 xl:px-12"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 137.4 55.7"
              viewBox="0 0 137.4 55.7"
              // throwIfNamespace:"false"
              className="w-36"
            >
              <path
                d="M62.1 23.3c.7 0 1.3.2 1.8.6l.7-1.7c-.7-.5-1.6-.7-2.7-.7-2.8 0-4.3 1.6-4.3 4.1v1.1h-2.2v1.9h2.2v10.7H60V28.5h3.7v-1.9H60v-1.1c0-1.5.7-2.2 2.1-2.2zM66 39.2h2.4V21.5H66v17.7zM78.5 39.4c3.9 0 6.8-2.7 6.8-6.5s-2.8-6.4-6.8-6.4-6.8 2.7-6.8 6.4 2.9 6.5 6.8 6.5zm0-2c-2.5 0-4.4-1.8-4.4-4.5s1.9-4.4 4.4-4.4 4.4 1.7 4.4 4.4-1.9 4.5-4.4 4.5zM105.8 26.6L102 36.7l-3.9-10.1h-2l-3.9 10-3.8-10h-2.2L91 39.2h2.3l3.8-9.6 3.8 9.6h2.3l4.9-12.6h-2.3zM116.3 39.4c2.8 0 5-1.2 5.9-3.2l-3-1.6c-.7 1.2-1.8 1.8-3 1.8-1.9 0-3.5-1.3-3.5-3.5s1.5-3.5 3.5-3.5c1.2 0 2.3.5 3 1.8l3-1.5c-1-2.1-3.1-3.3-5.9-3.3-4.3 0-7.4 2.7-7.4 6.6.1 3.7 3.1 6.4 7.4 6.4zM133.8 26.4l-3.8 8.7-3.7-8.7h-4l5.6 12.8h4l5.6-12.8h-3.7z"
                fill="#2B0B3C"
              ></path>
              <linearGradient
                x1="6.629"
                x2="42.705"
                y1="25.433"
                y2="46.275"
                gradientTransform="matrix(1 0 0 -1 0 62.8)"
                gradientUnits="userSpaceOnUse"
                id="grad1"
              >
                <stop offset="0" stopColor="#F857A6"></stop>
                <stop offset="1" stopColor="#FF5858"></stop>
              </linearGradient>
              <path
                d="M35.7 19.2s-.2 0 0 0c-.2 0-.2 0 0 0l-16.1 9.2h-.2l-.9-1.4v-.2L40 14.5c.7-.4.9-1.3.4-1.8L33.1 0h-.2L4.4 16.3c-4 2.5-5.6 7.6-3.1 11.8l15 25.9v-.2c-1.1-2-.2-4.5 1.6-5.6l9.6-5.6c7.2-4.2 8.7-4.9 15.2-8.7.7-.4.9-1.3.4-1.8-1.5-2.8-5.3-9.3-7.4-12.9z"
                fill="url(#grad1)"
              ></path>
              <linearGradient
                id="grad2"
                x1="11.759"
                x2="35.453"
                y1="16.361"
                y2="10.714"
                gradientTransform="matrix(1 0 0 -1 0 62.8)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#4E037A"></stop>
                <stop offset="0.351" stopColor="#2B0B3C"></stop>
                <stop offset="1" stopColor="#9400D3"></stop>
              </linearGradient>
              <path
                fill="url(#grad2)"
                d="M17.6 48.1c-2 1.1-2.7 3.6-1.6 5.6 1.1 2 3.6 2.7 5.6 1.6l9.4-5.4v-.2l-4.2-7.2-9.2 5.6z"
              ></path>
            </svg>
          </a>
          <div className="flex w-full justify-center pt-8 pb-8 md:pt-4">
            <div className="min-h-[calc(100vh-theme(space.16))] w-full max-w-lg rounded-large bg-white p-10 pt-6 shadow-card sm:p-12 sm:pt-8 md:min-h-min md:min-w-[500px] md:p-14 md:pt-10 lg:p-16 lg:pt-16">
              <a className="flex w-full justify-center md:hidden" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 116 140"
                  className="w-18 sm:w-22 md:w-26 lg:w-28"
                >
                  <path
                    fill="url(#paint0_linear_334_3806)"
                    d="M76.764 42.941s-.341 0 0 0c-.341 0-.341 0 0 0L52.2 56.929h-.34l-1.366-2.047v-.341l32.753-18.765c1.024-.682 1.365-2.047.683-2.73L72.669 13.6h-.34l-43.33 24.906c-6.14 3.753-8.53 11.6-4.776 18.082l22.859 39.577v-.342c-1.706-3.07-.342-6.823 2.388-8.529l14.67-8.53c10.918-6.482 13.306-7.505 23.2-13.305 1.024-.683 1.365-2.047.683-2.73-2.388-4.435-8.188-14.33-11.259-19.788z"
                  ></path>
                  <path
                    fill="url(#paint1_linear_334_3806)"
                    d="M49.5 87.277c-3.071 1.706-4.224 5.711-2.518 8.782 1.706 3.07 5.459 4.094 8.53 2.388l14.293-8.228s.148-.117.036-.301l-6.043-10.99-14.298 8.35z"
                  ></path>
                  <path
                    fill="#2B0B3C"
                    d="M11.8 109.496c.913 0 1.76.316 2.413.789l.945-2.306c-.88-.663-2.184-.979-3.52-.979-3.684 0-5.704 2.148-5.704 5.402v1.485H3v2.495h2.934v14.248h3.129v-14.248h4.954v-2.495h-5.02v-1.453c0-1.927.946-2.938 2.804-2.938zM17.05 130.63h3.129v-23.44h-3.13v23.44zM33.634 130.819c5.182 0 8.963-3.57 8.963-8.561s-3.78-8.529-8.963-8.529-8.996 3.538-8.996 8.529 3.813 8.561 8.996 8.561zm0-2.653c-3.325 0-5.835-2.338-5.835-5.908 0-3.57 2.51-5.876 5.835-5.876 3.324 0 5.802 2.306 5.802 5.876 0 3.57-2.478 5.908-5.802 5.908zM69.867 113.887l-5.15 13.394-5.118-13.394h-2.64l-5.215 13.331-5.02-13.331h-2.966l6.421 16.743h3l5.051-12.7 4.987 12.7h3l6.453-16.743h-2.803zM83.782 130.882c3.683 0 6.584-1.579 7.855-4.296l-3.944-2.085c-.945 1.643-2.347 2.338-3.944 2.338-2.575 0-4.596-1.738-4.596-4.707 0-2.97 2.021-4.707 4.596-4.707 1.597 0 2.999.726 3.944 2.338l3.944-2.054c-1.271-2.78-4.172-4.328-7.855-4.328-5.704 0-9.779 3.633-9.779 8.751 0 5.117 4.075 8.75 9.779 8.75zM106.908 113.634l-5.019 11.562-4.857-11.562h-5.248l7.367 16.996h5.247l7.399-16.996h-4.889z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_334_3806"
                      x1="32.245"
                      x2="87.308"
                      y1="70.405"
                      y2="38.594"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F857A6"></stop>
                      <stop offset="1" stopColor="#FF5858"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_334_3806"
                      x1="40.376"
                      x2="76.54"
                      y1="85.175"
                      y2="93.794"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4E037A"></stop>
                      <stop offset="0.351" stopColor="#2B0B3C"></stop>
                      <stop offset="1" stopColor="#9400D3"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <h1 className="mt-6 flex text-[28px] font-bold text-primaryBlack sm:mt-10 sm:text-[32px] md:mt-4 md:justify-center md:text-[38px]">
                Login
              </h1>
              <form className="mt-10 lg:mt-12">
                <div className="removeAutocompleteBg relative">
                  <input
                    id="emailId"
                    name="email"
                    type="email"
                    className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                    placeholder="Enter email"
                  />
                  <label
                    for="emailId"
                    className="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                  >
                    <span className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-[1.2em] pb-[2px]"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="1.5"
                          d="M17.268 9.061l-4.266 3.434a2.223 2.223 0 01-2.746 0L5.954 9.061"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="1.5"
                          d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-semibold">Email</span>
                    </span>
                  </label>
                </div>
                <div className="relative mt-10 lg:mt-12">
                  <div className="removeAutocompleteBg relative">
                    <input
                      id="passwordId"
                      name="password"
                      type="password"
                      className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                      placeholder="Enter Password"
                    />
                    <label
                      for="passwordId"
                      className="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                    >
                      <span className="flex items-center space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-[1.2em] pb-[2px]"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="1.5"
                            d="M16.423 9.448V7.3a4.552 4.552 0 00-4.551-4.551 4.55 4.55 0 00-4.57 4.53v2.168"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="1.5"
                            d="M15.683 21.25H8.042a3.792 3.792 0 01-3.792-3.792v-4.29a3.792 3.792 0 013.792-3.791h7.641a3.792 3.792 0 013.792 3.792v4.289a3.792 3.792 0 01-3.792 3.792z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="1.5"
                            d="M11.862 14.203v2.22"
                          ></path>
                        </svg>
                        <span className="font-semibold">Password</span>
                      </span>
                    </label>
                  </div>
                  <button
                    type="button"
                    className="border-none appearance-none touch-manipulation flex items-center justify-center outline-none absolute right-0 top-[58%] -translate-y-1/2 cursor-pointer text-base font-bold hover:opacity-80"
                  >
                    Show
                  </button>
                </div>
                <div className="mt-4">
                  <a
                    className="text-base font-bold hover:opacity-80"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-8 flex justify-center sm:mt-11 md:mt-14 lg:mt-16">
                  <button
                    type="submit"
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-gradient-to-r from-brandPink to-brandRed w-[300px] shadow-product"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-8 flex justify-center">
                  <a
                    className="text-base font-bold hover:opacity-80"
                    href="/signup"
                  >
                    Create acccount
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="ToastWrapper-sc-19zjhpz-0 bGpCmT">
          <div className="Toastify"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
