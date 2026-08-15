import {
  AddressPlayground,
  AlertPlayground,
  AvatarPlayground,
  BadgePlayground,
  BreadcrumbPlayground,
  ButtonPlayground,
  CardPlayground,
  CartPlayground,
  CategoryCardPlayground,
  CheckboxPlayground,
  ConfirmDialogPlayground,
  ContentRailPlayground,
  CouponInputPlayground,
  DashboardLayoutPlayground,
  DataTablePlayground,
  DesignSystemHeader,
  DialogPlayground,
  DividerPlayground,
  DropdownMenuPlayground,
  FileUploadPlayground,
  FormPlayground,
  HeroBannerPlayground,
  InputPlayground,
  LoaderPlayground,
  NavbarPlayground,
  OrderCardPlayground,
  OrderStatusTimelinePlayground,
  OrderSummaryPlayground,
  PaginationPlayground,
  ProductCardPlayground,
  ProductDetailsPlayground,
  ProductFiltersPlayground,
  ProductImageGalleryPlayground,
  ProductListingPlayground,
  PromoCardPlayground,
  QuantitySelectorPlayground,
  RadioGroupPlayground,
  RatingDisplayPlayground,
  ReviewPlayground,
  SearchBarPlayground,
  SectionHeaderPlayground,
  SelectPlayground,
  SellerCardPlayground,
  SidebarPlayground,
  SkeletonPlayground,
  StatCardPlayground,
  StockBadgePlayground,
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

        {/* Core UI */}
        <ButtonPlayground />
        <CardPlayground />
        <BadgePlayground />
        <AlertPlayground />
        <EmptyStatePlayground />
        <AvatarPlayground />
        <DividerPlayground />

        {/* Navigation & Overlay */}
        <BreadcrumbPlayground />
        <TabsPlayground />
        <DialogPlayground />
        <ConfirmDialogPlayground />
        <TooltipPlayground />
        <DropdownMenuPlayground />

        {/* Feedback & States */}
        <LoaderPlayground />
        <SkeletonPlayground />

        {/* Form Components */}
        <InputPlayground />
        <TextareaPlayground />
        <SelectPlayground />
        <CheckboxPlayground />
        <RadioGroupPlayground />
        <SwitchPlayground />
        <FormPlayground />

        {/* Search & Data */}
        <SearchBarPlayground />
        <PaginationPlayground />
        <DataTablePlayground />

        {/* Marketplace Components */}
        <SectionHeaderPlayground />
        <HeroBannerPlayground />
        <PromoCardPlayground />
        <ContentRailPlayground />
        <ProductCardPlayground />
        <CategoryCardPlayground />
        <SellerCardPlayground />
        <ProductFiltersPlayground />
        <ProductListingPlayground />
        <FileUploadPlayground />
        <ProductImageGalleryPlayground />
        <RatingDisplayPlayground />
        <ReviewPlayground />
        <StockBadgePlayground />
        <ProductDetailsPlayground />

        <QuantitySelectorPlayground />
        <AddressPlayground />
        <CartPlayground />
        <OrderSummaryPlayground />
        <CouponInputPlayground />
        <OrderStatusTimelinePlayground />
        <OrderCardPlayground />

        {/* Application Navigation */}
        <NavbarPlayground />
        <SidebarPlayground />
        <DashboardLayoutPlayground />

        {/* Dashboard Components */}
        <StatCardPlayground />
      </div>
    </main>
  );
};

export default DesignSystemPage;
