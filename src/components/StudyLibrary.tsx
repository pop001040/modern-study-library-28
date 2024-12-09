import { StudyBook } from './StudyBook';
import { motion } from 'framer-motion';

// إنشاء مصفوفة من الدراسات
const studies = [
  // المشاريع الزراعية الحيوانية
  "مشروع مزرعة تربية الأبقار لإنتاج الحليب",
  "مشروع تسمين العجول لإنتاج اللحوم",
  "مزرعة تربية الأغنام والماعز لإنتاج اللحوم والصوف",
  "مزرعة الدواجن لإنتاج البيض",
  "مشروع تربية الدواجن لإنتاج اللحوم",
  "مزرعة تربية الأرانب لإنتاج اللحوم والفراء",
  "مزرعة تربية النعام لإنتاج اللحوم والجلود",
  "مزرعة تربية الأسماك",
  "مزرعة تربية النحل لإنتاج العسل",
  "مزرعة تربية الخيول وإنتاج الأمهار",
  // المشاريع الصناعية
  "مصنع تعبئة وتغليف المنتجات الغذائية",
  "مصنع إنتاج الصابون والمنظفات",
  "مصنع إنتاج الأثاث المنزلي والمكتبي",
  "مصنع إنتاج المخللات والمربى",
  "مصنع إنتاج العطور ومستحضرات التجميل",
  // المشاريع الخدمية
  "مكتب خدمات الترجمة",
  "مركز تقديم خدمات الحاسوب والإنترنت",
  "شركة تنظيف المنازل والمكاتب",
  "مكتب خدمات التسويق الرقمي",
  "شركة تنظيم الفعاليات والحفلات",
  // المشاريع الزراعية النباتية
  "مزرعة زراعة الطماطم",
  "مزرعة زراعة الخيار",
  "مزرعة زراعة الفراولة",
  "مزرعة زراعة البطيخ",
  "مزرعة زراعة الخضروات العضوية",
  // المشاريع الإلكترونية
  "متجر إلكتروني لبيع الملابس",
  "خدمة الاستشارات عبر الإنترنت",
  "منصة التعليم الإلكتروني",
  "متجر إلكتروني للمنتجات اليدوية",
  "خدمات التسويق الرقمي"
].map((title, index) => ({
  id: index + 1,
  title,
  description: `وصف تفصيلي لدراسة ${title}`,
  capital: Math.floor(Math.random() * 900000) + 100000,
  expectedProfit: Math.floor(Math.random() * 400000) + 100000,
  price: 150,
  type: { name: 'دراسة جدوى' }
}));

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
            onSelect={() => onSelectStudy(study)}
          />
        ))}
      </div>
    </motion.div>
  );
};