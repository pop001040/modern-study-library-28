import { StudyLibrary } from "@/components/StudyLibrary";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface Study {
  id: number;
  title: string;
  description: string;
  capital: number;
  expectedProfit: number;
  price: number;
}

const Studies = () => {
  const [selectedStudies, setSelectedStudies] = useState<Study[]>([]);

  const handleSelectStudy = (study: Study) => {
    setSelectedStudies(prev => {
      const isAlreadySelected = prev.some(s => s.id === study.id);
      if (isAlreadySelected) {
        toast({
          title: "تنبيه",
          description: "لقد قمت باختيار هذه الدراسة مسبقاً",
          variant: "destructive",
        });
        return prev;
      }
      toast({
        title: "تم إضافة الدراسة",
        description: `تمت إضافة دراسة ${study.title} إلى سلة المشتريات`,
      });
      return [...prev, study];
    });
  };

  return (
    <div id="studies-section" className="container mx-auto py-8">
      <StudyLibrary onSelectStudy={handleSelectStudy} />
    </div>
  );
};

export default Studies;