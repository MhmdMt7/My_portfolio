import "./SectionTow.css";
export default function SectionTow() {
  return (
    <section className="sectionTow flex items-center justify-center bg-neutral-900 py-20">
      <div className="container grid text-center text-white ">
        <div className="skill  ">
          <div className="skillHeader flex items-center justify-center text-center">
            <h1 className="text-7xl font-bold p-10 rounded-lg  transition-transform duration-300 hover:scale-105">My Skills</h1>
          </div>
          <div className="skillContent grid grid-cols-1 gap-8 p-10 text-2xl font-bold ">
            <div className="tooop  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">HTML</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">CSS</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">Javascript</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">React.js</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">Next.js</span>
            </div>
            <div className="down grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">Tailwind CSS</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">Bootstrap</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">Git & GitHub</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">Responsive Design</span>

              <span className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">Flexbox & Grid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
