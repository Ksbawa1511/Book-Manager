import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import MainContent from './components/MainContent.jsx';
import BookDetails from './components/BookDetails.jsx';
import Cart from './components/Cart.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
) 