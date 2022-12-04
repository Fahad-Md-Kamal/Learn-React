import React, { ReactNode } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  const navigate = useNavigate()

  const handleClickMe = () => {
    navigate('/dashboard')
  }
  return (
    <div className='flex flex-col h-[100vh]' >
      <div className='flex gap-2 px-4 py-2 bg-red-400'>
        <NavLink to='/' >{({ isActive }) => {
          return <div style={{ backgroundColor: isActive ? 'green' : undefined }}>Home</div>
        }}</ NavLink>
        <NavLink to="/dashboard" >
          {({ isActive }) => {
            return <div style={{ backgroundColor: isActive ? 'green' : undefined }}>Dashboard</div>
          }}
        </NavLink>

        <button onClick={handleClickMe}>click me</button>
      </div >

      <div className='bg-green-400 w-full flex-1'>
        <Outlet />
      </div>

    </div >
  )
}

export default Layout

