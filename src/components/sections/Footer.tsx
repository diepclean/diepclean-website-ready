
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 gpu-accelerated">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">© 2024 DiepClean.nl - Alle rechten voorbehouden</p>
            <p className="text-xs text-gray-400 mt-1">BTW: NL002503646B68 | KvK: 72489324</p>
          </div>
          
          <div className="flex items-center">
            <picture>
              <source 
                srcSet="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.webp" 
                type="image/webp"
              />
              <img 
                src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
                alt="DiepClean Logo" 
                className="h-8 w-auto optimized-image"
                loading="lazy"
                decoding="async"
                width="32"
                height="32"
              />
            </picture>
          </div>
        </div>
      </div>
    </footer>
  );
};
