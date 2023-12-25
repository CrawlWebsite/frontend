import { Icon } from "@frontend/components/icon"
import classnames, {
  alignItems,
  display,
  fill,
  flexDirection,
  gap,
  group,
  sizing,
  spacing,
  typography,
} from "@frontend/tailwindcss-classnames"
import { Link, useLocation } from "react-router-dom"

export const SideBar = () => {
  const styles = useStyles()
  const location = useLocation()
  console.log(location.pathname)

  const links = [
    { title: "Dashboard", iconType: "bell", url: "/" },
    {
      title: "Users",
      iconType: "bell",
      url: "/user",
      children: [{ title: "Profile", iconType: "bell" }],
    },
  ]

  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.logo)}>LOGO</div>

      <div className={classnames(styles.navigation)}>
        {links.map((link) => {
          if (link?.children) {
            return
          }

          return (
            <Link to={link.url} className={classnames(styles.link)}>
              <Icon
                type={link.iconType}
                classNames={classnames(
                  styles.icon(location.pathname === link.url)
                )}
              />
              <div
                className={classnames(
                  styles.title(location.pathname === link.url)
                )}>
                {link.title}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const useStyles = () => {
  return {
    root: classnames(sizing("w-full")),
    logo: classnames(typography("font-bold", "text-tx22"), spacing("mb-10")),
    navigation: classnames(display("flex"), flexDirection("flex-col")),
    link: classnames(
      display("flex"),
      spacing("py-2"),
      alignItems("items-center"),
      gap("gap-2"),
      group("group")
    ),
    icon: (active: boolean) =>
      classnames(
        sizing("w-6", "h-6"),
        active ? fill("fill-secondary-color") : fill("fill-gray-500"),
        group("group-hover:fill-primary-color")
      ),
    title: (active: boolean) =>
      classnames(
        active
          ? typography("text-secondary-color")
          : typography("text-gray-500"),
        group("group-hover:text-primary-color")
      ),
  }
}
