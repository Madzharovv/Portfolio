
import './App.css';
import { Navbar, Hero } from './Components/index.js';

import backgroundVideo from './assets/background.mp4'; 
function App() {
  return (
    <div className="App">
      
     
      <div className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
      <Navbar />
      <Hero />
      </div>
    </div>
    
  );
}

export default App;
