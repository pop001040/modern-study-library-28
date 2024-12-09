import { useState } from 'react';
import { ClassicCounter } from '@/components/ClassicCounter';
import { StudyLibrary } from '@/components/StudyLibrary';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedStudies, setSelectedStudies] = useState<Array<{ id: number; price: number }>>([]);
  const [soldStudies] = useState(1234); // يمكن تحديثه من API
  const [totalAmount] = useState(185100); // يمكن تحديثه من API

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
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">مكتبة دراسات الجدوى</h1>
        
        <div className="mb-8">
          <ClassicCounter 
            soldStudies={soldStudies} 
            totalAmount={totalAmount} 
          />
        </div>

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