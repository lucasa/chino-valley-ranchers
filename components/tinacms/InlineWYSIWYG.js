import React from 'react'
import { useCMS } from 'tinacms'

export function InlineWysiwyg(props) {
  const cms = useCMS()
  const [{ InlineWysiwyg }, setEditor] = React.useState({})

  React.useEffect(() => {
    if (!InlineWysiwyg && cms.enabled) {
      import('react-tinacms-editor').then(setEditor)
    }
    return () => (InlineWysiwyg ? setEditor(null) : null)
  }, [cms.enabled])

  if (InlineWysiwyg) {
    return (
      <InlineWysiwyg {...props}/>
    )
  }

  return props.children
}