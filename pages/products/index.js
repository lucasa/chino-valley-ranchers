import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { useForm, usePlugin, useCMS } from 'tinacms'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import useSWR from 'swr'
import { useState } from 'react'
import { promises as fs } from 'fs'
import path from 'path'

import { Nav } from '../../components/Nav'
import { Hero } from '../../components/hero/Hero'
import { HeadingPaperEdge } from '../../components/heading/HeadingPaperEdge'
import { ProductsList } from '../../components/products/ProductsList'
import { ContentWithImage } from '../../components/content/ContentWithImage'
import { ContentSingleColumn } from '../../components/content/ContentSingleColumn'
import { ContentSingleColumnTwo } from '../../components/content/ContentSingleColumnTwo'

export default function Products({ file, isPreview, products }) {

  const cms = useCMS()

  const formConfig = {
    id: '../../content/products/index.json',
    initialValues: file,
    label: 'Products Page',
    fields: [
      {
        name: 'heading',
        component: 'text'
      },
    ],
    onSubmit() {
      cms.alerts.success('Saved!')
    },
  }

  // Registers a JSON Tina Form
  const [data, form] = useGithubJsonForm(file, formConfig)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (

    <div className={`relative`}>
      <Head>
        <title>Chino Valley Ranchers | Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      {/* TODO - Inline Blocks */}
      <InlineForm form={form}>
        <Hero image={data.image} heading={data.heading} />
        <HeadingPaperEdge content={data.content} />
        <ProductsList products={products} background={data.products.background} />
        <ContentWithImage content={data.contentWithImage} />
        <ContentSingleColumn content={data.contentSingleColumn} />
        <ContentSingleColumnTwo content={data.contentSingleColumnTwo} />
      </InlineForm>
    </div>

  )
}

export const getStaticProps = async function({
  preview,
  previewData,
}) {

    // Get Products Directory
    const productsDirectory = path.join(process.cwd(), 'content/products')
    // Get Filenames from Products Directory
    const tempfilenames = await fs.readdir(productsDirectory)
    // Remove the index file from Products Filenames
    const filenames = tempfilenames.filter(file => file != "index.json" )
    // Get the file contents for each product
    const products = filenames.map(async (filename) => {
      const filePath = path.join(productsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')

      // Generally you would parse/transform the contents
      // For example you can transform markdown to HTML here

      return {
        filename,
        content: fileContents,
      }
  })

  if (preview) {
    return getGithubPreviewProps({
    ...previewData,
    fileRelativePath: 'content/products/index.json',
    parse: parseJson,
    isPreview: true,
    products: await Promise.all(products)
    })
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/products/index.json',
        data: (await import('../../content/products/index.json')).default,
      },
      products: await Promise.all(products)
    },
  }

}