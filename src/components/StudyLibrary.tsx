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
      <div className="absolute inset-0 bg-[#8B4513] rounded-xl shadow-2xl overflow-hidden">
        {/* رفوف المكتبة */}
        <div className="absolute inset-0 grid grid-rows-5 gap-2 p-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#654321] shadow-xl" style={{
                backgroundImage: 'linear-gradient(to bottom, #8B4513, #654321)'
              }} />
              <div className="absolute bottom-8 left-0 right-0 h-1 bg-[#4A3219]" />
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