import React from 'react'

interface TitleProps {
    title_text : string
}

const Title:React.FC<TitleProps> = ({title_text}) => {
  return (
    <div className='py-6 text-center'>
        <h1 className='text-3xl text-primary'>✨ {title_text}</h1>
    </div>
  )
}

export default Title