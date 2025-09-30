import React from "react";
import Navigation from "./components/Navigation";
import { useScrollToTop } from "./hooks/useScrollToTop"
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
    const hasAnimated = useIntersectionObserver();
    const showScrollTop = useScrollToTop();

    return (
        <div className="min-h-screen bg-white text-black">
            <Navigation />
            <Hero hasAnimated={hasAnimated} />
            <About hasAnimated={hasAnimated} />
            <Projects hasAnimated={hasAnimated} />
            <Skills hasAnimated={hasAnimated} />
            <Contact hasAinmated={hasAnimated} />
            <Footer />
            <ScrollToTop showScrollTop={showScrollTop} />
        </div>
    );
};

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Cong is {count}
//         </button>
//         <button onClick={() => setCount((count) => count - 1)}>
//           Tru is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
