import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { Button } from '../button/Button'
import { Paragraph } from './paragraph/Paragraph'

export function ContentWithImageAlt(props) {

    return(

        <div className="relative pt-20 -mt-24 pb-36 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/yellow-egg-bg.png')` }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 pt-24 lg:pt-36 pb-12 lg:pb-24">

                    <div className="col-span-12 lg:col-span-8 text-center lg:text-left px-8 xl:px-0 xl:pr-8">
                        <h3 className="text-3xl lg:text-7xl text-white font-ultra uppercase tracking-wide mb-12"><InlineTextarea name="heading" /></h3>
                        <div className="pb-16">
                            <InlineBlocks name="blocks" blocks={CONTENT_WITH_IMAGE_BLOCKS} />
                        </div>

                        <Button button={props.data.button} />
                    </div>
                    <div className="col-span-12 lg:col-span-4 relative flex flex-col-reverse lg:block">
                        {/* Image */}
                        <div className="overflow-hidden w-full h-full relative max-w-xs mx-auto lg:max-w-full">
                            <InlineImage
                                name="image.src"
                                parse={media => media.id}
                                uploadDir={() => '/images/'}
                                alt="image.alt"
                            />
                        </div>
                        {/* Callout Image */}
                        <div className="relative lg:absolute lg:-top-24 lg:right-0 flex justify-center lg:block pt-12 lg:pt-0">
                            <img src={props.data.calloutImage.src} alt={props.data.calloutImage.alt} />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )

}

export const contentWithImageAltBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <ContentWithImageAlt data={data} />
      </BlocksControls>
    ),
    template: {
        label: 'Content With Image',
        defaultItem: {
        },
        fields: [
            {
                name: 'heading',
                label: 'Heading',
                component: 'textarea'
            },
            {
                name: 'text',
                label: 'Text',
                component: 'list',
                field: {
                    component: 'textarea'
                }
            },
            {
                name: 'button',
                label: 'Button',
                component: 'group',
                fields: [
                    {
                        name: 'link',
                        label: "Link",
                        component: 'text'
                    },
                    {
                        name: 'text',
                        label: 'Button Text',
                        component: 'text'
                    }
                ]
            },
            {
                name: 'image',
                label: 'Image',
                component: 'group',
                fields: [
                    {
                        name: 'src',
                        label: 'src',
                        component: 'image'
                    },
                    {
                        name: 'alt',
                        label: 'Alt Text',
                        component: 'text'
                    }
                ]
            },
            {
                name: 'calloutImage',
                label: 'Callout Image',
                component: 'group',
                fields: [
                    {
                        name: 'src',
                        label: 'src',
                        component: 'text'
                    },
                    {
                        name: 'alt',
                        label: 'Alt Text',
                        component: 'text'
                    }
                ]
            }
        ]
    }
}

const paragraph_template = {
    label: 'Paragraph',
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

const CONTENT_WITH_IMAGE_BLOCKS = {
    text: {
      Component: Paragraph,
      template: paragraph_template,
    },
}