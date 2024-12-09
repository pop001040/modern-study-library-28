import { StudyBook } from './StudyBook';
import { motion } from 'framer-motion';
import { 
  Factory, Store, Building, User, BarChart, 
  Leaf, Wheat, Bird, Dog, Fish, 
  Package, Wrench, Recycle, Computer, ShoppingCart,
  Globe, BookOpen, Phone, Truck
} from 'lucide-react';

// تصنيف الدراسات حسب النوع
const studies = [
  // المشاريع الزراعية والحيوانية
  {
    id: 1,
    title: "مشروع مزرعة تربية الأبقار",
    description: "دراسة جدوى متكاملة لمشروع إنتاج الحليب",
    capital: 500000,
    expectedProfit: 200000,
    price: 150,
    type: { icon: Bird, name: 'حيواني' }
  },
  {
    id: 2,
    title: "مشروع تسمين العجول",
    description: "دراسة جدوى لمشروع إنتاج اللحوم",
    capital: 450000,
    expectedProfit: 180000,
    price: 150,
    type: { icon: Bird, name: 'حيواني' }
  },
  {
    id: 3,
    title: "مزرعة تربية الأغنام والماعز",
    description: "دراسة جدوى لإنتاج اللحوم والصوف",
    capital: 300000,
    expectedProfit: 120000,
    price: 150,
    type: { icon: Dog, name: 'حيواني' }
  },
  {
    id: 4,
    title: "مزرعة الأسماك",
    description: "دراسة جدوى للاستزراع السمكي",
    capital: 250000,
    expectedProfit: 100000,
    price: 150,
    type: { icon: Fish, name: 'حيواني' }
  },
  // المشاريع الصناعية
  {
    id: 5,
    title: "مصنع تعبئة وتغليف",
    description: "دراسة جدوى لمصنع تعبئة المنتجات الغذائية",
    capital: 800000,
    expectedProfit: 300000,
    price: 150,
    type: { icon: Package, name: 'صناعي' }
  },
  {
    id: 6,
    title: "مصنع المنظفات",
    description: "دراسة جدوى لإنتاج الصابون والمنظفات",
    capital: 600000,
    expectedProfit: 250000,
    price: 150,
    type: { icon: Factory, name: 'صناعي' }
  },
  {
    id: 7,
    title: "ورشة الأثاث",
    description: "دراسة جدوى لتصنيع الأثاث المنزلي",
    capital: 400000,
    expectedProfit: 160000,
    price: 150,
    type: { icon: Wrench, name: 'صناعي' }
  },
  // المشاريع الخدمية
  {
    id: 8,
    title: "مكتب خدمات الترجمة",
    description: "دراسة جدوى لمكتب ترجمة معتمد",
    capital: 50000,
    expectedProfit: 120000,
    price: 150,
    type: { icon: BookOpen, name: 'خدمي' }
  },
  {
    id: 9,
    title: "مركز خدمات الحاسوب",
    description: "دراسة جدوى لمركز خدمات تقنية",
    capital: 80000,
    expectedProfit: 150000,
    price: 150,
    type: { icon: Computer, name: 'خدمي' }
  },
  // المشاريع التجارية
  {
    id: 10,
    title: "متجر إلكتروني للملابس",
    description: "دراسة جدوى لمتجر أزياء إلكتروني",
    capital: 100000,
    expectedProfit: 200000,
    price: 150,
    type: { icon: ShoppingCart, name: 'تجاري' }
  },
  // المشاريع الزراعية
  {
    id: 11,
    title: "مزرعة الخضروات العضوية",
    description: "دراسة جدوى لزراعة الخضروات",
    capital: 200000,
    expectedProfit: 80000,
    price: 150,
    type: { icon: Leaf, name: 'زراعي' }
  },
  {
    id: 12,
    title: "مزرعة القمح والحبوب",
    description: "دراسة جدوى لزراعة الحبوب",
    capital: 350000,
    expectedProfit: 140000,
    price: 150,
    type: { icon: Wheat, name: 'زراعي' }
  }
];

interface StudyLibraryProps {
  onSelectStudy: (study: typeof studies[0]) => void;
}

export const StudyLibrary = ({ onSelectStudy }: StudyLibraryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[800px] perspective"
    >
      {/* خلفية المكتبة الخشبية */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513] to-[#654321] rounded-xl shadow-2xl overflow-hidden">
        {/* نمط خشبي */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* رفوف المكتبة */}
        <div className="absolute inset-0 grid grid-rows-5 gap-8 p-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative">
              {/* ظل الرف */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#4A3219] transform skew-x-12 -skew-y-3 shadow-2xl opacity-50" />
              
              {/* سطح الرف */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#8B4513] to-[#654321] transform -skew-x-12 shadow-xl" />
              
              {/* حافة الرف */}
              <div className="absolute bottom-8 left-0 right-0 h-2 bg-[#4A3219] transform -skew-x-12" />
            </div>
          ))}
        </div>
      </div>
      
      {/* الكتب */}
      <div className="relative grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6 p-8 max-h-[800px] overflow-y-auto">
        {studies.map((study) => (
          <StudyBook
            key={study.id}
            title={study.title}
            description={study.description}
            capital={study.capital}
            expectedProfit={study.expectedProfit}
            price={study.price}
            icon={study.type.icon}
            onSelect={() => onSelectStudy(study)}
          />
        ))}
      </div>
    </motion.div>
  );
};