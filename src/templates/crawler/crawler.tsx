import { useEffect, useState } from "react"

import { CrawlerController } from "@frontend/handlers/crawler"
import { useReduxSelector, useReduxDispatch } from "@frontend/redux/hooks"
import { PageHeader } from "@frontend/modules/page-header"
import { PAGE_LINKS } from "@frontend/react-routes/permissionLink"
import { Table } from "@frontend/components/table"
import classnames, {
  backgroundColor,
  borderRadius,
  spacing,
  typography,
} from "@frontend/tailwindcss-classnames"

export const Crawler = () => {
  const crawlerController = CrawlerController.getInstance()
  const { crawlerState } = useReduxSelector(["crawlerState"])
  const dispatch = useReduxDispatch()
  const styles = useStyles()

  useEffect(() => {
    dispatch(crawlerController.getCrawlProcessByUser({}))
  }, [])

  console.log({ crawlerState })

  return (
    <div>
      <div className={classnames(styles.header)}>
        <PageHeader title={PAGE_LINKS.CRAWLER.title} />
      </div>

      <div className={classnames(styles.content)}>
        <div className={classnames(styles.contentHeader)}>
          <div className={classnames(styles.contentTitle)}>
            List Crawler Processes
          </div>
        </div>

        <Table data={crawlerState.crawlerProcesses ?? []} />
      </div>
    </div>
  )
}

const useStyles = () => {
  return {
    header: classnames(spacing("mb-3")),
    content: classnames(
      backgroundColor("bg-white"),
      spacing("p-3"),
      borderRadius("rounded-xl")
    ),
    contentHeader: classnames(spacing("mb-2")),
    contentTitle: classnames(typography("text-tx22")),
  }
}
