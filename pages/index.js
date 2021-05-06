import Head from 'next/head'

import { Nav } from '../components/Nav'
import { Hero } from '../components/hero/Hero'

const navigation = [
  { name: 'Our Story', href: '#', current: true },
  { name: 'Our Eggs', href: '#', current: false },
  { name: 'Recipes', href: '#', current: false },
  { name: 'News', href: '#', current: false },
  { name: 'Being Humane', href: '#', current: false },
  { name: 'Contact CVR', href: '#', current: false },
  { name: 'Store Locator', href: '#', current: false, primary:true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (

    <div className="relative">
      <Head>
        <title>Chino Valley Ranchers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav navigation={navigation} />
      <Hero />

    </div>

  )
}
