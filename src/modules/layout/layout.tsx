import { Header } from "../header"
import { LayoutProps } from "./types"

export const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  )
}
