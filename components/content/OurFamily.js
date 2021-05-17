import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { Button } from '../button/Button'
import { Paragraph } from './paragraph/Paragraph'

export function OurFamily(props) {

    return(

        <div className="relative pt-20 -mt-24 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/bg-burlap.png')` }}>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-12 pt-12 lg:pt-36 pb-12 lg:pb-24 relative px-8 xl:px-0 gap-4">
                    {/* Heading */}
                    <div className="col-span-12 text-center">
                        <InlineText name="heading" />
                    </div>
                    {/* Left/Photo */}
                    <div className="col-span-12 lg:col-span6">
                        <img src={props.data.image.src} alt={props.data.image.alt} />
                    </div>
                    {/* Right/Content */}
                    <div className="col-span-12 lg:col-span-6">
                        <p className=""><InlineTextarea name="content" /></p>
                        <Button button={props.data.button} />
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