import classnames, {
  backgroundColor,
  sizing,
} from "@frontend/tailwindcss-classnames"

export const Navigation = () => {
  const styles = useStyles()

  return <div className={classnames(styles.root)}></div>
}

const useStyles = () => {
  return {
    root: classnames(sizing("h-8"), backgroundColor("bg-gray-300")),
  }
}
