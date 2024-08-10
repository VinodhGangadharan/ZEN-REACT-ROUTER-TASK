import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullStackDevelopment from "./FullStackDevelopment";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Blog from "./Blog";
import All from "./All";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
    children: [
   
      {
        path: "",
        element: <All/>
      },
      {
        path: "fullstackdevelopment",
        element: <FullStackDevelopment />,
        //loader: notesLoader
      },
      {
        path: "datascience",
        element: <DataScience />,
        //loader: notesLoader
      },
      {
        path: "cybersecurity",
        element: <CyberSecurity />,
        //loader: usersLoader
      },
    ]
  }
])

function App() {
  //const [count, setCount] = useState(0)

  

  return (
    <>
 {/*<FullStackDevelopment/>*/}
 {/*<DataScience/>*/}
 {/*<CyberSecurity/>*/}
 <RouterProvider router={router} />
    </>
  )
}

export default App
