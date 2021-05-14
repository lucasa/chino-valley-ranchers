import Image from 'next/image'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function FeedVideo(props) {

    return(
        <>
        <div className="w-full relative -mt-12 -mb-12 z-20 bg-cover bg-no-repeat" style={{ backgroundImage: `url('/images/feet-bg.png')`}}>
            <div className="max-w-5xl mx-auto pt-12 pb-24 lg:pt-28 relative">

                <div className="grid grid-cols-12 relative">
                    <div className="col-span-12">
                        {/* Heading */}
                        <div className="text-3xl lg:text-7xl text-chinored font-ultra uppercase tracking-wide mb-8 text-center">
                            <InlineTextarea name="heading" />
                        </div>
                    </div>
                    {/* Video */}
                    <div className="col-span-12">
                        <div className="border-8 border-white rounded">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe src={props.video.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="col-span-12 relative lg:-mt-6">
                        <div className="max-w-xl mx-auto">
                            <div className="bg-cover bg-no-repeat px-8 pt-8 pb-12 text-center flex items-center text-xl lg:text-3xl text-white font-lato font-bold tracking-wide" style={{ backgroundImage: `url('/images/content-bg.png')`}}>
                                <InlineTextarea name="content" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="hidden xl:block xl:absolute -right-32 bottom-24 2xl:-right-52 2xl:bottom-48">
                    <img src={props.image.src} alt={props.image.alt} />
                </div>
            </div>
        </div>
        </>
    )

}

export const feedVideoBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <FeedVideo {...data} />
      </BlocksControls>
    ),
    template: {
        label: 'Feed Video',
        defaultItem: {

        },
        fields: [
            {
                name: 'classes',
                label: 'Tailwind CSS Classes',
                component: 'text'
            },
            {
                name: 'heading',
                label: 'Heading',
                component: 'text'
            },
            {
                name: 'video',
                label: 'Video',
                component: 'group',
                fields: [
                    {
                        name: 'src',
                        label: 'src',
                        component: 'text'
                    },
                    {
                        name: 'props',
                        label: 'Props',
                        component: 'text'
                    }
                ]
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
                        label: 'Image',
                        component: 'image'
                    },
                    {
                        name: 'alt',
                        label: 'Alt Text',
                        component: 'text'
                    }
                ]
            }
        ],
    },
}