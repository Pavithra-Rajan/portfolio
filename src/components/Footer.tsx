export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            © {currentYear} Pavithra Rajan
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Pavithra-Rajan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="type-link hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/pavithra--rajan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="type-link hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:pavithra.rajan01@gmail.com"
              className="type-link hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
