import Head from 'next/head'

import { Nav } from '../../components/Nav'
import { Hero } from '../../components/hero/Hero'
import { HeadingPaperEdge } from '../../components/heading/HeadingPaperEdge'

export default function Products() {

  const image = '/images/hero-products.jpg'
  const heading = 'Pasture Raised Products'

  const content = {
      heading: 'Happy Chickens Make Better Eggs',
      subheading: 'Chino Valley Ranchers hens eat better feed and run free on open fields. That’s why they lay healthier, all natural eggs. Try our products and taste the difference.',
      image: '/images/bg-paper-edge.png'
  }

  return (

    <div className="relative">
      <Head>
        <title>Chino Valley Ranchers | Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero image={image} heading={heading} />
      <HeadingPaperEdge content={content} />

    </div>

  )
}
