import { useEffect } from 'react';

import { CrawlerController } from '@frontend/handlers/crawler';
import { useReduxSelector, useReduxDispatch } from '@frontend/redux/hooks';
import { PageHeader } from '@frontend/modules/page-header';
import { PAGE_LINKS } from '@frontend/react-routes/permissionLink';
import { Table } from '@frontend/components/table';
import classnames, {
  backgroundColor,
  borderRadius,
  sizing,
  spacing,
  typography,
} from '@frontend/tailwindcss-classnames';
import { createColumnHelper } from '@tanstack/react-table';

export const Crawler = () => {
  const crawlerController = CrawlerController.getInstance();
  const { crawlerState } = useReduxSelector(['crawlerState']);
  const dispatch = useReduxDispatch();
  const styles = useStyles();

  useEffect(() => {
    dispatch(crawlerController.getCrawlProcessByUser({}));
  }, []);

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor('url', {
      header: () => <span className={styles.headerCell}>URL</span>,
      cell: info => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor('startPage', {
      header: () => <span className={styles.headerCell}>Start page</span>,
      cell: info => <span>{info.getValue()}</span>,
      meta: {
        getCellClassNames: () => {
          return styles.pageCell;
        },
      },
    }),
    columnHelper.accessor('endPage', {
      header: () => <span className={styles.headerCell}>End page</span>,
      cell: info => <span>{info.renderValue()}</span>,
      meta: {
        getCellClassNames: () => {
          return styles.pageCell;
        },
      },
    }),
    columnHelper.accessor('status', {
      header: () => <span className={styles.headerCell}>Status</span>,
      cell: info => <span>{info.renderValue()}</span>,
      meta: {
        getCellClassNames: () => {
          return styles.pageCell;
        },
      },
    }),
    columnHelper.accessor('action', {
      header: () => <span className={styles.headerCell}>Action</span>,
      cell: () => <span></span>,
    }),
  ];

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

        <Table
          columns={columns}
          data={
            crawlerState.crawlerProcesses ?? [
              {
                url: 'http://localhost',
                startPage: 1,
                endPage: 6,
                status: 'created',
              },
              {
                url: 'http://localhost',
                startPage: 1,
                endPage: 6,
                status: 'created',
              },
              {
                url: 'http://localhost',
                startPage: 1,
                endPage: 6,
                status: 'created',
              },
              {
                url: 'http://localhost',
                startPage: 1,
                endPage: 6,
                status: 'created',
              },
              {
                url: 'http://localhost',
                startPage: 1,
                endPage: 6,
                status: 'created',
              },
              {
                url: 'http://localhost',
                startPage: 1,
                endPage: 6,
                status: 'created',
              },
            ]
          }
          headerClassnames={styles.tableHeader}
          rowClassnames={styles.tableRow}
        />
      </div>
    </div>
  );
};

const useStyles = () => {
  return {
    header: classnames(spacing('mb-3')),
    content: classnames(
      backgroundColor('bg-white'),
      spacing('p-3'),
      borderRadius('rounded-xl'),
    ),
    contentHeader: classnames(spacing('mb-5')),
    contentTitle: classnames(typography('text-tx22', 'font-semibold')),
    tableHeader: classnames(backgroundColor('bg-gray-1'), sizing('h-10')),
    tableRow: classnames(sizing('h-10'), backgroundColor('hover:bg-gray-50')),

    headerCell: classnames(typography('text-gray-2')),
    pageCell: classnames(typography('text-center')),
  };
};
