import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import NotFound from './screens/404.tsx'
import Login from './screens/Login.tsx'
import Tables from './screens/Tables.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/mesas',
    element: <Tables />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
