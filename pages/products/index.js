import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { usePlugin } from 'tinacms'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'

import { Nav } from '../../components/Nav'
import { Hero } from '../../components/hero/Hero'
import { HeadingPaperEdge } from '../../components/heading/HeadingPaperEdge'

export default function Products({ file }) {

  //const data = file.data
  const formOptions = {
    label: 'Products Page',
    fields: [
      {
        name: 'heading',
        component: 'text'
      },
    ],
  }

  // Registers a JSON Tina Form
  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (

    <div className="relative">
      <Head>
        <title>Chino Valley Ranchers | Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero image={data.image} heading={data.heading} />
      <HeadingPaperEdge content={data.content} />

    </div>

  )
}

export const getStaticProps = async function({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
    ...previewData,
    fileRelativePath: 'content/products.json',
    parse: parseJson,
    })
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/products.json',
        data: (await import('../../content/products.json')).default,
      },
    },
  }

}
