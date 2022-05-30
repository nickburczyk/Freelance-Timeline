import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyTimeline from './components/Timeline/MyTimeline';
import { LanguageProvider } from './lib/context';

function App() {
  useEffect(()=>{
    const german = sessionStorage.getItem("DE")
    const english = sessionStorage.getItem("EN-US")
    // console.log("GERMAN", german && JSON.parse(german))
    // console.log("ENGLISH", english && JSON.parse(english))
  }, [])

  return (
    <div className="App">
      <LanguageProvider>
        <Home/>
        <MyTimeline/>
        <Footer/>
      </LanguageProvider>
    </div>
  );
}

export default App;
