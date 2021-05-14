import Image from 'next/image'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function InspectionSlider(props) {

    const responsive = {
        mobile: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
    }

    return(
        <>
        <div className="relative bg-cover bg-no-repeat -mt-24 z-0" style={{ backgroundImage: `url('/images/grass-bg.jpg')`}}>
            <div className="max-w-7xl mx-auto relative">
                {props.slides.map( (slide, index) => (

                <div key={index} className="grid grid-cols-12 gap-8 pt-48">
                    {/* Image */}
                    <div className=" relative col-span-12 lg:col-span-3">
                        <img src={slide.image.src} alt={slide.image.src} />
                    </div>

                    {/* Content */}
                    <div className="col-span-12 lg:col-span-9 font-ultra text-3xl leading-7 lg:text-6xl tracking-wide text-white uppercase pt-10">
                        <p className="">{slide.content}</p>
                    </div>
                </div>

                ))}
            </div>
        </div>
        </>
    )

}

export const inspectionSliderBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <InspectionSlider {...data} />
      </BlocksControls>
    ),
    template: {
        label: 'Inpsection Slider',
        defaultItem: {

        },
        fields: [
            {
                name: 'classes',
                label: 'Tailwind CSS Classes',
                component: 'text'
            },
            {
                label: 'Slides',
                name: 'slides',
                component: 'group-list',
                itemProps: item => ({
                    key: item.id,
                    label: item.name
                }),
                defaultItem: () => ({
                    name: 'New Slide',
                }),
                fields: [
                    {
                        label: 'Content',
                        name: 'content',
                        component: 'textarea',
                    },
                    {
                        label: 'Image',
                        name: 'image',
                        component: 'group',
                        fields: [
                            {
                                label: 'Image',
                                name: 'src',
                                component: 'image',
                                parse: media => `/images/products/${media.filename}`,
                                uploadDir: () => '/images/products/'
                            },
                            {
                                label: 'Image Alt Tag',
                                name: 'alt',
                                component: 'text',
                            }
                        ]
                    }
                ],
            }
        ],
    },
}