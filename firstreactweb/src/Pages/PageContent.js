import React from 'react'
import { routes } from '../components/Routes'
import { RouterProvider } from 'react-router-dom'

const PageContent = () => {
  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  )
}

export default PageContent