import React from 'react'

export const ColumnsRender = props => {
  console.log(props.children)
  return (
    <div style={{ columnCount: props?.count }}>{props.children}</div>
  )
}
