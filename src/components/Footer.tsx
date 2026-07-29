export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bryle James Agra
        </p>
      </div>
    </footer>
  );
}
