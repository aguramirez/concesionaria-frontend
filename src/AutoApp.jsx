import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';

export const AutoApp = () => {

  return(
    <Routes>
      <Route path="/" element={<NavBar />} />
    </Routes>
  )
}