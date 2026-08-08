import type { ReactNode } from "react";

import type {
  ColumnDef,
  RowSelectionState,
  SortingState,
  Table,
  VisibilityState,
} from "@tanstack/react-table";

export interface DataTableProps<TData, TValue = unknown> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  loading?: boolean;
  emptyState?: ReactNode;

  getRowId?: (row: TData, index: number) => string;

  className?: string;
  tableClassName?: string;

  sorting?: SortingState;

  onSortingChange?: (sorting: SortingState) => void;

  rowSelection?: RowSelectionState;

  onRowSelectionChange?: (selection: RowSelectionState) => void;

  enableRowSelection?: boolean;

  columnVisibility?: VisibilityState;

  onColumnVisibilityChange?: (visibility: VisibilityState) => void;

  toolbar?: (table: Table<TData>) => ReactNode;
}
