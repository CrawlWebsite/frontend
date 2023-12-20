import classnames, {
  backgroundColor,
  sizing,
} from "@frontend/tailwindcss-classnames"
import { display } from "tailwindcss-classnames"

export const Header = () => {
  const styles = useStyles()

  return (
    <div className={classnames(styles.root)}>
      <div>Logo</div>
      <div>Name</div>
    </div>
  )
}

const useStyles = () => {
  return {
    root: classnames(
      sizing("h-14"),
      backgroundColor("bg-white"),
      display("flex")
    ),
  }
}
