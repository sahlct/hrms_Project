import Navbar from './navbar'
import OffCanvas from './offCanvas'
import SmallCard from './smallCard'
import MainCard from './mainCard'
import { useState } from 'react'

export default function Container() {
    const [width, setWidth] = useState(false)
  return (
    <div className='home_mainContainer  d-flex justify-content-end' style={{minHeight:'100vh'}}>
        <Navbar setWidth={setWidth} width={width} />
        <OffCanvas />
        <div className="semi_container" style={{ width: width ? 'calc(100vw - 400px)' : '100%', transition:'0.6s ease-in-out' }}>
        <SmallCard />
        <MainCard />
        </div>
    </div>
  )
}
