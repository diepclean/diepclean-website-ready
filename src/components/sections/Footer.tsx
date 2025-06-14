
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
              alt="DiepClean Logo" 
              className="h-8 w-auto"
            />
            <div>
              <div className="font-semibold">DiepClean.nl</div>
              <div className="text-sm">Professionele Reiniging Services</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">© 2024 DiepClean.nl - Alle rechten voorbehouden</p>
            <p className="text-xs text-gray-400">BTW: NL002503646B68 | KvK: 72489324</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
