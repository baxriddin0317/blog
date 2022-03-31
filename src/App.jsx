import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Single from './Components/SinglePage/Single';



function App() {
  const [ search, setSearch ] = useState("");
  const [prev, setPrev ] = useState(0);

  return (
    <div className="App">
      {/* ==== heade start ==== */}
      <Header setSearch={setSearch} setPrev={setPrev} />
      {/* ==== heade end ==== */}

      {/* ==== Routes start ==== */}
      <Routes>
        <Route path='/' element={<Main search={search} prev = {prev} /> } />
        <Route path='/posts/:index' element={<Single />} />
      </Routes>
      {/* ==== Routes end ==== */}

      {/* ==== Footer start ==== */}
      <Footer />
      {/* ==== Footer end ==== */}
    </div>
  );
}

export default App;
