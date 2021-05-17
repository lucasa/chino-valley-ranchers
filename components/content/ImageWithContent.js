import Image from 'next/image'
import { InlineText, InlineTextarea, InlineBlocks, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

import { Button } from '../button/Button'
import { Paragraph } from './paragraph/Paragraph'

export function ImageWithContent(props) {

    return(

        <div className="relative pt-20 -mt-24 pb-12 bg-no-repeat bg-contain" style={{ backgroundImage: `url('/images/blue-bg.jpg')` }}>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-12 pt-12 lg:pt-36 pb-12 lg:pb-24">

                    {/* Left */}
                    <div className="col-span-12 lg:col-span-6">
                        <p className="font-lato lg:text-3xl tracking-wide mb-8"><InlineTextarea name="content" /></p>
                        <div className="image">
                            <img src={props.data.leftImage.src} alt={props.data.leftImage.alt} />
                        </div>
                    </div>
                    {/* Right */}
                    <div className="col-span-12 lg:col-span-6">
                        <div>
                            <img src={props.data.rightImage.src} alt={props.data.rightImage.alt} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Absolute Div */}
            <div className="lg:absolute bottom-0 right-0">

            </div>
        </div>

    )

}

export const imageWithContentBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <ImageWithContent data={data} />
      </BlocksControls>
    ),
    template: {
        label: 'Image With Content',
        defaultItem: {
        },
        fields: [
            {
                name: 'content',
                label: 'Content',
                component: 'textarea'
            },
            {
                name: 'absoluteContent',
                label: 'Absolute Positioned Content',
                component: 'list',
                field: {
                        component: 'text'
                }
            },
            {
                name: 'imageLeft',
                label: 'Image Left',
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
            },
            {
                name: 'imageRight',
                label: 'Image Right',
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