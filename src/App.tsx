import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MyTimeline from './components/Timeline/MyTimeline';

function App() {
  return (
    <div className="App">
      <Home/>
      <MyTimeline/>
      <Footer/>
    </div>
  );
}

export default App;
