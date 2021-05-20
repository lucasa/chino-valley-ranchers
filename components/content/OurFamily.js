import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { Button } from '../button/Button'
import { Paragraph } from './paragraph/Paragraph'

export function OurFamily(props) {

    return(

        <div className="relative pt-20 -mt-24 pb-20 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/bg-burlap.png')` }}>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-12 pt-12 lg:pt-36 pb-12 lg:pb-24 relative px-8 xl:px-0 gap-4">
                    {/* Heading */}
                    <div className="col-span-12 text-center font-ultra uppercase text-chinobrown text-3xl lg:text-6xl mb-0 lg:mb-8">
                        <InlineText name="heading" />
                    </div>
                    {/* Left/Photo */}
                    <div className="col-span-12 lg:col-span-6 flex lg:block justify-center">
                        <img src={props.data.image.src} alt={props.data.image.alt} />
                    </div>
                    {/* Right/Content */}
                    <div className="col-span-12 lg:col-span-6 relative">
                        <p className="font-lato lg:text-3xl tracking-wide mb-8 pt-8 text-center lg:text-left"><InlineTextarea name="content" /></p>
                        <div className="flex justify-center lg:block"><Button button={props.data.button} classes={`mt-12 xl:absolute lg:bottom-0 xl:right-0`} /></div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export const ourFamilyBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <OurFamily data={data} />
      </BlocksControls>
    ),
    template: {
        label: 'Our Family Component',
        defaultItem: {
        },
        fields: [
            {
                name: 'heading',
                label: 'Heading',
                component: 'text'
            },
            {
                name: 'content',
                label: 'Content',
                component: 'textarea'
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
                name: 'button',
                label: 'Button',
                component: 'group',
                fields: [
                    {
                        name: 'link',
                        label: 'Link',
                        component: 'text'
                    },
                    {
                        name: 'text',
                        label: 'Text',
                        component: 'text'
                    }
                ]
            }
        ]
    }
}