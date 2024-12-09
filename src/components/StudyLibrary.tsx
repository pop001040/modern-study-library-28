import { StudyBook } from './StudyBook';
import { motion } from 'framer-motion';
import { Factory, Store, Building, User, BarChart } from 'lucide-react';

// تحديد أنواع الدراسات وأيقوناتها
const studyTypes = [
  { icon: Factory, name: 'صناعي' },
  { icon: Store, name: 'تجاري' },
  { icon: Building, name: 'عقاري' },
  { icon: User, name: 'خدمي' },
  { icon: BarChart, name: 'مالي' }
];

// إنشاء مصفوفة من 100 دراسة
const studies = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `دراسة جدوى ${index + 1}`,
  description: `وصف تفصيلي لدراسة الجدوى رقم ${index + 1}`,
  capital: Math.floor(Math.random() * 900000) + 100000,
  expectedProfit: Math.floor(Math.random() * 400000) + 100000,
  price: 150,
  type: studyTypes[Math.floor(Math.random() * studyTypes.length)]
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
            icon={study.type.icon}
            onSelect={() => onSelectStudy(study)}
          />
        ))}
      </div>
    </motion.div>
  );
};