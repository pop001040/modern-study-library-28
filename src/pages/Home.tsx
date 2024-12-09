import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir="rtl">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
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