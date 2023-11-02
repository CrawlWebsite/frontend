import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { Routes } from "./react-routes/routes"

import { reduxStore } from "./redux/store"

import "./index.css"

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {
    eager: true,
  })

  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes pages={pages} />
      </BrowserRouter>
    </Provider>
  )
}
