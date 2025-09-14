import SectionOne from "./SectionOne/SectionOne";
import SectionThree from "./SectionThree/SectionThree";
import SectionTow from "./SectionTow/SectionTow";
import SectionFoor from "./Contact/SectionFoor";
import Footer from "./Footer/footer";
export default function App() {
  return (
    <div className="App">
      <SectionOne />
      <SectionTow />
      <SectionThree />
      <SectionFoor />
      <Footer/>
    </div>
  );
}
