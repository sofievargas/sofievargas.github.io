import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import About from "./components/About"
import Footer from "./components/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "m-0 p-0 bg-customImg w-full min-h-screen flex flex-col items-center justify-center">
      <Header />
      <About />
      <Footer />
      </div>
    </>
  );
}

export default App;
