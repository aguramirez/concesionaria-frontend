import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AutoRoutes } from './routes/AutoRoutes';

export const AutoApp = () => {

  return (
    <>
      <Routes>
        <Route path="/*" element={<AutoRoutes />} />
      </Routes>
    </>
  )
}