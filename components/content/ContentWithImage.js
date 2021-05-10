import Image from 'next/image'

import { Button } from '../button/Button'

export function ContentWithImage(props) {

    const {content} = props

    return(

        <div className="relative pt-8 -top-24 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${content.background})` }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 pt-12 lg:pt-36 pb-12 lg:pb-24">

                    <div className="col-span-12 lg:col-span-8 text-center lg:text-left px-8 xl:px-0">
                        <h3 className="text-3xl lg:text-7xl text-chinored font-ultra uppercase tracking-wide lg:mb-4">{content.content.heading}</h3>
                        <div className="pb-16">
                        {content.content.text.map((paragraph, index) => (
                            <p key={index} className="font-lato lg:text-3xl tracking-wide">{paragraph}</p>
                        ))}
                        </div>
                        {content.content.button && (
                            <Button button={content.content.button} />
                        )}
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="overflow-hidden w-full h-full relative">
                            <Image
                                src={content.image.src}
                                className="h-full w-full object-cover"
                                objectFit="contain"
                                layout="fill"
                                alt={content.image.alt}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )

}