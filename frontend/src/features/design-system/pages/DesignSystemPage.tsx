import {
  AlertPlayground,
  AvatarPlayground,
  BadgePlayground,
  BreadcrumbPlayground,
  ButtonPlayground,
  CardPlayground,
  CartPlayground,
  CheckboxPlayground,
  DashboardLayoutPlayground,
  DataTablePlayground,
  DesignSystemHeader,
  DialogPlayground,
  DividerPlayground,
  DropdownMenuPlayground,
  FileUploadPlayground,
  FormPlayground,
  InputPlayground,
  LoaderPlayground,
  NavbarPlayground,
  PaginationPlayground,
  ProductCardPlayground,
  ProductDetailsPlayground,
  ProductFiltersPlayground,
  ProductImageGalleryPlayground,
  ProductListingPlayground,
  RadioGroupPlayground,
  SearchBarPlayground,
  SelectPlayground,
  SidebarPlayground,
  SkeletonPlayground,
  StatCardPlayground,
  SwitchPlayground,
  TabsPlayground,
  TextareaPlayground,
  TooltipPlayground,
} from "../components";
import EmptyStatePlayground from "../components/EmptyStatePlayground";

const DesignSystemPage = () => {
  return (
    <main className="min-h-screen bg-background py-8 text-foreground sm:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <DesignSystemHeader />
        <ButtonPlayground />
        <CardPlayground />
        <BadgePlayground />
        <AlertPlayground />
        <EmptyStatePlayground />
        <AvatarPlayground />
        <DividerPlayground />
        <BreadcrumbPlayground />
        <TabsPlayground />
        <DialogPlayground />
        <TooltipPlayground />
        <DropdownMenuPlayground />
        <LoaderPlayground />
        <SkeletonPlayground />
        <SearchBarPlayground />
        <PaginationPlayground />
        <ProductCardPlayground />
        <ProductFiltersPlayground />
        <ProductListingPlayground />
        <NavbarPlayground />
        <SidebarPlayground />
        <DashboardLayoutPlayground />
        <StatCardPlayground />
        <FileUploadPlayground />
        <ProductImageGalleryPlayground />
        <ProductDetailsPlayground />
        <CartPlayground />
        <DataTablePlayground />
        <InputPlayground />
        <TextareaPlayground />
        <SelectPlayground />
        <CheckboxPlayground />
        <RadioGroupPlayground />
        <SwitchPlayground />
        <FormPlayground />
      </div>
    </main>
  );
};

export default DesignSystemPage;
