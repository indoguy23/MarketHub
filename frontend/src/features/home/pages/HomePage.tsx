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
import Textarea from "@/components/ui/form/Textarea/Textarea";

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
        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-card-foreground">
            Textarea Component
          </h2>

          <p className="mt-2 text-muted-foreground">
            Reusable multiline fields for descriptions, notes and messages.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <FormField
              label="Product Description"
              required
              helperText="Explain the main features and benefits of the product."
              htmlFor="productDescription"
            >
              <Textarea
                id="productDescription"
                placeholder="Enter a detailed product description..."
              />
            </FormField>

            <FormField
              label="Store Description"
              helperText="Tell customers about your business."
              htmlFor="storeDescription"
            >
              <Textarea
                id="storeDescription"
                size="lg"
                placeholder="Write something about your store..."
              />
            </FormField>

            <FormField
              label="Order Notes"
              helperText="Optional delivery or packaging instructions."
              htmlFor="orderNotes"
            >
              <Textarea
                id="orderNotes"
                size="sm"
                placeholder="Add order instructions..."
              />
            </FormField>

            <FormField
              label="Customer Review"
              error="The review must contain at least 20 characters."
              htmlFor="customerReview"
            >
              <Textarea
                id="customerReview"
                invalid
                placeholder="Share your experience..."
              />
            </FormField>

            <FormField
              label="Fixed Size Message"
              helperText="This field cannot be resized."
              htmlFor="fixedMessage"
            >
              <Textarea
                id="fixedMessage"
                resize="none"
                placeholder="Write your message..."
              />
            </FormField>

            <FormField
              label="Disabled Description"
              htmlFor="disabledDescription"
            >
              <Textarea
                id="disabledDescription"
                value="This description cannot currently be edited."
                disabled
                readOnly
              />
            </FormField>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
