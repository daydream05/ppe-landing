import React from 'react'
import { blocksToText } from '../../lib/helpers'

export const SectionPreview = ({ value }) => {
  console.log(value)
  return (
    <section
      style={{
        padding: `8px`,
      }}
    >
      <h2>{value.title}</h2>
      {value.body && (
        <div>
          <p>{blocksToText(value.body)}</p>
        </div>
      )}
    </section>
  )
}