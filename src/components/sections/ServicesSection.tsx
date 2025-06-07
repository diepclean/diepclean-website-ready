
import { CheckCircle, Shield, Clock, Sparkles } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Voor & Na Resultaten sectie */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Voor & Na Resultaten</h2>
          <p className="text-xl text-gray-600 mb-12">Zie zelf het verschil dat onze professionele reiniging maakt</p>
          
          {/* Voor & Na foto carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Voor</h3>
              <img 
                src="/lovable-uploads/66cd836e-690f-479a-bee9-d025cb74823c.png" 
                alt="Bank voor reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
              />
              <h3 className="text-lg font-semibold">Na</h3>
              <img 
                src="/lovable-uploads/82a1bf7a-87be-4f91-b794-69dbfc5d440c.png" 
                alt="Bank na reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Voor</h3>
              <img 
                src="/lovable-uploads/24ee282d-dbee-405e-b117-dcaaa28a6ea3.png" 
                alt="Stoel voor reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
              />
              <h3 className="text-lg font-semibold">Na</h3>
              <img 
                src="/lovable-uploads/442b9a57-a2cc-4d29-a416-91c39d5a546e.png" 
                alt="Stoel na reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Voor</h3>
              <img 
                src="/lovable-uploads/c7ea61b3-c460-4fb7-8ce9-e48400bad7e0.png" 
                alt="Tapijt voor reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
              />
              <h3 className="text-lg font-semibold">Na</h3>
              <img 
                src="/lovable-uploads/9a33605c-206a-4774-8dbf-ebb44554b144.png" 
                alt="Tapijt na reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Voor</h3>
              <img 
                src="/lovable-uploads/798740fc-b765-42c5-a763-86714aec273d.png" 
                alt="Matras voor reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg mb-2"
              />
              <h3 className="text-lg font-semibold">Na</h3>
              <img 
                src="/lovable-uploads/32255eac-2a64-423d-ba0d-67c6f1cdb734.png" 
                alt="Matras na reiniging" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Waarom DiepClean.nl sectie */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Waarom DiepClean.nl?</h2>
          
          {/* USP's met iconen */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/d7c9eb0e-7e11-4879-abc4-b6692666c5a9.png" 
                alt="Jarenlange Ervaring" 
                className="h-32 w-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Jarenlange Ervaring</h4>
              <p className="text-gray-600">
                Meer dan 5 jaar ervaring in professionele reiniging in de Randstad. 
                Onze expertise garandeert perfecte resultaten bij elke klus.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/c098d22e-04f9-4a9d-a457-44349b85b7cb.png" 
                alt="24/7 Bereikbaar" 
                className="h-32 w-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">24/7 Bereikbaar</h4>
              <p className="text-gray-600">
                Wij zijn altijd bereikbaar voor spoedeisende reinigingsklussen en 
                bieden flexibele afspraken die bij uw schema passen.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/691d9eb0-a113-41c6-b3e4-7bdd9ef394e9.png" 
                alt="Eco-vriendelijke Methoden" 
                className="h-32 w-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Eco-vriendelijke Methoden</h4>
              <p className="text-gray-600">
                Wij gebruiken alleen milieuvriendelijke en veilige reinigingsproducten die 
                effectief zijn maar geen schade toebrengen aan uw gezondheid of het milieu.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/1b63c9d2-7c42-42f0-bbb7-1357a1bf3542.png" 
                alt="Kitten" 
                className="h-32 w-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Huisdiervriendelijk</h4>
              <p className="text-gray-600">
                Onze reinigingsmethoden zijn volledig veilig voor uw huisdieren. 
                Zij kunnen direct na de reiniging weer gebruik maken van de schone meubels.
              </p>
            </div>
          </div>

          {/* Steden waar we actief zijn */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="/lovable-uploads/46945a64-cf88-4e50-860a-1a00af816f5a.png" 
                alt="Amsterdam" 
                className="h-24 w-auto mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Amsterdam</h4>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/d9f7ca2c-e6b3-4abb-b66f-aee4736f18ff.png" 
                alt="Rotterdam" 
                className="h-24 w-auto mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Rotterdam</h4>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/5bc2263c-99f2-4c3a-aef1-2739c61f81d9.png" 
                alt="Den Haag" 
                className="h-24 w-auto mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Den Haag</h4>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/58a4c6a5-c0d4-43ee-9f24-8982998d8f6b.png" 
                alt="Utrecht" 
                className="h-24 w-auto mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Utrecht</h4>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Onze Diensten</h2>
          <p className="text-xl text-gray-600 mb-12">Professionele reiniging voor al uw meubels en stoffering</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/5848e504-b92d-41ea-8484-9f50c51736a7.png" 
                alt="Bankreiniging" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Bankreiniging</h3>
              <p className="text-gray-600 mb-6">Professionele reiniging van alle soorten banken en zetels. Van leer tot stof, wij maken uw bank weer als nieuw.</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Leren banken
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Stoffen banken
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Microfiber banken
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/a8d470f5-33d3-48e9-83c3-743b90a6ead2.png" 
                alt="Stoelreiniging" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stoelreiniging</h3>
              <p className="text-gray-600 mb-6">Grondige reiniging van eetkamerstoelen, bureautoelen en fauteuils voor optimaal zitcomfort.</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Eetkamerstoelen
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Bureautoelen
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Fauteuils
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/bfb40231-b2ac-47db-918d-12435e022e1b.png" 
                alt="Tapijt- en vloerkleedreiniging" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tapijt- en Vloerkleedreiniging</h3>
              <p className="text-gray-600 mb-6">Diepe reiniging van tapijten en vloerkleden om allergie??n te verminderen en de levensduur te verlengen.</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Perzische tapijten
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Moderne vloerkleden
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Vloerbedekking
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/c3ee6927-2469-4aee-95a3-65bbc645ce7f.png" 
                alt="Matrasreiniging" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Matrasreiniging</h3>
              <p className="text-gray-600 mb-6">Hygi??nische reiniging van matrassen voor een gezonde slaapomgeving, vrij van mijten en bacteri??n.</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Anti-allergie behandeling
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Vlekverwijdering
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Geurverwijdering
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/e56a3918-1b53-4a21-8e0a-0077dc126ec0.png" 
                alt="Gordijnreiniging" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Gordijnreiniging</h3>
              <p className="text-gray-600 mb-6">Voorzichtige reiniging van gordijnen en overgordijnen, inclusief ophalen en ophangen service.</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Zware gordijnen
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Vitrage
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Ophaal & breng service
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/ca4fcad4-87a8-40d6-ad6c-6c93de8ae248.png" 
                alt="Auto-interieur reiniging" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Auto-interieur Reiniging</h3>
              <p className="text-gray-600 mb-6">Complete reiniging van uw auto-interieur, van stoelen tot vloermatten voor een frisse rijervaring.</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Autostoelen
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Vloermatten
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Dashboard reiniging
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ons Werkproces</h2>
          <p className="text-xl text-gray-600 mb-12">Van offerte tot eindresultaat, zo werken wij</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gratis Offerte</h3>
              <p className="text-gray-600">Neem contact op voor een vrijblijvende offerte op maat</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Afspraak Inplannen</h3>
              <p className="text-gray-600">Wij plannen een afspraak in die uitkomt in uw agenda</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professionele Reiniging</h3>
              <p className="text-gray-600">Onze experts reinigen uw meubels met de beste apparatuur</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tevredenheidsgarantie</h3>
              <p className="text-gray-600">Niet tevreden? Dan komen wij kosteloos terug</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
