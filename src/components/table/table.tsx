import { useEffect, useState } from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

export const Table = (props: any) => {
  const [data, setData] = useState(() => [...props.data])

  useEffect(() => {
    setData([...props.data])
  }, [props.data])

  const columnHelper = createColumnHelper<any>()
  const columns = [
    columnHelper.accessor("url", {
      header: () => <span>URL</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("startPage", {
      header: () => <span>Start page</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),
    columnHelper.accessor("endPage", {
      header: () => <span>End page</span>,
      cell: (info) => <span>{info.renderValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: () => <span>Status</span>,
      cell: (info) => <span>{info.renderValue()}</span>,
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  console.log(1111)
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
