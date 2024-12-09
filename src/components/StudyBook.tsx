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
      className="relative w-64 h-96 m-4 book-hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0 bg-primary rounded-lg shadow-lg">
        <div className="h-full p-6 flex flex-col justify-between">
          <div className="text-primary-foreground">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <p className="text-sm">رأس المال: {capital.toLocaleString()} جنيه</p>
                <p className="text-sm">الأرباح المتوقعة: {expectedProfit.toLocaleString()} جنيه</p>
                <p className="text-sm">السعر: {price} جنيه</p>
              </motion.div>
            )}
          </div>
          <Button 
            onClick={onSelect}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <ShoppingCart className="ml-2 h-4 w-4" />
            طلب الدراسة
          </Button>
        </div>
      </div>
    </motion.div>
  );
};