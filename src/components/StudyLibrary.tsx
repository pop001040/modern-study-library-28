import { StudyBook } from './StudyBook';
import { motion } from 'framer-motion';

const studies = [
  {
    id: 1,
    title: "مشروع مطعم وجبات سريعة",
    description: "دراسة تفصيلية لمشروع مطعم ناجح",
    capital: 500000,
    expectedProfit: 200000,
    price: 150,
  },
  {
    id: 2,
    title: "مشروع محل ملابس",
    description: "خطة عمل متكاملة لمتجر أزياء",
    capital: 300000,
    expectedProfit: 150000,
    price: 150,
  },
  {
    id: 3,
    title: "مشروع مركز تجميل",
    description: "دراسة شاملة لصالون تجميل عصري",
    capital: 400000,
    expectedProfit: 180000,
    price: 150,
  },
  {
    id: 4,
    title: "مشروع مقهى",
    description: "خطة استثمارية لمقهى حديث",
    capital: 350000,
    expectedProfit: 160000,
    price: 150,
  },
  {
    id: 5,
    title: "مشروع صالون حلاقة",
    description: "دراسة متكاملة لصالون حلاقة رجالي",
    capital: 200000,
    expectedProfit: 100000,
    price: 150,
  },
  {
    id: 6,
    title: "مشروع محل عطور",
    description: "خطة عمل لمتجر عطور فاخر",
    capital: 250000,
    expectedProfit: 120000,
    price: 150,
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
        <div className="absolute inset-0 grid grid-rows-3 gap-2 p-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#654321] shadow-lg" />
              <div className="absolute bottom-6 left-0 right-0 h-1 bg-[#8B4513]/50" />
            </div>
          ))}
        </div>
      </div>
      
      {/* الكتب */}
      <div className="relative grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 p-6">
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