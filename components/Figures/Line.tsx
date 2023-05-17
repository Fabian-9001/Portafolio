import React from 'react'

export interface IFigureLine extends React.ComponentPropsWithoutRef<'svg'> {
  className?: string
}

const Line: React.FC<IFigureLine> = ({ className, ...figureProps }) => {
  return (
    <svg
      {...figureProps}
      className={`${className}`}
      width='106'
      height='632'
      viewBox='0 0 106 632'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 1L55 74V562L124.5 631.5' stroke='#310050' />
    </svg>
  )
}

export default Line
