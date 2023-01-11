import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Network from "./components/Network";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Features />
        <Plans />
        <Network />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
