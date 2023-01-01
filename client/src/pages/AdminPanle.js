import React from 'react'
import Dashboard from '../components/dataTable'
import NavbarComp from '../components/NavbarComp'

function AdminPanel() {
  return (
    <div className='tab'>
        
        <NavbarComp />
        <Dashboard />

    </div>
  )
}

export default AdminPanel