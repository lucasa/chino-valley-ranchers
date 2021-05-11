import { InlineText, InlineTextarea, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

export function ImageAlt(props) {

    return (
        <div key={index} className="relative -top-48 pb-4 lg:pb-12 bg-repeat-y bg-cover" style={{ backgroundImage: `url('/images/bg-paper.png')` }}>
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-2 px-8 xl:px-0">
                    <BlocksControls index={props.index}>
                        <div className="px-8 text-center">
                            <InlineImage
                                src="image.src"
                                parse={media => media.id}
                                uploadDir={() => '/images/'}
                                alt="image.alt"
                            />
                        </div>
                    </BlocksControls>
                </div>
            </div>
        </div>
    )
}