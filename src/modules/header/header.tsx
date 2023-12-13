import classnames, {
  backgroundColor,
  sizing,
} from "@frontend/tailwindcss-classnames"

export const Header = () => {
  const styles = useStyles()

  return <div className={classnames(styles.root)}>Logo</div>
}

const useStyles = () => {
  return {
    root: classnames(sizing("h-12"), backgroundColor("bg-white")),
  }
}
