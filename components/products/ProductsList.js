import { useState } from 'react'
import Image from 'next/image'
import { InlineTextarea, InlineImage, BlocksControls } from 'react-tinacms-inline'

import { useProductsContext } from '../../context/products'
import { Button } from '../../components/button/Button'

export function ProductsList(props) {

    //const {products, background} = props

    const productsContext = useProductsContext()
    const [products, setProducts] = useState(productsContext)

    if (products) {

        const parsedProducts = products.map(product => JSON.parse(product.content))
        parsedProducts.sort(function (a, b) {
            return a.order - b.order;
        });

    return(

        <div className="relative -top-12">
                {parsedProducts.map((product, index) => (
                    <div key={index} className="relative bg-repeat-y bg-cover" style={{ backgroundImage: `url('/images/bg-paper.png')` }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-12 lg:gap-8 pb-24 lg:pb-32 px-8 xl:px-0 overflow-hidden">
                                <div className="col-span-12 lg:col-span-5">
                                    <h3 className="font-ultra text-2xl lg:text-5xl text-center lg:text-left text-gray-900 mb-2 lg:mb-12 tracking-wide uppercase">{product.name}</h3>
                                    <p className="font-lato text-gray-900 tracking-wide mb-8 lg:mb-24 text-xl lg:text-3xl text-center lg:text-left">{product.description}</p>
                                </div>
                                <div className="col-span-12 lg:col-span-7 relative h-[128px] lg:h-full">
                                    <div className="lg:absolute z-0 min-h-full w-full mb-8 lg:mb-0">
                                        <Image
                                            src={product.photo.src}
                                            className="h-full w-full object-cover"
                                            objectFit="contain"
                                            layout="fill"
                                            alt={product.photo.alt}
                                        />
                                    </div>

                                    {/* Button */}
                                    <div className="lg:absolute lg:bottom-0 lg:right-0 text-center">
                                        <Button button={product.button} />
                                    </div>
                                </div>
                                {/* Border */}
                                <div className="col-span-12 pt-24 lg:pt-8 lg:relative lg:bottom-0">
                                    <Image
                                        src="/images/product-border.png"
                                        height={7}
                                        width={1337}
                                        alt="Border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )

    } else {

        return(

            <div className="relative -top-12">
                    {props.data.products.map((product, index) => (
                        <div key={index} className="relative bg-repeat-y bg-cover" style={{ backgroundImage: `url('/images/bg-paper.png')` }}>
                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-12 lg:gap-8 pb-24 lg:pb-32 px-8 xl:px-0 overflow-hidden">
                                    <div className="col-span-12 lg:col-span-5">
                                        <h3 className="font-ultra text-2xl lg:text-5xl text-center lg:text-left text-gray-900 mb-2 lg:mb-12 tracking-wide uppercase">{product.name}</h3>
                                        <p className="font-lato text-gray-900 tracking-wide mb-8 lg:mb-24 text-xl lg:text-3xl text-center lg:text-left">{product.description}</p>
                                    </div>
                                    <div className="col-span-12 lg:col-span-7 relative h-[128px] lg:h-full">
                                        <div className="lg:absolute z-0 min-h-full w-full mb-8 lg:mb-0">
                                            <Image
                                                src={product.photo.src}
                                                className="h-full w-full object-cover"
                                                objectFit="contain"
                                                layout="fill"
                                                alt={product.photo.alt}
                                            />
                                        </div>

                                        {/* Button */}
                                        <div className="lg:absolute lg:bottom-0 lg:right-0 text-center">
                                            <Button button={product.button} />
                                        </div>
                                    </div>
                                    {/* Border */}
                                    <div className="col-span-12 pt-24 lg:pt-8 lg:relative lg:bottom-0">
                                        <Image
                                            src="/images/product-border.png"
                                            height={7}
                                            width={1337}
                                            alt="Border"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            )

    }



}

export const productsBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <ProductsList data={data} />
      </BlocksControls>
    ),
    template: {
        label: 'Product List',
        defaultItem: {},
        fields: [],
    },
}