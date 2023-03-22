import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header'
import RootHeader from '../components/Header/RootHeader'

export default function RootElement() {

  const { pathname } = useLocation();


  return (
    <>
      {pathname === '/' && <RootHeader />}
      {pathname !== '/' && <Header />}
      <Outlet />
    </>
  )
}