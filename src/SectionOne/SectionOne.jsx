import "./SectionOne.css";
import my from "./my.jpg";
import TextType from "./TextType";
import { GiHand } from "react-icons/gi";
import CountUp from "react-countup";

export default function SectionOne() {
  return (
    <section className="flex items-center justify-center h-full w-full bg-neutral-900">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="SectionOne container grid grid-cols-1 md:grid-cols-2 justify-center  gap-10 p-5">
          <div className="my flex flex-col items-center justify-center w-[250px] bg-neutral-800 gap-2 p-5 rounded-[15px]">
            <div className="imgMy w-auto h-auto rounded-[15px] overflow-hidden">
              <img src={my} alt="my" />
            </div>
            <div className="contactCart flex flex-col items-center justify-center font-bold  text-white gap-1">
              <h4 className="flex items-center gap-2">
                Available For work{" "}
                <span>
                  <div class="overflow-x-visible relative w-10 h-10 overflow-y-clip group text-center">
                    <div class="flex justify-center items-center w-10 h-10 rounded-full bg-yellow-300 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 26.463 26.647"
                      >
                        <g
                          id="Grupo_3793"
                          data-name="Grupo 3793"
                          transform="translate(1.5 1.5)"
                        >
                          <path
                            id="Trazado_28219"
                            data-name="Trazado 28219"
                            d="M7,10V24.188"
                            transform="translate(-1.088 -0.541)"
                            fill="none"
                            stroke="#000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Trazado_28220"
                            data-name="Trazado 28220"
                            d="M17.37,6.587l-1.182,4.871h6.893a2.365,2.365,0,0,1,2.27,3.027L22.6,23.944a2.365,2.365,0,0,1-2.27,1.7H4.365A2.365,2.365,0,0,1,2,23.282V13.823a2.365,2.365,0,0,1,2.365-2.365H7.628a2.365,2.365,0,0,0,2.116-1.312L13.823,2A3.7,3.7,0,0,1,17.37,6.587Z"
                            transform="translate(-2 -2)"
                            fill="none"
                            stroke="#000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="absolute text-white font-bold -bottom-10 left-1/2 text-sm text-center text-black whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
                      Like
                    </div>
                  </div>
                </span>{" "}
              </h4>
              <h1 className="text-3xl hover:text-shadow-2xs hover:text-shadow-amber-500">
                Mhmd Tolba
              </h1>
              <div className="iconsMy flex gap-3 pt-5">
                <span>
                  <section class="flex justify-center items-center">
                    <button
                      href="/"
                      class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1.1em"
                        viewBox="0 0 512 512"
                        stroke-width="0"
                        fill="currentColor"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                      </svg>
                      <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-1000 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                        Linkedin
                      </span>
                    </button>
                  </section>
                </span>
                <span>
                  <section class="flex justify-center items-center">
                    <button
                      href="/"
                      class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1.2em"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        fill="currentColor"
                        stroke="currentColor"
                        class="w-5"
                      >
                        <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                      </svg>
                      <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-1000 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                        Instagram
                      </span>
                    </button>
                  </section>
                </span>
                <span>
                  <section class="flex justify-center items-center">
                    <button
                      href="/"
                      class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    >
                      <svg
                        class="w-5"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-1000 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                        GitHub
                      </span>
                    </button>
                  </section>
                </span>
                <span>
                  <section class="flex justify-center items-center">
                    <button
                      href="/"
                      class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#CD201F] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 576 512"
                        stroke-width="0"
                        fill="currentColor"
                        stroke="currentColor"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                      </svg>
                      <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-1000 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                        Youtube
                      </span>
                    </button>
                  </section>
                </span>
                <span>
                  <section class="flex justify-center items-center">
                    <button
                      class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-2 transition-all duration-250 hover:from-[#331029] hover:to-[#310413]"
                      href="/"
                    >
                      <svg
                        class="w-5"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1.1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                      </svg>
                      <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-1000  group-hover:text-md group-hover:-translate-y-10 duration-500">
                        Facebook
                      </span>
                    </button>
                  </section>
                </span>
              </div>
            </div>
          </div>
          <div className="contactMy flex flex-col  text-white gap-5 p-15">
            <p className="flex items-center gap-2 text-shadow-gray-700 ">
              Say Hallo <span className=""></span>
              <GiHand className="text-amber-400" />
            </p>
            <h1 className="text-3xl font-bold text-white ">I’m Mhmd Tolba,</h1>
            <span>
              <TextType
                text={["Mhmd Tolba", " Front-End Developer", "Happy coding!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#facc15", "#22d3ee", "#f87171"]}
                className="text-3xl font-bold"
              />
            </span>
            <h2 className="text-3xl font-bold text-white">
              Based in Eng_Abdel Fattah
            </h2>
            <p className="hover:text-shadow-2xs hover:text-shadow-blue-700">
              I specialize in creating clean, user-friendly digital experiences
              by blending creativity with functionality. With a strong
              background in interactive design, I focus on crafting designs that
              not only look great but also provide smooth and engaging user
              interactions, helping ideas come to life seamlessly.
            </p>
          </div>
        </div>
        <div className="down grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-around  font-bold  gap-10 p-5 w-full">
          <div className="flex flex-col items-center justify-center text-white gap-5 ">
            <span className="text-3xl ">
              <CountUp end={13} duration={10} />+
            </span>
            <p className="text-gray-400">Completed Projects</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white gap-5">
            <span className="text-3xl">
              <CountUp end={2} duration={7} />+
            </span>
            <p className="text-gray-400">Years Of Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white gap-5">
            <span className="text-3xl">
              <CountUp end={15} duration={10} />+
            </span>
            <p className="text-gray-400">Happy Cilents</p>
          </div>
          <div className="flex flex-col items-center justify-center text-white gap-5">
            <span className="text-3xl">
              <CountUp end={6} duration={10} />+
            </span>
            <p className="text-gray-400">Awards Received</p>
          </div>
        </div>
      </div>
    </section>
  );
}
