import { StudyBook } from './StudyBook';
import { motion } from 'framer-motion';

const studies = [
  {
    id: 1,
    title: "مشروع مطعم وجبات سريعة",
    capital: 500000,
    expectedProfit: 200000,
    price: 150,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "مشروع محل ملابس",
    capital: 300000,
    expectedProfit: 150000,
    price: 150,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "مشروع مركز تجميل",
    capital: 400000,
    expectedProfit: 180000,
    price: 150,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "مشروع مقهى",
    capital: 350000,
    expectedProfit: 160000,
    price: 150,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "مشروع صالون حلاقة",
    capital: 200000,
    expectedProfit: 100000,
    price: 150,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "مشروع محل عطور",
    capital: 250000,
    expectedProfit: 120000,
    price: 150,
    image: "/placeholder.svg"
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
      className="relative min-h-[600px]"
    >
      {/* خلفية المكتبة الخشبية */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-xl shadow-2xl overflow-hidden">
        {/* نقوش الخشب */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-4 bg-[#DEB887]/10"
              style={{ top: `${i * 30}px`, transform: 'rotate(0deg)' }}
            />
          ))}
        </div>
        
        {/* رفوف المكتبة */}
        <div className="absolute inset-0 grid grid-rows-4 gap-4 p-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#654321] shadow-md" />
              <div className="absolute bottom-4 left-0 right-0 h-1 bg-[#8B4513]/50" />
            </div>
          ))}
        </div>
      </div>
      
      {/* الكتب */}
      <div className="relative grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 p-4">
        {studies.map((study) => (
          <StudyBook
            key={study.id}
            title={study.title}
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