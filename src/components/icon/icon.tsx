import classnames from "@frontend/tailwindcss-classnames"
import { IconProps, IconType } from "./types"
import { BellIcon, AngleDownIcon, UserIcon, WebsiteIcon } from "./resources"

export const Icon = (props: IconProps) => {
  const { classNames, type } = props

  return <div className={classnames(classNames)}>{getIconByType(type)}</div>
}

const getIconByType = (type: IconType) => {
  switch (type) {
    case "bell":
      return <BellIcon />
    case "angle-down":
      return <AngleDownIcon />
    case "user":
      return <UserIcon />
    case "website":
      return <WebsiteIcon />
    default:
      return <></>
  }
}
