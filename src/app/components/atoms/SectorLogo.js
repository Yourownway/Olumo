import Image from 'next/image'
import React from 'react'

export default function SectorLogo({ src, name }) {
  return (
    <div className='ui-sector'><Image className='m-auto pb-2' src={src} />
      <span className='  flex justify-center '>{name}</span></div>
  )
}
