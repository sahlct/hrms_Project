import Navbar from './navbar'
import OffCanvas from './offCanvas'
import SmallCard from './smallCard'
import MainCard from './mainCard'
import { useState } from 'react'

export default function Container() {
    const [width, setWidth] = useState(false)
  return (
    <div className='home_mainContainer  d-flex justify-content-end' style={{width:'100vw', minHeight:'100vh'}}>
        <Navbar setWidth={setWidth} width={width} />
        <OffCanvas />
        <div className="semi_container" style={{ width: width ? 'calc(100vw - 400px)' : '100%' }}>
        <SmallCard />
        <MainCard />
        </div>
    </div>
  )
}
