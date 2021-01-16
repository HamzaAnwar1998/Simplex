import { HeroBackground } from "./Components/Views/HeroBackground";
import { PurpleBackground } from "./Components/Views/PurpleBackground";
import { Great } from "./Components/Views/Great";
import { SaveEfforts } from "./Components/Views/SaveEfforts";
import { Testimonials } from "./Components/Views/Testimonials";
import { SimplexWorking } from "./Components/Views/SimplexWorking";
import { PurpleDesign } from "./Components/Views/PurpleDesign";
import { Footer } from "./Components/Views/Footer";

function App() {
  return (
    <div className="wrapper">
      <HeroBackground />
      <PurpleBackground />
      <Great />
      <SaveEfforts />
      <Testimonials />
      <SimplexWorking />
      <PurpleDesign />
      <Footer />
    </div>
  );
}

export default App;
