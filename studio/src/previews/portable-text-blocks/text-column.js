import React from 'react'

export const TextColumn = ({ value }) => {
  console.log(value)
  return (
    <div
      style={{
        columnCount: value?.columnCount,
        height: `100%`
      }}
      dangerouslySetInnerHTML={{
        __html: value?.body
      }}
    >
    </div>
  )
}
