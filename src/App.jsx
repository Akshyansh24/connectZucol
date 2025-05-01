import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './pages'
import HomeLayout from './pages/HomeLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<HomeLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
