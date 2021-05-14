import Image from 'next/image'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function FeaturedProduct(props) {

    return(
        <>
        <div className="w-full relative -mt-12 -mb-12 z-20 bg-cover bg-no-repeat" style={{ backgroundImage: `url('/images/feet-bg.png')`}}>
            <div className="max-w-7xl mx-auto relative">

                <div className="grid grid-cols-12 relative">

                    {/* Content */}

                    {/* Image */}
                </div>
            </div>
        </div>
        </>
    )

}

export const featuredProductBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <FeaturedProduct {...data} />
      </BlocksControls>
    ),
    template: {
        label: 'Featured Product',
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
                component: 'group',
                fields: [
                    {
                        name: 'paragraph',
                        label: 'Paragraph',
                        component: 'textarea'
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
                    },
                    {
                        name: 'class',
                        label: 'Tailwind CSS Classes',
                        component: 'text'
                    }
                ]
            }
        ],
    },
}