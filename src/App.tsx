import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyTimeline from './components/Timeline/MyTimeline';
import { LanguageProvider } from './lib/context';

function App() {
  // console.log(sessionStorage)

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
