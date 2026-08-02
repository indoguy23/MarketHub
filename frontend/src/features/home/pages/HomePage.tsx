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
import Form from "@/components/ui/form/Form";
import FormField from "@/components/ui/form/FormField";
import Input from "@/components/ui/form/Input";
import Textarea from "@/components/ui/form/Textarea";

const HomePage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values = Object.fromEntries(formData.entries());

    console.log("Form submitted:", values);
  };

  return (
    <main className="min-h-screen bg-background py-8 text-foreground sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Internal UI Playground
            </p>

            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              MarketHub Design System
            </h1>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              A development playground for testing reusable, responsive and
              theme-aware UI components.
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <ThemeToggle />
          </div>
        </header>

        {/* Button Component */}

        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-card-foreground">
              Button Component
            </h2>

            <p className="mt-2 text-muted-foreground">
              Available button variants, states, sizes and icon support.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button leftIcon={<ShoppingBag className="h-4 w-4" />}>
              Shop Now
            </Button>

            <Button
              variant="secondary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Become Vendor
            </Button>

            <Button variant="outline">View Details</Button>

            <Button variant="ghost">Cancel</Button>

            <Button
              variant="destructive"
              leftIcon={<Trash2 className="h-4 w-4" />}
            >
              Delete Product
            </Button>

            <Button loading>Processing</Button>

            <Button
              size="icon"
              variant="outline"
              aria-label="Open shopping bag"
              title="Open shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Input Component */}

        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-card-foreground">
              Input Component
            </h2>

            <p className="mt-2 text-muted-foreground">
              Reusable single-line inputs with icons, helper text, error states
              and native form attributes.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <FormField
              label="Full Name"
              required
              helperText="Enter your legal name."
              htmlFor="fullName"
            >
              <Input
                id="fullName"
                name="fullName"
                autoComplete="name"
                placeholder="John Doe"
                leftIcon={<User className="h-4 w-4" />}
              />
            </FormField>

            <FormField
              label="Email Address"
              required
              helperText="We'll never share your email."
              htmlFor="emailAddress"
            >
              <Input
                id="emailAddress"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                leftIcon={<Mail className="h-4 w-4" />}
              />
            </FormField>

            <FormField
              label="Search Products"
              helperText="Search by product name, vendor or category."
              htmlFor="productSearch"
            >
              <Input
                id="productSearch"
                name="search"
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
                name="username"
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

            <FormField
              label="Large Input"
              helperText="Example of the large input size."
              htmlFor="largeInput"
            >
              <Input id="largeInput" size="lg" placeholder="Large input size" />
            </FormField>
          </div>
        </section>

        {/* Textarea Component */}

        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-card-foreground">
              Textarea Component
            </h2>

            <p className="mt-2 text-muted-foreground">
              Reusable multiline fields for descriptions, notes and messages.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <FormField
              label="Product Description"
              required
              helperText="Explain the main features and benefits of the product."
              htmlFor="productDescription"
            >
              <Textarea
                id="productDescription"
                name="productDescription"
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
                name="storeDescription"
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
                name="orderNotes"
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
                name="customerReview"
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
                name="fixedMessage"
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

        {/* Form Component */}

        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-card-foreground">
              Form Component
            </h2>

            <p className="mt-2 text-muted-foreground">
              A reusable form layout composed with FormField, Input, Textarea
              and Button.
            </p>
          </div>

          <Form spacing="lg" className="mt-8 max-w-2xl" onSubmit={handleSubmit}>
            <FormField
              label="Full Name"
              required
              helperText="Enter your legal name."
              htmlFor="formFullName"
            >
              <Input
                id="formFullName"
                name="fullName"
                autoComplete="name"
                placeholder="John Doe"
                leftIcon={<User className="h-4 w-4" />}
                required
              />
            </FormField>

            <FormField
              label="Email Address"
              required
              helperText="We'll use this email for account communication."
              htmlFor="formEmail"
            >
              <Input
                id="formEmail"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                leftIcon={<Mail className="h-4 w-4" />}
                required
              />
            </FormField>

            <FormField
              label="Message"
              helperText="Share any information relevant to your request."
              htmlFor="formMessage"
            >
              <Textarea
                id="formMessage"
                name="message"
                placeholder="Write your message..."
              />
            </FormField>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="reset"
                variant="outline"
                fullWidth
                className="sm:w-auto"
              >
                Reset
              </Button>

              <Button type="submit" fullWidth className="sm:w-auto">
                Submit Form
              </Button>
            </div>
          </Form>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
