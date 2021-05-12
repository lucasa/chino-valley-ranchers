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
        <div className="relative w-full hidden lg:block h-[95px] -mt-[75px] z-40 bg-cover bg-no-repeat" style={{ backgroundImage: `url('/images/bg-paper-edge-border.png')` }}></div>
        <div className="relative w-full z-40">
            <div className="max-w-xl mx-auto min-h-[200px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <Carousel responsive={responsive} additionalTransfrom={0} arrows={false} autoPlay infinite renderDotsOutside showDots slidesToSlide={1} swipeable>
                            <div className="w-full text-center">Item 1</div>
                            <div className="w-full text-center">Item 2</div>
                            <div className="w-full text-center">Item 3</div>
                            <div className="w-full text-center">Item 4</div>
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
                component: 'text'
            }
        ],
    },
}