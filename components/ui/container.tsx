interface ContainerProps {
    children:React.ReactNode
}


import React from 'react'

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='mx-auto max-w-7xl ' >
        {children}
    </div>
  )
}

export default Container