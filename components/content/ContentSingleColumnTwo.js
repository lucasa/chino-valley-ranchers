import Image from 'next/image'

import { Button } from '../../components/button/Button'

export function ContentSingleColumnTwo(props) {

    const {content} = props

    return(
        <div>
            <div className="relative pt-8 -top-48 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${content.background})` }}>
            </div>

                    {content.content.map((block, index) => (
                        <div key={index} className="relative -top-48 pb-4 lg:pb-12 bg-repeat-y bg-cover" style={{ backgroundImage: `url(${content.background_bottom})` }}>
                        <div className="max-w-5xl mx-auto text-center">
                        <div className="mb-2 px-8 xl:px-0">
                            {block.image && (
                                <div className="px-8 text-center">
                                    <Image
                                        src={block.image.src}
                                        height={320}
                                        width={814}
                                        alt={block.image.alt}
                                    />
                                </div>
                            )}
                            {block.heading && (
                                <h4 className="font-ultra uppercase text-gray-900 text-xl lg:text-4xl tracking-wide">{block.heading}</h4>
                            )}
                            {block.subheading && (
                                <p className="text-xl lg:text-3xl text-gray-900 tracking-wide">{block.subheading}</p>
                            )}

                            {block.button && (
                                <div className="text-center py-8 lg:py-16">
                                    <Button button={block.button} />
                                </div>
                            )}

                        </div>
                        </div>
                        </div>
                    ))}
        </div>

    )

}