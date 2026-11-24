import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-md justify-end px-5 pt-4">
      <ThemeToggle />
    </header>
  );
}
