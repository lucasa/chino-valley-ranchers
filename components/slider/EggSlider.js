import Image from 'next/image'
import React from 'react'
import { useEffect, createRef } from 'react'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function EggSlider(props) {

    const responsive = {
        mobile: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
    }

    return(
        <>
        {/* Top Border */}
        <div className={`relative w-full hidden lg:block h-[95px] -mt-[75px] bg-cover bg-no-repeat`} style={{ backgroundImage: `url('/images/bg-paper-edge-border.png')` }}></div>
        {/* Middle Section */}
        <div className="relative z-10" style={{ backgroundImage: `url('/images/bg-paper.png')` }}>
            <div className="lg:min-h-[600px]" >

            </div>
            <div className="lg:absolute w-full lg:-top-48 overflow-y-hidden">

                <div className="relative w-full overflow-visible egg-slider-bg">

                    <Carousel className="absolute -top-0" responsive={responsive} additionalTransfrom={0} arrows={false} infinite renderDotsOutside showDots slidesToSlide={1} swipeable>
                        {props.slides.map( (slide, index) => (
                            <div key={index} className="px-8 pb-12 xl:px-0 text-center lg:text-left">

                                <div className="max-w-xl mx-auto">
                                    <div className="grid grid-cols-12 pb-20">
                                        <div className="col-span-12 h-64">
                                            <img src={slide.image.src} alt={slide.image.alt} />
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
                                        <div className="col-span-12 flex justify-center gap-12">
                                            {slide.icons && slide.icons.map( (icon, index) => (
                                                <img key={index} src={icon.image.src} alt={icon.image.alt} className="h-24" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Carousel>

                </div>

            </div>
        </div>
        {/* Bottom Border */}
        <div className={`relative w-full hidden lg:block h-[95px] bg-cover bg-no-repeat z-10`} style={{ backgroundImage: `url('/images/bg-paper-edge-border-bottom.png')` }}></div>
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