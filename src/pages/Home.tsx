import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <div className="container mx-auto py-16 px-4">
        {/* Logo */}
        <div className="absolute top-4 right-4">
          <img 
            src="/lovable-uploads/936de462-6c9f-4ef0-950d-b5e8182d11ae.png" 
            alt="Green Light Logo" 
            className="h-24 w-auto"
          />
        </div>

        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            مرحبًا بك في "Green Light"
          </h1>
          
          <p className="text-xl text-blue-700 mb-8">
            اكتشف مجموعة كبيرة من دراسات الجدوى لمختلف المشاريع بطريقة سهلة ومبسطة، وكمان تقدر تسأل الشات بوت بتاعنا لو محتاج مساعدة!
          </p>
          
          <div className="space-y-4">
            <Link to="/studies">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                استعرض المكتبة
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;