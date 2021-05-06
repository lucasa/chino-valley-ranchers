import Image from 'next/image'

export function HeadingPaperEdge(props) {

    const {content} = props

    return(

        <div className="relative pt-8 -top-12 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${content.image})` }}>
            <div className="max-w-7xl mx-auto">

                {/* Page Heading */}
                <div className="text-center z-50 py-24 max-w-5xl mx-auto px-8 lg:px-0">
                    <h1 className="text-3xl lg:text-7xl text-chinored font-ultra uppercase tracking-wide lg:mb-4">{content.heading}</h1>
                    <p className="font-lato lg:text-3xl tracking-wide">{content.subheading}</p>
                </div>

            </div>
        </div>

    )

}