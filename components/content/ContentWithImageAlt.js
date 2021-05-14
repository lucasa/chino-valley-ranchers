import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { Button } from '../button/Button'
import { Paragraph } from './paragraph/Paragraph'

export function ContentWithImageAlt(props) {

    return(

        <div className="relative pt-8 -mt-24 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/dirt-background.png')` }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 pt-12 lg:pt-36 pb-12 lg:pb-24">

                    <div className="col-span-12 lg:col-span-8 text-center lg:text-left px-8 xl:px-0 xl:pr-8">
                        <h3 className="text-3xl lg:text-7xl text-white font-ultra uppercase tracking-wide lg:mb-4"><InlineTextarea name="heading" /></h3>
                        <div className="pb-16">
                            <InlineBlocks name="blocks" blocks={CONTENT_WITH_IMAGE_BLOCKS} />
                        </div>

                        <Button button={props.data.button} />
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="overflow-hidden w-full h-full relative">
                            <InlineImage
                                name="image.src"
                                parse={media => media.id}
                                uploadDir={() => '/images/'}
                                alt="image.alt"
                            />

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
                heading: "Pasture Raised Liquid Whole Egg",
                text: [
                    "Our 100% Liquid Organic Egg Whites come from hens that live on free-range farms and fed only the finest organic (non-GMO) grains & seeds from certified pesticide-free fields.",
                    "Egg whites are naturally fat free, cholesterol free, and contain no additives or artificial ingredients.",
                    "Each 16 oz. pint is equivalent to about 10 eggs, while 32 oz. pint is equivalent to about 20 eggs – both are fully pasteurized."
                ],
                button: {
                    link: "#",
                    text: "Find a Store Near You"
                },
                image: {
                    src: "/images/pasture-raised-liquid-egg-whites.png",
                    alt: "Pasture Raised Liquid Egg Whites"
                },
                calloutImage: {
                    src: "/images/new.png",
                    alt: "New Product"
                }
            }
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