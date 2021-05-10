import Image from 'next/image'

export function ContentSingleColumn(props) {

    const {content} = props

    return(

        <div className="relative pt-8 -top-36 pb-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${content.background})` }}>
            <div className="max-w-5xl mx-auto pt-8 lg:pt-32 text-center">

                {content.content.map((block, index) => (
                    <div key={index} className="mb-12 lg:mb-24 px-8 xl:px-0">
                        <h4 className="font-ultra uppercase text-chinoyellow text-3xl lg:text-6xl tracking-wide mb-4">{block.heading}</h4>
                        <p className="text-xl lg:text-3xl text-white tracking-wide">{block.subheading}</p>
                    </div>
                ))}

            </div>
        </div>

    )

}