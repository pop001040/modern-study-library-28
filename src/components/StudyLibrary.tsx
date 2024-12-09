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
      className="relative min-h-[600px] rounded-xl overflow-hidden"
    >
      {/* خلفية المكتبة الخشبية الديناميكية */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5C4033] via-[#8B4513] to-[#A0522D] overflow-hidden">
        {/* نقوش الخشب المتحركة */}
        <div 
          className="absolute inset-0 opacity-20 animate-[grain_8s_steps(10,end)_infinite]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            filter: 'contrast(170%) brightness(1000%)'
          }}
        />
        
        {/* تأثير الإضاءة العلوية */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#DEB887]/20 to-transparent" />
        
        {/* رفوف المكتبة ثلاثية الأبعاد */}
        <div className="absolute inset-0 grid grid-rows-3 gap-4 p-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative">
              {/* الرف الخشبي */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#8B4513] to-[#654321] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)]">
                {/* حافة الرف */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#DEB887]/20" />
                {/* ظل الرف */}
                <div className="absolute -bottom-4 left-0 right-0 h-4 bg-black/20 blur-sm" />
              </div>
              
              {/* تأثير العمق للرف */}
              <div className="absolute bottom-8 left-0 right-0 h-2 bg-[#5C4033] transform skew-x-[-45deg] origin-left" />
              <div className="absolute bottom-8 right-0 w-2 h-8 bg-[#3E2723] transform skew-y-[45deg] origin-bottom" />
            </div>
          ))}
        </div>
      </div>
      
      {/* الكتب */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8">
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