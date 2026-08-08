import DataTable from "@/components/common/DataTable";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";

import { PRODUCT_TABLE_DATA } from "../data/productTable.data";
import { productTableColumns } from "./ProductTableColumns";

const DataTablePlayground = () => {
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
        <Card>
          <h3 className="font-semibold text-foreground">Product Table</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Base table rendering with custom typed columns.
          </p>

          <div className="mt-6">
            <DataTable
              columns={productTableColumns}
              data={PRODUCT_TABLE_DATA}
              getRowId={(product) => product.id}
            />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Loading State</h3>

          <div className="mt-6">
            <DataTable columns={productTableColumns} data={[]} loading />
          </div>
        </Card>

        <Card>
          <h3 className="font-semibold text-foreground">Empty State</h3>

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
