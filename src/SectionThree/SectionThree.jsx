import "./SectionThree.css";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import fooor from "./fooor.png";
import five from "./five.png";
import six from "./six.png";
export default function SectionThree() {
  return (
    <div className="SectionThree flex items-center justify-center bg-neutral-900">
      <section className=" container ">
        <div className=" w-full flex justify-center p-7">
          <h1 className="text-7xl font-bold text-amber-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:text-blue-600 hover:font-extrabold">Projects</h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:text-blue-600 hover:font-bold">
            <img className=" rounded-2xl" src={one} alt="one" />
            <div className="flex items-center justify-center flex-col text-white ">
              <h1 className="text-4xl">Card Shop system</h1>
              <h2 className="text-2xl"> React • Tailwind CSS </h2>
            </div>
            <div className="links flex justify-around text-white p-4">
              <a href="https://project-system-1xsr.vercel.app/">
                <button className="px-6 py-2 rounded-lg bg-gray-700 text-red-950 font-semibold 
  hover:bg-gray-900 hover:text-white transition duration-300 cursor-pointer">
                  VIEW PROJECT
                </button>
              </a>
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-gray-700 text-red-950 font-semibold 
  hover:bg-gray-900 hover:text-white transition duration-300 cursor-pointer">VIEW CODE</button>
              </a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:text-blue-600 hover:font-bold">
            <img className=" rounded-2xl" src={two} alt="2" />
            <div className="flex items-center justify-center flex-col text-white">
              <h1 className="text-4xl">Card Shop system</h1>
              <h2 className="text-2xl"> React • Tailwind CSS </h2>
            </div>
            <div className="links flex justify-around p-4">
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-neutral-800 text-amber-800 font-semibold 
  hover:bg-neutral-950 hover:text-white transition duration-300 cursor-pointer">
                  VIEW PROJECT
                </button>
              </a>
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-neutral-800 text-amber-800 font-semibold 
  hover:bg-neutral-950 hover:text-white transition duration-300 cursor-pointer">VIEW CODE</button>
              </a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:text-blue-600 hover:font-bold">
            <img className=" rounded-2xl" src={three} alt="3" />
            <div className="flex items-center justify-center flex-col text-white">
              <h1 className="text-4xl">Card Shop system</h1>
              <h2 className="text-2xl"> React • Tailwind CSS </h2>
            </div>
            <div className="links flex justify-around p-4">
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-blue-950 text-white font-semibold 
  hover:bg-blue-800 hover:text-lime-600 transition duration-300 cursor-pointer">
                  VIEW PROJECT
                </button>
              </a>
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-blue-950 text-white font-semibold 
  hover:bg-blue-800 hover:text-lime-600 transition duration-300 cursor-pointer">VIEW CODE</button>
              </a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:text-blue-600 hover:font-bold">
            <img className=" rounded-2xl" src={fooor} alt="4" />
            <div className="flex items-center justify-center flex-col text-white">
              <h1 className="text-4xl">Card Shop system</h1>
              <h2 className="text-2xl"> React • Tailwind CSS </h2>
            </div>
            <div className="links flex justify-around p-4">
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-emerald-800 text-neutral-400 font-semibold 
  hover:bg-emerald-950 hover:text-white transition duration-300 cursor-pointer">
                  VIEW PROJECT
                </button>
              </a>
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-emerald-800 text-neutral-400 font-semibold 
  hover:bg-emerald-950 hover:text-white transition duration-300 cursor-pointer">VIEW CODE</button>
              </a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:text-blue-600 hover:font-bold">
            <img className=" rounded-2xl" src={five} alt="5" />
            <div className="flex items-center justify-center flex-col text-white">
              <h1 className="text-4xl">Card Shop system</h1>
              <h2 className="text-2xl"> React • Tailwind CSS </h2>
            </div>
                        <div className="links flex justify-around p-4">
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-sky-300 text-blue-950 font-semibold 
  hover:bg-sky-900 hover:text-blue-50 transition duration-300 cursor-pointer">
                  VIEW PROJECT
                </button>
              </a>
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-sky-300 text-blue-950 font-semibold 
  hover:bg-sky-900 hover:text-blue-50 transition duration-300 cursor-pointer">VIEW CODE</button>
              </a>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:text-blue-600 hover:font-bold">
            <img className=" rounded-2xl" src={six} alt="6" />
            <div className="flex items-center justify-center flex-col text-white">
              <h1 className="text-4xl">Card Shop system</h1>
              <h2 className="text-2xl"> React • Tailwind CSS </h2>
            </div>
                       <div className="links flex justify-around p-4">
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-amber-800 text-amber-400 font-semibold 
  hover:bg-amber-950 hover:text-white transition duration-300 cursor-pointer">
                  VIEW PROJECT
                </button>
              </a>
              <a href="">
                <button className="px-6 py-2 rounded-lg bg-amber-800 text-amber-400 font-semibold 
  hover:bg-amber-950 hover:text-white transition duration-300 cursor-pointer">VIEW CODE</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
