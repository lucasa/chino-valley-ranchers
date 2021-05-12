import { InlineText, InlineTextarea, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

export function ButtonAlt(props) {

    console.log(props)

    return (
        <div className="relative pb-4 lg:pb-12 bg-repeat-y bg-cover" style={{ backgroundImage: `url('/images/bg-paper.png')` }}>
            <div className="max-w-5xl mx-auto text-center">
                <div className="mb-2 px-8 xl:px-0">
                    <BlocksControls index={props.index}>
                        <div className="text-center py-8 lg:py-16">
                            <a href={props.data.blocks[props.index].button.link} className="px-5 py-2 bg-chinored text-white uppercase font-din font-bold text-xl lg:text-4xl rounded-lg tracking-wide">{props.data.blocks[props.index].button.text}</a>
                        </div>
                    </BlocksControls>
                </div>
            </div>
        </div>
    )
}