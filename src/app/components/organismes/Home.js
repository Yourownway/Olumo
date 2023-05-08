import React from 'react'
import logo from "../../assets/img/logo.png"
import cabine1 from "../../assets/img/cabine1.png"
import wave1 from "../../assets/img/wave1.svg"
import Image from 'next/image'
import Button from '../atoms/Button'
import SectorList from '../molecules/SectorList'
import Link from 'next/link'
export default function Home() {
  return (
    <section id='home' className='flex-col justify-between'>

      <div className='flex items-center	content-center  justify-between py-2'>
        <Image className="pt-3" width={140} src={logo} />
        <nav>

          <ul className='flex mr-20 space-x-14 items-center'>
            <li ><Link href={"#nos-secteurs"}>
            Nos Secteurs
            </Link></li>
            <li ><Link href={"#nos-produits"}>
            Nos produits
            </Link></li>
            <li ><Link href={"#about-us"}>
            Qui Sommes Nous ? 
            </Link></li>
            <li ><Button msg={"Contactez-nous !"} type={"light"} /></li>
          </ul>
        </nav>
      </div>
      <div className='flex  justify-between  flex-wrap content-center home-content '>
        <div className='w-3/6  flex flex-col justify-between'>
          <h1 >Vous aussi optez pour des toilettes écologique !</h1>
          <p>Lorem ipsum dolor sit amet. Ab rerum dolore sed nobis omnis nam harum galisum sed cupiditate perspiciatis. Qui tenetur excepturi ut numquam laudantium ea voluptas asperiores in esse expedita ea excepturi ipsam id repellat rerum aut explicabo aliquam.</p>
          <Button msg="Contactez-nous" type="blue" />
        </div>
        <div className='ui-cabine--card'>
          <Image  src={cabine1} />
        </div>
      </div>

      <Image src={wave1} className='img-wave1' />
    </section>
  )
}
