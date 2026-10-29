import {
  Navbar, Hero, About, Problem, Solution, Impact,
  Pestle, Budget, Journey, FloatingPitch, Footer,
} from "./components/Sections.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Impact />
        <Pestle />
        <Budget />
        <Journey />
      </main>
      <FloatingPitch />
      <Footer />
    </div>
  );
}