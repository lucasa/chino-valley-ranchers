import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { Button } from '../button/Button'
import { Paragraph } from './paragraph/Paragraph'

export function ContentWithImage({data, index}) {

    return(

        <div className="relative pt-8 -mt-24 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/dirt-background.png')` }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 pt-12 lg:pt-36 pb-12 lg:pb-24">

                    <div className="col-span-12 lg:col-span-8 text-center lg:text-left px-8 xl:px-0 xl:pr-8">
                        <h3 className="text-3xl lg:text-7xl text-chinored font-ultra uppercase tracking-wide lg:mb-4"><InlineTextarea name="content.heading" /></h3>
                        <div className="pb-16">
                            <InlineBlocks name="blocks" blocks={CONTENT_WITH_IMAGE_BLOCKS} />
                        </div>
                        <InlineGroup
                            name="content.button"
                            fields={[
                                {
                                    name: 'link',
                                    label: 'Button Link',
                                    description: 'Set a destination for the button',
                                    component: 'text',
                                },
                                {
                                    name: 'text',
                                    label: 'Button Text',
                                    description: 'The buttons text',
                                    component: 'text'
                                }
                            ]}
                            >
                            <Button button={data.content.button} />
                        </InlineGroup>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="overflow-hidden w-full h-full relative">
                            <InlineImage
                                name="content.image.src"
                                parse={media => media.id}
                                uploadDir={() => '/images/'}
                                alt="content.image.alt"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}

export const contentWithImageBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <ContentWithImage data={data} />
      </BlocksControls>
    ),
    template: {
        label: 'Content With Image',
        defaultItem: {
            content: {
                background: '/images/dirt-background.png',
                content: {
                    heading: "Some Heading Here",
                    image: {
                        src: "/images/chickens.png",
                        alt: "Organic Fed Chickens"
                    },
                    text: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. Parturient montes nascetur ridiculus mus mauris vitae. Mus mauris vitae ultricies leo. Diam quam nulla porttitor massa id neque aliquam vestibulum."
                    ],
                    button: {
                        link: "#",
                        text: "Learn More"
                    }
                }
            }
        },
        fields: [

        ],
    },
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
    paragraph: {
      Component: Paragraph,
      template: paragraph_template,
    },
}