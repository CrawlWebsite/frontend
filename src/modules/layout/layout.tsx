import { Header } from "@frontend/modules/header"
import { Navigation } from "@frontend/modules/navigation"
import { LayoutProps } from "./types"

export const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <Navigation />
      <div>{props.children}</div>
    </div>
  )
}
