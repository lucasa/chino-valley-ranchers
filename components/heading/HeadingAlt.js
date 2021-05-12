import { InlineText, InlineTextarea, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

export function HeadingAlt(props) {

    return (
        <div className="relative pb-4 lg:pb-12 bg-repeat-y bg-cover" style={{ backgroundImage: `url('/images/bg-paper.png')` }}>
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-2 px-8 xl:px-0">
                    <BlocksControls index={props.index}>
                        <h4 className="font-ultra uppercase text-gray-900 text-xl lg:text-4xl tracking-wide"><InlineText name="heading" /></h4>
                    </BlocksControls>
                </div>
            </div>
        </div>
    )
}