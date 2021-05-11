import { InlineText, InlineTextarea, InlineImage, BlocksControls, InlineGroup } from 'react-tinacms-inline'

export function Paragraph(props) {

    return (
        <BlocksControls index={props.index}>
            <p className="font-lato lg:text-3xl tracking-wide"><InlineTextarea name="text" /></p>
        </BlocksControls>
    )
}

/*export const paragraphBlock = {
    Component: ({ index, data }) => (
      <BlocksControls index={index}>
        <Paragraph />
      </BlocksControls>
    ),
    template: {
        label: 'Paragraph',
        defaultItem: {
            text: 'Some paragraph here.'
        },
        fields: [

        ],
    },
}*/