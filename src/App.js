import logo from './logo.svg';
import './App.css';

import { Canvas } from "@react-three/fiber"
import Box from "./components/Box.js"
import Welcome from './components/Welcome';
import SpringIn from './components/SpringIn';
import Background from './components/Background/Background';
import Name from './components/Name/Name';

function App() {
  return (
    <div class="App">
      <Background />
    </div>
  );
}

export default App;
