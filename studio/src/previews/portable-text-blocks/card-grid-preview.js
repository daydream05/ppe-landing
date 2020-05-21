import React from 'react'

export const CardGridPreview = ({ value }) => {
  const { cards } = value

  if(!cards) {
    return (
      <div>No cards.</div>
    )
  }
  return (
    <div>
      {cards?.length > 0 && cards.map((card) => {
        return (
          <div key={card._key} style={{ padding: `0 16px` }}>
            <p>{card.heading?.text}</p>
          </div>
        )
      })}
    </div>
  )
}