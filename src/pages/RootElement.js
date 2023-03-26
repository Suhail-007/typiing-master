import { Outlet } from 'react-router-dom';
import Header from '../components/Layout/Header/Header'

export default function RootElement() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}