import { useState } from 'react';
import { ClassicCounter } from '@/components/ClassicCounter';
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

  // حساب إجمالي المبيعات من الدراسات المختارة
  const totalAmount = selectedStudies.reduce((sum, study) => sum + study.price, 0);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-lg py-4">
        <ClassicCounter 
          soldStudies={selectedStudies.length} 
          totalAmount={totalAmount} 
        />
      </div>

      <div className="container mx-auto py-8 pt-48">
        <h1 className="text-4xl font-bold text-center mb-8">مكتبة دراسات الجدوى</h1>
        
        {selectedStudies.length > 0 && (
          <div className="text-center mb-8">
            <Button
              onClick={handleCheckout}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
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