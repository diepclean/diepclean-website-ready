
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/19e35f6d-df31-4df5-9608-ef160f3e904d.png" 
                alt="DiepClean.nl Logo" 
                className="h-8 w-auto mr-2"
                width="32"
                height="32"
              />
              <span className="text-xl font-bold">DiepClean.nl</span>
            </div>
            <p className="text-gray-400">
              Professionele reinigingsdiensten in de Randstad. 
              Wij maken alles weer als nieuw.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Meubelreiniging</li>
              <li>Tapijtreiniging</li>
              <li>Auto Interieur</li>
              <li>Matrasreiniging</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Telefoon: 06 34 27 37 02</p>
              <p>Email: info@diepclean.nl</p>
              <p>Werkgebied: Randstad</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DiepClean.nl. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};
