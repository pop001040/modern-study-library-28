import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StudyBookProps {
  title: string;
  capital: number;
  expectedProfit: number;
  price: number;
  onSelect: () => void;
}

export const StudyBook = ({ title, capital, expectedProfit, price, onSelect }: StudyBookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative perspective" dir="rtl">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            className="book-container cursor-pointer"
            onClick={handleClick}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -90 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[200px] h-[300px] book-hover">
              {/* الغلاف الأمامي */}
              <div className="absolute inset-0 bg-gradient-to-l from-primary/90 to-primary rounded-lg shadow-xl border-r-4 border-primary-foreground/20">
                <div className="h-full p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-16 h-1 bg-primary-foreground/20 rounded-full mx-auto" />
                    <h3 className="text-xl font-bold text-primary-foreground text-right">{title}</h3>
                  </div>
                </div>
              </div>
              {/* ظهر الكتاب */}
              <div className="absolute inset-y-0 right-0 w-4 bg-primary-foreground/10 transform origin-right" 
                   style={{ transform: 'rotateY(-20deg) translateZ(-2px)' }} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="book-pages"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[300px] h-[400px] bg-white rounded-lg shadow-2xl p-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 text-right"
              >
                <h2 className="text-2xl font-bold text-primary">{title}</h2>
                <div className="space-y-2">
                  <p className="text-lg">رأس المال: <span className="font-bold">{capital.toLocaleString()} جنيه</span></p>
                  <p className="text-lg">الأرباح المتوقعة: <span className="font-bold">{expectedProfit.toLocaleString()} جنيه</span></p>
                  <p className="text-lg">سعر الدراسة: <span className="font-bold">{price} جنيه</span></p>
                </div>
                <Button 
                  onClick={onSelect}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4 group"
                >
                  <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  طلب الدراسة
                </Button>
                <button 
                  onClick={handleClick}
                  className="mt-4 text-sm text-primary/60 hover:text-primary"
                >
                  إغلاق
                </button>
              </motion.div>
              {/* تأثير تقليب الصفحات */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 bg-white border rounded-lg"
                    initial={{ rotateY: 90, x: 20 * i }}
                    animate={{ rotateY: 0, x: 10 * i }}
                    transition={{ delay: 0.1 * i }}
                    style={{ zIndex: -i }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};