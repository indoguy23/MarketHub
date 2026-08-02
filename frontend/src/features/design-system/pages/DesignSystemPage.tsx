import {
  ButtonPlayground,
  DesignSystemHeader,
  FormPlayground,
  InputPlayground,
  SelectPlayground,
  TextareaPlayground,
} from "../components";

const DesignSystemPage = () => {
  return (
    <main className="min-h-screen bg-background py-8 text-foreground sm:py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <DesignSystemHeader />
        <ButtonPlayground />
        <InputPlayground />
        <TextareaPlayground />
        <SelectPlayground />
        <FormPlayground />
      </div>
    </main>
  );
};

export default DesignSystemPage;
