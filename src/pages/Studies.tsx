import { useState } from 'react';
import { StudyLibrary } from '@/components/StudyLibrary';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedStudies, setSelectedStudies] = useState<Array<{ id: number; price: number }>>([]);
  
  const handleSelectStudy = (study: { id: number; price: number }) => {
    setSelectedStudies((prev) => [...prev, study]);
    toast({
      title: "تمت إضافة الدراسة",
      description: "تم إضافة الدراسة إلى سلة المشتريات",
    });
  };

  const handleCheckout = () => {
    const total = selectedStudies.reduce((sum, study) => sum + study.price, 0);
    const message = encodeURIComponent(
      `مرحباً، أود شراء ${selectedStudies.length} دراسة جدوى بقيمة إجمالية ${total} جنيه`
    );
    window.open(`https://wa.me/+201234567890?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 font-['Noto Kufi Arabic'] text-[#8B4513]">
          دراسات الجدوى
        </h1>
        
        {selectedStudies.length > 0 && (
          <div className="text-center mb-8">
            <Button
              onClick={handleCheckout}
              className="bg-[#8B4513] hover:bg-[#A0522D] text-[#DEB887]"
            >
              الدفع ({selectedStudies.length} دراسات)
            </Button>
          </div>
        )}

        <StudyLibrary onSelectStudy={handleSelectStudy} />
      </div>
    </div>
  );
};

export default Index;