import {
  AlertPlayground,
  AvatarPlayground,
  BadgePlayground,
  BreadcrumbPlayground,
  ButtonPlayground,
  CardPlayground,
  CheckboxPlayground,
  DataTablePlayground,
  DesignSystemHeader,
  DialogPlayground,
  DividerPlayground,
  DropdownMenuPlayground,
  FormPlayground,
  InputPlayground,
  LoaderPlayground,
  PaginationPlayground,
  RadioGroupPlayground,
  SearchBarPlayground,
  SelectPlayground,
  SkeletonPlayground,
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
