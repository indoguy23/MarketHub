import { useState } from "react";

import { RotateCcw } from "lucide-react";

import type {
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";

import DataTable, { DataTableViewOptions } from "@/components/common/DataTable";
import SearchBar from "@/components/common/SearchBar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import Select from "@/components/ui/form/Select";

import { PRODUCT_CATEGORY_FILTER_OPTIONS } from "@/constants/selectOptions";

import { PRODUCT_TABLE_DATA } from "../data/productTable.data";
import { productTableColumns } from "./ProductTableColumns";

const DataTablePlayground = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [globalFilter, setGlobalFilter] = useState("");

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const selectedRowCount = Object.keys(rowSelection).length;

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          DataTable Component
        </h2>

        <p className="mt-2 text-muted-foreground">
          Generic, strongly typed tables for marketplace and dashboard data.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {/* Basic Table */}

        <Card>
          <h3 className="font-semibold text-foreground">Product Table</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Base table rendering with sortable typed columns.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={PRODUCT_TABLE_DATA}
              getRowId={(product) => product.id}
            />
          </div>
        </Card>

        {/* Controlled Sorting */}

        <Card>
          <h3 className="font-semibold text-foreground">Controlled Sorting</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Sorting state is controlled by the parent component.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={PRODUCT_TABLE_DATA}
              getRowId={(product) => product.id}
              sorting={sorting}
              onSortingChange={setSorting}
            />
          </div>

          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-foreground">
              Current Sorting State
            </p>

            <pre className="overflow-x-auto rounded-xl bg-muted p-4 text-xs text-muted-foreground">
              {JSON.stringify(sorting, null, 2)}
            </pre>
          </div>
        </Card>

        {/* Row Selection */}

        <Card>
          <h3 className="font-semibold text-foreground">Row Selection</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Select individual rows or use the header checkbox to select all
            visible rows.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={PRODUCT_TABLE_DATA}
              getRowId={(product) => product.id}
              enableRowSelection
              rowSelection={rowSelection}
              onRowSelectionChange={setRowSelection}
            />
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Selected rows:{" "}
              <strong className="text-foreground">{selectedRowCount}</strong>
            </p>

            <pre className="overflow-x-auto rounded-xl bg-muted p-4 text-xs text-muted-foreground">
              {JSON.stringify(rowSelection, null, 2)}
            </pre>
          </div>
        </Card>

        {/* Sorting + Selection */}

        <Card>
          <h3 className="font-semibold text-foreground">
            Sorting + Row Selection
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Sorting and selection can work together in the same table.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={PRODUCT_TABLE_DATA}
              getRowId={(product) => product.id}
              sorting={sorting}
              onSortingChange={setSorting}
              enableRowSelection
              rowSelection={rowSelection}
              onRowSelectionChange={setRowSelection}
            />
          </div>
        </Card>

        {/* Column Visibility */}

        <Card>
          <h3 className="font-semibold text-foreground">Column Visibility</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Users can choose which optional columns are visible.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={PRODUCT_TABLE_DATA}
              getRowId={(product) => product.id}
              columnVisibility={columnVisibility}
              onColumnVisibilityChange={setColumnVisibility}
              toolbar={(table) => <DataTableViewOptions table={table} />}
            />
          </div>

          <div className="mt-5">
            <p className="mb-2 text-sm font-medium text-foreground">
              Current Column Visibility State
            </p>

            <pre className="overflow-x-auto rounded-xl bg-muted p-4 text-xs text-muted-foreground">
              {JSON.stringify(columnVisibility, null, 2)}
            </pre>
          </div>
        </Card>

        {/* Search + Column Filter */}

        <Card>
          <h3 className="font-semibold text-foreground">Search & Filters</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Combine global search, category filtering and column visibility.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={PRODUCT_TABLE_DATA}
              getRowId={(product) => product.id}
              globalFilter={globalFilter}
              onGlobalFilterChange={setGlobalFilter}
              columnFilters={columnFilters}
              onColumnFiltersChange={setColumnFilters}
              columnVisibility={columnVisibility}
              onColumnVisibilityChange={setColumnVisibility}
              toolbar={(table) => {
                const categoryColumn = table.getColumn("category");

                const categoryValue =
                  (categoryColumn?.getFilterValue() as string) ?? "";

                const hasFilters =
                  Boolean(table.getState().globalFilter) ||
                  table.getState().columnFilters.length > 0;

                return (
                  <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <SearchBar
                      value={(table.getState().globalFilter as string) ?? ""}
                      onChange={(value) => table.setGlobalFilter(value)}
                      placeholder="Search products..."
                      className="w-full lg:max-w-sm"
                    />

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <div className="w-full sm:w-56">
                        <Select
                          value={categoryValue}
                          onChange={(event) => {
                            const value = event.target.value;

                            categoryColumn?.setFilterValue(value || undefined);
                          }}
                          options={PRODUCT_CATEGORY_FILTER_OPTIONS}
                        />
                      </div>

                      {hasFilters && (
                        <Button
                          variant="ghost"
                          leftIcon={<RotateCcw className="h-4 w-4" />}
                          onClick={() => {
                            table.setGlobalFilter("");
                            table.resetColumnFilters();
                          }}
                        >
                          Reset
                        </Button>
                      )}

                      <DataTableViewOptions table={table} />
                    </div>
                  </div>
                );
              }}
            />
          </div>

          <div className="mt-5 space-y-2">
            <p className="text-sm text-muted-foreground">
              Current search:{" "}
              <strong className="text-foreground">
                {globalFilter || "Empty"}
              </strong>
            </p>

            <p className="text-sm text-muted-foreground">
              Active column filters:{" "}
              <strong className="text-foreground">
                {columnFilters.length}
              </strong>
            </p>
          </div>
        </Card>

        {/* Loading State */}

        <Card>
          <h3 className="font-semibold text-foreground">Loading State</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Skeleton rows are displayed while table data is loading.
          </p>

          <div className="mt-6">
            <DataTable columns={productTableColumns} data={[]} loading />
          </div>
        </Card>

        {/* Empty State */}

        <Card>
          <h3 className="font-semibold text-foreground">Empty State</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Custom empty content can be provided when no rows are available.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={[]}
              emptyState={
                <EmptyState
                  className="border-0 py-14"
                  title="No products found"
                  description="Products matching your current criteria will appear here."
                />
              }
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DataTablePlayground;
