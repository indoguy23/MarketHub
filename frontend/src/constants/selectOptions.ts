import type { SelectOption } from "@/components/ui/form/Select";

/**
 * General category options.
 *
 * Use these in forms such as:
 * - Create Product
 * - Edit Product
 * - Vendor Product Form
 */
export const CATEGORY_OPTIONS: SelectOption[] = [
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Fashion",
    value: "fashion",
  },
  {
    label: "Books",
    value: "books",
  },
  {
    label: "Home & Kitchen",
    value: "home-kitchen",
  },
];

/**
 * Product table category filter options.
 *
 * Values match the category values currently stored
 * inside PRODUCT_TABLE_DATA.
 */
export const PRODUCT_CATEGORY_FILTER_OPTIONS: SelectOption[] = [
  {
    label: "All Categories",
    value: "",
  },
  {
    label: "Electronics",
    value: "Electronics",
  },
  {
    label: "Fashion",
    value: "Fashion",
  },
  {
    label: "Books",
    value: "Books",
  },
  {
    label: "Home & Kitchen",
    value: "Home & Kitchen",
  },
];

export const STATUS_OPTIONS: SelectOption[] = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Archived",
    value: "archived",
    disabled: true,
  },
];

export const COUNTRY_OPTIONS: SelectOption[] = [
  {
    label: "India",
    value: "IN",
  },
  {
    label: "United States",
    value: "US",
  },
  {
    label: "United Kingdom",
    value: "GB",
  },
];
