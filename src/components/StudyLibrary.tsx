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
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/10 to-transparent rounded-xl">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/665ba71a-047d-4cc6-aa26-31dfa5e21093.png')] bg-cover bg-center opacity-10" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-[#8B4513]/20 via-[#8B4513]/30 to-[#8B4513]/20" />
      </div>
      
      <div className="relative grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4">
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