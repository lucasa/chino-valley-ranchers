import Head from 'next/head'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { useForm, usePlugin, useCMS } from 'tinacms'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'

import { Nav } from '../components/Nav'
import { Footer } from '../components/footer/Footer'
import { heroVideoBlock } from '../components/hero/HeroVideo'
import { eggSliderBlock } from '../components/slider/EggSlider'
import { inspectionSliderBlock } from '../components/slider/InspectionSlider'
import { feedVideoBlock } from '../components/video/FeedVideo'
import { contentWithImageAltBlock } from '../components/content/ContentWithImageAlt'
import { imageWithContentBlock } from '../components/content/ImageWithContent'
import { ourFamilyBlock } from '../components/content/OurFamily'

export default function Products({ file, isPreview }) {

  const cms = useCMS()

  const formConfig = {
    id: '../content/index.json',
    initialValues: file,
    label: 'Home Page',
    fields: [

    ],
    onSubmit() {
      cms.alerts.success('Saved!')
    },
  }

  // Registers a JSON Tina Form
  //const [data, form] = useGithubJsonForm(file, formConfig)
  const [, form] = useGithubJsonForm(file, formConfig)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (
    <>
    <div className={`relative`}>
      <Head>
        <title>Chino Valley Ranchers | Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <InlineForm form={form}>
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} />
      </InlineForm>
    </div>
    <Footer />
    </>
  )
}

const PAGE_BLOCKS = {
  heroVideo: heroVideoBlock,
  eggSlider: eggSliderBlock,
  inspectionSlider: inspectionSliderBlock,
  feedVideo: feedVideoBlock,
  contentWithImageAlt: contentWithImageAltBlock,
  imageWithContent: imageWithContentBlock,
  ourFamily: ourFamilyBlock
}

export const getStaticProps = async function({
  preview,
  previewData,
}) {

  if (preview) {
    return getGithubPreviewProps({
    ...previewData,
    fileRelativePath: 'content/index.json',
    parse: parseJson,
    isPreview: true,
    })
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/index.json',
        data: (await import('../content/index.json')).default,
      }
    },
  }

}