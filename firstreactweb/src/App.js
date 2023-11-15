import { RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { routes } from './components/Routes';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
