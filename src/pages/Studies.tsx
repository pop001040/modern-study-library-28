import { StudyLibrary } from "@/components/StudyLibrary";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

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

  const handleCheckout = () => {
    const total = selectedStudies.reduce((sum, study) => sum + study.price, 0);
    const message = encodeURIComponent(
      `مرحباً، أود شراء ${selectedStudies.length} دراسة جدوى بقيمة إجمالية ${total} جنيه`
    );
    window.open(`https://wa.me/+201234567890?text=${message}`, '_blank');
  };

  const totalPrice = selectedStudies.reduce((sum, study) => sum + study.price, 0);

  return (
    <div id="studies-section" className="container mx-auto py-8">
      {selectedStudies.length > 0 && (
        <div className="text-center mb-8">
          <Button
            onClick={handleCheckout}
            className="bg-[#8B4513] hover:bg-[#A0522D] text-[#DEB887]"
          >
            الدفع ({selectedStudies.length} دراسات - {totalPrice} جنيه)
          </Button>
        </div>
      )}
      <StudyLibrary onSelectStudy={handleSelectStudy} />
    </div>
  );
};

export default Studies;