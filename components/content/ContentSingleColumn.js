import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { HeadingSubheading } from '../../components/heading/HeadingSubheading'

export function ContentSingleColumn({data, index}) {

    //const {content} = props

    return(

        <div className="relative pt-8 -mt-12 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/blue-bg.png')` }}>
            <div className="max-w-5xl mx-auto pt-8 lg:pt-32 text-center">
                <InlineBlocks name="blocks" blocks={CONTENT_SINGLE_COLUMN_BLOCKS} />
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