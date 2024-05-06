import Navbar from './navbar'
import OffCanvas from './offCanvas'
import SmallCard from './smallCard'
import MainCard from './mainCard'
import { useState } from 'react'

export default function Container() {
    const [width, setWidth] = useState(false)
  return (
    <div>
        <Navbar setWidth={setWidth} width={width}/>
        <OffCanvas />
        <div className="semi_container" style={{ width: width ? '700px' : '100%' }}>
        <SmallCard />
        <MainCard />
        </div>
    </div>
  )
}
