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
  InfoListPlayground,
  InputPlayground,
  LoaderPlayground,
  NavbarPlayground,
  OrderCardPlayground,
  OrderItemPlayground,
  OrderStatusTimelinePlayground,
  OrderSummaryPlayground,
  PaginationPlayground,
  PaymentMethodCardPlayground,
  ProductCardPlayground,
  ProductDetailsPlayground,
  ProductFiltersPlayground,
  ProductImageGalleryPlayground,
  ProductListingPlayground,
  ProgressStatusPlayground,
  PromoCardPlayground,
  QuantitySelectorPlayground,
  RadioGroupPlayground,
  RatingDisplayPlayground,
  RatingInputPlayground,
  ReviewFormPlayground,
  ReviewPlayground,
  SearchBarPlayground,
  SectionHeaderPlayground,
  SelectPlayground,
  SellerCardPlayground,
  SidebarPlayground,
  SkeletonPlayground,
  StatCardPlayground,
  StatusBadgePlayground,
  StepIndicatorPlayground,
  StockBadgePlayground,
  SwitchPlayground,
  TabsPlayground,
  TextareaPlayground,
  TooltipPlayground,
  WishlistItemPlayground,
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
        <StatusBadgePlayground />
        <ProgressStatusPlayground />
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
        <InfoListPlayground />
        <HeroBannerPlayground />
        <PromoCardPlayground />
        <ContentRailPlayground />
        <ProductCardPlayground />
        <WishlistItemPlayground />
        <CategoryCardPlayground />
        <SellerCardPlayground />
        <ProductFiltersPlayground />
        <ProductListingPlayground />
        <FileUploadPlayground />
        <ProductImageGalleryPlayground />
        <RatingDisplayPlayground />
        <RatingInputPlayground />
        <ReviewFormPlayground />
        <ReviewPlayground />
        <StockBadgePlayground />
        <ProductDetailsPlayground />

        <QuantitySelectorPlayground />
        <AddressPlayground />
        <CartPlayground />
        <OrderSummaryPlayground />
        <CouponInputPlayground />
        <PaymentMethodCardPlayground />
        <StepIndicatorPlayground />
        <OrderItemPlayground />
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
