import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full aspect-[2/3] book-hover perspective"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ rotateY: 15, z: 50 }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-xl"
           style={{
             transform: "translateZ(0px)",
             backfaceVisibility: "hidden"
           }}>
        <div className="h-full p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-16 h-1 bg-primary-foreground/20 rounded-full mx-auto" />
            <h3 className="text-xl font-bold text-primary-foreground">{title}</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              className="space-y-2 text-primary-foreground/90"
            >
              <p className="text-sm">رأس المال: {capital.toLocaleString()} جنيه</p>
              <p className="text-sm">الأرباح المتوقعة: {expectedProfit.toLocaleString()} جنيه</p>
              <p className="text-sm">السعر: {price} جنيه</p>
            </motion.div>
          </div>
          <Button 
            onClick={onSelect}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
          >
            <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            طلب الدراسة
          </Button>
        </div>
      </div>
      {/* Book spine effect */}
      <div 
        className="absolute inset-y-0 left-0 w-4 bg-primary/60 rounded-l-lg transform origin-left"
        style={{
          transform: "rotateY(-90deg) translateX(-2px)",
          transformStyle: "preserve-3d"
        }}
      />
    </motion.div>
  );
};