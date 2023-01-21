import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Repositorie from './pages/Repositorie';


const Rotas = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/repositorie/:repositorie" element={<Repositorie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Rotas;