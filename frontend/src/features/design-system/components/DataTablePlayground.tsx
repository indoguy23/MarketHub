import { useState } from "react";

import type { SortingState } from "@tanstack/react-table";

import DataTable from "@/components/common/DataTable";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";

import { PRODUCT_TABLE_DATA } from "../data/productTable.data";
import { productTableColumns } from "./ProductTableColumns";

const DataTablePlayground = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

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
