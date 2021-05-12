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
        <div className={`relative w-full hidden lg:block h-[95px] -mt-[75px] z-40 bg-cover bg-no-repeat ${props.classes}`} style={{ backgroundImage: `url('/images/bg-paper-edge-border.png')` }}></div>
        <div className="relative w-full z-40">
            <div className="max-w-xl mx-auto min-h-[200px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <Carousel responsive={responsive} additionalTransfrom={0} arrows={false} autoPlay infinite renderDotsOutside showDots slidesToSlide={1} swipeable>
                            {props.slides.map( (slide, index) => (
                                <div key={index} className="w-full text-center">{slide.name}</div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
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
                        component: 'image',
                        parse: media => `/static/${media.filename}`,
                        uploadDir: () => '/images/'
                    },
                ],
            }
        ],
    },
}