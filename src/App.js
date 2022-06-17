import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from './routes/home';
import Detail from './routes/detail';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path={`${process.env.PUBLIC_URL}/` }element={<Home />} />
    <Route path="/movie/:id" element={<Detail />} />

  </Routes>
  </BrowserRouter>
  )
  
}

export default App;
