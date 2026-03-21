export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bryle James Agra
        </p>
        <p className="text-xs text-muted-foreground/60">Crafted with React & TypeScript</p>
      </div>
    </footer>
  );
}
