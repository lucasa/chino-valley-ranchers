import Image from 'next/image'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function EggSlider(props) {

    console.log(props)

    const responsive = {
        mobile: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
    }

    return(
        <>
        <div className={`relative w-full hidden lg:block h-[95px] -mt-[75px] bg-cover bg-no-repeat ${props.classes}`} style={{ backgroundImage: `url('/images/bg-paper-edge-border.png')` }}></div>
        <div className="relative w-full overflow-visible" style={{ backgroundImage: `url('/images/bg-paper.png')` }}>

                <Carousel className="absolute -top-48" responsive={responsive} autoPlay additionalTransfrom={0} arrows={false} infinite renderDotsOutside showDots slidesToSlide={1} swipeable>
                    {props.slides.map( (slide, index) => (
                        <div key={index} className="">

                            <div className="max-w-xl mx-auto">
                                <div className="grid grid-cols-12 pb-20">
                                    <div className="col-span-12 h-64">
                                        <div className="image-container relative">
                                            <Image
                                                src={slide.image.src}
                                                alt={slide.image.alt}
                                                layout="fill"
                                                className="image"
                                                priority={true}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="max-w-5xl mx-auto">
                                <div className="grid grid-cols-12 gap-10">
                                    <div className="col-span-12 lg:col-span-5 font-ultra tracking-wide -mt-10">
                                        <h3 className="text-3xl lg:text-7xl text-chinored mb-8">{slide.name}</h3>
                                        <p className="text-gray-900 text-xl lg:text-4xl">{slide.heading}</p>
                                        <p className="text-gray-900 text-xl lg:text-4xl pb-8">{slide.subheading}</p>
                                    </div>
                                    <div className="col-span-12 lg:col-span-7 font-lato tracking-wide text-lg lg:text-3xl">
                                        <p>{slide.content}</p>
                                    </div>
                                     {/* Icons */}
                                     <div className="col-span-12">
                                        {slide.icons && slide.icons.map( (icon, index) => (
                                            <div>
                                                <Image
                                                    src={icon.image.src}
                                                    alt={icon.image.alt}
                                                    layout="fill"
                                                    className="image"
                                                    priority={true}
                                                />
                                            </div>
                                        ))}
                                     </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </Carousel>

        </div>
        </>
    )

}

export const eggSliderBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <EggSlider {...data} />
      </BlocksControls>
    ),
    template: {
        label: 'Egg Slider',
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
                      label: 'Name',
                      name: 'name',
                      component: 'text',
                    },
                    {
                      label: 'Heading',
                      name: 'heading',
                      component: 'text',
                    },
                    {
                      label: 'Sub Heading',
                      name: 'subheading',
                      component: 'text',
                    },
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
                    },
                    {
                        label: 'Icons',
                        name: 'icons',
                        component: 'group-list',
                        itemProps: item => ({
                            key: item.id,
                            label: item.name
                        }),
                        defaultItem: () => ({
                            name: 'New Icon',
                        }),
                        fields: [
                            {
                                label: 'Icon',
                                name: 'src',
                                component: 'image',
                                parse: media => `/images/${media.filename}`,
                                uploadDir: () => '/images/'
                            }
                        ]
                    }
                ],
            }
        ],
    },
}