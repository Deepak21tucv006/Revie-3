import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Mk from './component/Mk';
import Tissot from './component/Tissot';
import Guess from './component/Guess';
import Fossil from './component/Fossil';
import Th from './component/Th';
function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='mk'element={<Mk/>}/>
        <Route path='tissot'element={<Tissot/>}/>
        <Route path='guess'element={<Guess/>}/>
        <Route path='fossil'element={<Fossil/>}/>
        <Route path='tommyhilfiger'element={<Th/>}/>

      </Routes>
    </div>
  )
}
export default App