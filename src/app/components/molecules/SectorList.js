import React from 'react'
import { sectors } from '@/app/assets/img'
import SectorLogo from '../atoms/SectorLogo'
export default function SectorList() {
  return (
    <div className='ui-sector--list flex flex-wrap  justify-around py-10'>{sectors.map(e=><SectorLogo key={e.name} src={e.src} name={e.name}/>)}</div>
  )
}
