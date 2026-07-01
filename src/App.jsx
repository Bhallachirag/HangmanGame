import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import StartGame from './pages/startgame'
import PlayGame from './pages/PlayGame'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/start" replace />} />
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='*' element={<Navigate to="/start" replace />} />
    </Routes>
  )
}

export default App