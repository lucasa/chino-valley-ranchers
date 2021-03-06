import Image from 'next/image'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'

export function Hero(props) {

    //const {image, heading} = props
    //const {image} = props

    return(

        <div className="relative overflow-hidden lg:overflow-visible z-40 lg:z-0 w-full min-h-[300px] lg:min-h-[516px] flex items-center">
            <div className="absolute w-full min-h-[300px] lg:min-h-[516px]">
                <InlineImage
                    name="image"
                    parse={media => media.id}
                    uploadDir={() => "/images/"}
                    alt="Organic Eggs"
                >
                    {(props) => (
                        <div
                            style={{
                            height: 0,
                            paddingBottom: "100%"
                            }}
                        >
                            <Image
                            src={props.src}
                            alt={props.alt}
                            layout="fill"
                            objectFit="contain"
                            />
                        </div>
                    )}
                </InlineImage>

            </div>

            <div className="max-w-5xl mx-auto z-40 text-center">
                <h1 className="text-3xl lg:text-7xl text-white font-ultra uppercase tracking-wide"><InlineTextarea name="heading" /></h1>
            </div>
        </div>

    )

}

export const heroBlock = {
    Component: ({ index }) => (
      <BlocksControls index={index}>
        <Hero />
      </BlocksControls>
    ),
    template: {
        label: 'Hero',
        defaultItem: {
            heading: 'Some Headline Here',
            image: '/images/hero-products.jpg'
        },
        fields: [

        ],
    },
}