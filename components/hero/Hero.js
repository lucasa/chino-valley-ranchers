import Image from 'next/image'

export function Hero(props) {

    const {image, heading} = props

    return(

        <div className="relative overflow-hidden lg:overflow-visible z-40 lg:z-0 w-full min-h-[300px] lg:min-h-[516px] flex items-center">
            <div className="absolute w-full min-h-[300px] lg:min-h-[516px]">
                <Image
                    src={image}
                    className="h-full w-full object-cover min-h-[300px] lg:min-h-[516px]"
                    layout="fill"
                    alt="Chino Valley Ranchers"
                />
            </div>

            <div className="max-w-5xl mx-auto z-40 text-center">
                <h1 className="text-3xl lg:text-7xl text-white font-ultra uppercase tracking-wide">{heading}</h1>
            </div>
        </div>

    )

}