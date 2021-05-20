import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'

import { InlineWysiwyg } from '../../components/tinacms/InlineWYSIWYG'

export function HeroVideo(props) {

    console.log(props)

    return(

        <div className="relative overflow-hidden lg:overflow-visible z-40 lg:z-0 w-full min-h-[300px] lg:min-h-[516px] flex items-center">
            <div className="absolute w-full min-h-[300px] lg:min-h-[516px]">
                <InlineImage
                    name="image"
                    className="min-h-full"
                    parse={media => media.id}
                    uploadDir={() => "/images/"}
                    alt="Organic Eggs"
                >
                    {(props) => (
                        <div
                            style={{
                            height: 0,
                            paddingBottom: "100%"
                            }}
                        >
                            <Image
                                src={props.src}
                                alt={props.alt}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    )}
                </InlineImage>
            </div>

            <div className="max-w-5xl mx-auto z-40 text-center">
                <h1 className="text-3xl lg:text-7xl text-white font-ultra uppercase tracking-wide">
                    <InlineWysiwyg name="heading" format="markdown" sticky>
                        <ReactMarkdown>{props.heading}</ReactMarkdown>
                    </InlineWysiwyg>
                </h1>
            </div>
        </div>

    )

}

export const heroVideoBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <HeroVideo {...data} />
      </BlocksControls>
    ),
    template: {
        label: 'Hero',
        defaultItem: {
            heading: 'Some Headline Here',
            image: '/images/hero-products.jpg'
        },
        fields: [
            {
                name: 'video',
                label: 'Video',
                component: 'group',
                fields: [
                    {
                        name: 'src',
                        label: 'src',
                        component: 'text'
                    }
                ]
            },
            {
                name: 'heading',
                label: 'Heading',
                component: 'text'
            },
            {
                name: 'subheading',
                label: 'Subheading',
                component: 'text'
            }
        ],
    },
}