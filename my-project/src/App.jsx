import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "m-0 p-0 bg-customImg w-full min-h-screen flex flex-col items-center justify-center">
      <Header />
      <About />
      <Projects />
      <Footer />
      </div>
    </>
  );
}

export default App;
