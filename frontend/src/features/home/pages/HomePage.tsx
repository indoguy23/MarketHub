import {
  ArrowRight,
  Mail,
  Search,
  ShoppingBag,
  Trash2,
  User,
} from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/form/FormField";
import Input from "@/components/ui/form/Input";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              MarketHub Design System
            </h1>

            <p className="mt-2 text-muted-foreground">
              Playground for all reusable UI components.
            </p>
          </div>

          <ThemeToggle />
        </div>

        {/* Buttons */}
        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-card-foreground">
            Button Component
          </h2>

          <p className="mt-2 text-muted-foreground">
            All available button variants and sizes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button leftIcon={<ShoppingBag size={18} />}>Shop Now</Button>

            <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>
              Become Vendor
            </Button>

            <Button variant="outline">View Details</Button>

            <Button variant="ghost">Cancel</Button>

            <Button variant="destructive" leftIcon={<Trash2 size={18} />}>
              Delete Product
            </Button>

            <Button loading>Processing</Button>

            <Button size="icon" variant="outline" aria-label="Shopping Bag">
              <ShoppingBag size={20} />
            </Button>
          </div>
        </section>

        {/* FormField */}
        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-card-foreground">
            FormField Component
          </h2>

          <p className="mt-2 text-muted-foreground">
            Temporary preview using native inputs. These will be replaced with
            our reusable Input component in the next step.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FormField
              label="Full Name"
              required
              helperText="Enter your legal name."
              htmlFor="fullName"
            >
              <Input
                id="fullName"
                placeholder="John Doe"
                leftIcon={<User className="h-4 w-4" />}
              />
            </FormField>

            <FormField
              label="Email Address"
              required
              helperText="We'll never share your email."
              htmlFor="email"
            >
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                leftIcon={<Mail className="h-4 w-4" />}
              />
            </FormField>

            <FormField
              label="Search Products"
              helperText="Search by product name or category."
              htmlFor="productSearch"
            >
              <Input
                id="productSearch"
                type="search"
                placeholder="Search products..."
                leftIcon={<Search className="h-4 w-4" />}
              />
            </FormField>

            <FormField
              label="Username"
              error="This username is already in use."
              htmlFor="username"
            >
              <Input
                id="username"
                placeholder="aryan_dev"
                invalid
                aria-describedby="username-error"
              />
            </FormField>

            <FormField label="Disabled Field" htmlFor="disabledField">
              <Input
                id="disabledField"
                value="This field is disabled"
                disabled
                readOnly
              />
            </FormField>

            <FormField label="Large Input" htmlFor="largeInput">
              <Input id="largeInput" size="lg" placeholder="Large input size" />
            </FormField>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
