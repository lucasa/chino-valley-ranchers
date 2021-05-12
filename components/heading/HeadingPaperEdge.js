import Image from 'next/image'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'

export function HeadingPaperEdge() {

    //const {content} = props

    return(

        <div className="relative pt-8 -mt-12 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/bg-paper-edge.png')` }}>
            <div className="max-w-7xl mx-auto">

                {/* Page Heading */}
                <div className="text-center z-50 pt-20 pb-8 lg:py-24 max-w-5xl mx-auto px-8 lg:px-0">
                    <h1 className="text-3xl lg:text-7xl text-chinored font-ultra uppercase tracking-wide lg:mb-4"><InlineTextarea name="heading" /></h1>
                    <p className="font-lato lg:text-3xl tracking-wide"><InlineTextarea name="subheading" /></p>
                </div>

            </div>
        </div>

    )

}

export const contentBlock = {
    Component: ({ index }) => (
      <BlocksControls index={index}>
        <HeadingPaperEdge />
      </BlocksControls>
    ),
    template: {
        label: 'Content Paper Edge',
        defaultItem: {
            heading: 'Some Headline Here',
            subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            image: '/images/bg-paper-edge.png'
        },
        fields: [

        ],
    },
}