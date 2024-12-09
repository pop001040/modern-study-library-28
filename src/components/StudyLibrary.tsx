import { StudyBook } from './StudyBook';

const studies = [
  {
    id: 1,
    title: "مشروع مطعم وجبات سريعة",
    capital: 500000,
    expectedProfit: 200000,
    price: 150
  },
  {
    id: 2,
    title: "مشروع محل ملابس",
    capital: 300000,
    expectedProfit: 150000,
    price: 150
  },
  {
    id: 3,
    title: "مشروع مركز تجميل",
    capital: 400000,
    expectedProfit: 180000,
    price: 150
  },
  // يمكنك إضافة المزيد من الدراسات هنا
];

interface StudyLibraryProps {
  onSelectStudy: (study: typeof studies[0]) => void;
}

export const StudyLibrary = ({ onSelectStudy }: StudyLibraryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
  );
};