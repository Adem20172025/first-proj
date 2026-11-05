import { Creation } from "./Loopstudios-comps/creations";
import { Footer } from "./Loopstudios-comps/footer";
import { Home } from "./Loopstudios-comps/home";
import { Vr } from "./Loopstudios-comps/vr";

export default function App() {
  return (
    <main className="flex flex-col md:items-center gap-20">
      <Home />
      <Vr />
      <Creation />
      <Footer />
    </main>
  );
}
