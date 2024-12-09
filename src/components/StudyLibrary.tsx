import { StudyBook } from './StudyBook';
import { motion } from 'framer-motion';

// إنشاء مصفوفة من 100 دراسة
const studies = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `دراسة جدوى ${index + 1}`,
  description: `وصف تفصيلي لدراسة الجدوى رقم ${index + 1}`,
  capital: Math.floor(Math.random() * 900000) + 100000, // رأس مال عشوائي بين 100,000 و 1,000,000
  expectedProfit: Math.floor(Math.random() * 400000) + 100000, // ربح متوقع عشوائي بين 100,000 و 500,000
  price: 150,
}));

interface StudyLibraryProps {
  onSelectStudy: (study: typeof studies[0]) => void;
}

export const StudyLibrary = ({ onSelectStudy }: StudyLibraryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[500px]"
    >
      {/* خلفية المكتبة الخشبية */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-xl shadow-2xl overflow-hidden">
        {/* نقوش الخشب */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23DEB887' fill-opacity='0.1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%23DEB887' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* رفوف المكتبة */}
        <div className="absolute inset-0 grid grid-rows-5 gap-2 p-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#654321] shadow-lg" />
              <div className="absolute bottom-6 left-0 right-0 h-1 bg-[#8B4513]/50" />
            </div>
          ))}
        </div>
      </div>
      
      {/* الكتب */}
      <div className="relative grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 p-6 max-h-[800px] overflow-y-auto">
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