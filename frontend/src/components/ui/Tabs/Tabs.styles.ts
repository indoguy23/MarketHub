import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  ["inline-flex", "items-center", "rounded-xl", "bg-muted", "p-1", "gap-1"],
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-12",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const tabsTriggerVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "px-4",
    "text-sm",
    "font-medium",
    "transition-all",
    "duration-200",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "data-[state=active]:bg-card",
    "data-[state=active]:text-foreground",
    "data-[state=active]:shadow-sm",

    "text-muted-foreground",
  ],
  {
    variants: {
      size: {
        sm: "h-7",
        md: "h-8",
        lg: "h-10",
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
);

export const tabsContentStyles = "mt-6 outline-none";
