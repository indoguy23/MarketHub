import type { ColumnDef } from "@tanstack/react-table";

import Badge from "@/components/ui/Badge";

import type { ProductTableRow } from "../types/productTable.types";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const productTableColumns: ColumnDef<ProductTableRow>[] = [
  {
    accessorKey: "name",
    header: "Product",

    cell: ({ row }) => (
      <div>
        <p className="font-medium text-foreground">{row.original.name}</p>

        <p className="mt-1 text-xs text-muted-foreground">{row.original.id}</p>
      </div>
    ),
  },

  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "price",
    header: "Price",

    cell: ({ row }) => currencyFormatter.format(row.original.price),
  },

  {
    accessorKey: "stock",
    header: "Stock",

    cell: ({ row }) => (
      <span
        className={
          row.original.stock === 0
            ? "font-medium text-destructive"
            : "text-foreground"
        }
      >
        {row.original.stock}
      </span>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",

    cell: ({ row }) => {
      const status = row.original.status;

      if (status === "active") {
        return <Badge variant="success">Active</Badge>;
      }

      if (status === "out-of-stock") {
        return <Badge variant="destructive">Out of Stock</Badge>;
      }

      return <Badge variant="secondary">Draft</Badge>;
    },
  },
];
