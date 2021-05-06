export function EditLink(props) {

    const {cms} = props

    return(
        <div className="fixed bottom-0 w-full bg-grey-300 z-50">
            <button onClick={() => cms.toggle()}>
                {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
            </button>
        </div>

    )

}