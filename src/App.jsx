import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="bg-gray-800 text-yellow-300 p-4 h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
