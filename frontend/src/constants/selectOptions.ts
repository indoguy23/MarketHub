import type { SelectOption } from "@/components/ui/form/Select";

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
