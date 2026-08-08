/* eslint-disable react-hooks/incompatible-library */

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";

// rest of the file...

import { useState } from "react";

import EmptyState from "@/components/ui/EmptyState";
import { cn } from "@/utils/cn";

import { dataTableStyles } from "./DataTable.styles";
import DataTableSkeleton from "./DataTableSkeleton";
import type { DataTableProps } from "./DataTable.types";

const DataTable = <TData, TValue = unknown>({
  columns,
  data,
  loading = false,
  emptyState,
  getRowId,
  className,
  tableClassName,
  sorting,
  onSortingChange,
}: DataTableProps<TData, TValue>) => {
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);

  const resolvedSorting = sorting ?? internalSorting;

  const handleSortingChange = (
    updater: SortingState | ((old: SortingState) => SortingState),
  ) => {
    const nextSorting =
      typeof updater === "function" ? updater(resolvedSorting) : updater;

    if (onSortingChange) {
      onSortingChange(nextSorting);
      return;
    }

    setInternalSorting(nextSorting);
  };

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting: resolvedSorting,
    },

    onSortingChange: handleSortingChange,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),

    getRowId: getRowId ? (row, index) => getRowId(row, index) : undefined,
  });

  const headerGroups = table.getHeaderGroups();

  const rows = table.getRowModel().rows;

  return (
    <div className={cn(dataTableStyles.container, className)}>
      <div className={dataTableStyles.scrollArea}>
        <table className={cn(dataTableStyles.table, tableClassName)}>
          <thead className={dataTableStyles.header}>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} className={dataTableStyles.headerRow}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    scope="col"
                    className={dataTableStyles.headerCell}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className={dataTableStyles.body}>
            {loading ? (
              <DataTableSkeleton columnCount={columns.length} />
            ) : rows.length > 0 ? (
              rows.map((row) => (
                <tr key={row.id} className={dataTableStyles.row}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={dataTableStyles.cell}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className={dataTableStyles.emptyCell}
                >
                  {emptyState ?? (
                    <EmptyState
                      className="border-0 py-14"
                      title="No data available"
                      description="There are currently no records to display."
                    />
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
