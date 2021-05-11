import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { HeadingSubheading } from '../../components/heading/HeadingSubheading'

export function ContentSingleColumn({data, index}) {

    //const {content} = props

    return(

        <div className="relative pt-8 -top-36 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/blue-bg.png')` }}>
            <div className="max-w-5xl mx-auto pt-8 lg:pt-32 text-center">
                <InlineBlocks name="blocks" blocks={CONTENT_SINGLE_COLUMN_BLOCKS} />

                {content.content.map((block, index) => (
                    <div key={index} className="mb-12 lg:mb-24 px-8 xl:px-0">
                        <h4 className="font-ultra uppercase text-chinoyellow text-3xl lg:text-6xl tracking-wide mb-4">{block.heading}</h4>
                        <p className="text-xl lg:text-3xl text-white tracking-wide">{block.subheading}</p>
                    </div>
                ))}

            </div>
        </div>

    )

}

export const contentSingleColumnBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <ContentSingleColumn data={data} />
      </BlocksControls>
    ),
    template: {
        label: 'Content Single Column',
        defaultItem: {
            content: [
                {
                    heading: "Some Heading",
                    subheading: "Some subheading"
                },
                {
                    heading: "Some Heading",
                    subheading: "Some subheading"
                },
                {
                    heading: "Some Heading",
                    subheading: "Some subheading"
                }
            ]
        },
        fields: [

        ],
    },
}

const content_template = {
    label: 'Heading Block',
    defaultItem: {
        text: [
            'Some default paragraph text here'
        ]
    },
    /*
     ** Define fields to render
     ** in a Settings Modal form
     */
    fields: [

    ],
}

const CONTENT_SINGLE_COLUMN_BLOCKS = {
    content: {
      Component: HeadingSubheading,
      template: content_template,
    },
}