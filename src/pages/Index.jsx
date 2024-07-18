import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">GEOFY</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Så fungerar det</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Frågor och svar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Om oss</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/placeholder.svg" alt="Sustainable Energy Illustration" className="w-full h-auto object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Tillgodose hela din energiförbrukning</h1>
            <h2 className="text-2xl font-semibold mb-4">Fast pris för all energi till 3000 kr i månaden</h2>
            <p className="mb-6">
              Allt är inkluderat som solceller, värmepump och batterisystem till ett värde av 400 000 kr. 
              Allt till ett fast pris under 15 år, inklusive elkostnader.
            </p>
            <form className="space-y-4">
              <Input type="email" placeholder="E-postadress" />
              <Input type="tel" placeholder="Telefonnummer" />
              <Input type="text" placeholder="Adress" />
              <Button className="w-full">Gå med i väntelista</Button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sky-100 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>
            Vår webbplats använder cookies för att förbättra din upplevelse. 
            Genom att använda vår webbplats samtycker du till alla cookies enligt våra användarvillkor.
          </p>
          <Button variant="outline" className="mt-2">Jag förstår</Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;