import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { routes } from './components/Routes';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Navbar/>
      <RouterProvider router={routes} /> */}
    </div>
  );
}

export default App;
