import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Extras } from './components/Aditional';
import { Footer } from './components/Footer';
import { BackgroundElements } from './components/BackgroundElements';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <BackgroundElements />
      <Header />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Extras />
      </main>
      <Footer />
    </div>
  );
}