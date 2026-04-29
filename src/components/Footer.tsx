export const Footer = () => {
  return (
    <footer className="py-8 px-6 text-sm mx-4 md:mx-6 mb-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-foreground/60">
          (c) {new Date().getFullYear()} Ridho Studio. All rights reserved.
        </div>

        <div className="flex gap-6 font-medium">
          <a href="#" className="hover:text-foreground/70 transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground/70 transition-colors">Behance</a>
          <a href="#" className="hover:text-foreground/70 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground/70 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
