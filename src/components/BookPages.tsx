import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookPagesProps {
  title: string;
  capital: number;
  expectedProfit: number;
  price: number;
  onClose: () => void;
  onSelect: () => void;
}

export const BookPages = ({ title, capital, expectedProfit, price, onClose, onSelect }: BookPagesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="relative w-[180px] h-[220px] bg-[#FFF8DC] rounded-sm shadow-2xl p-4"
    >
      <div className="space-y-4 text-right">
        <h2 className="text-sm font-bold text-[#8B4513]">{title}</h2>
        <div className="space-y-3">
          <div className="p-2 bg-[#8B4513]/5 rounded-lg">
            <p className="text-xs">رأس المال المطلوب</p>
            <p className="text-sm font-bold text-[#8B4513]">{capital.toLocaleString()} جنيه</p>
          </div>
          <div className="p-2 bg-[#DEB887]/20 rounded-lg">
            <p className="text-xs">الأرباح المتوقعة</p>
            <p className="text-sm font-bold text-[#A0522D]">{expectedProfit.toLocaleString()} جنيه</p>
          </div>
          <div className="p-2 bg-[#8B4513]/10 rounded-lg">
            <p className="text-xs">سعر الدراسة</p>
            <p className="text-sm font-bold text-[#8B4513]">{price} جنيه</p>
          </div>
        </div>
        <Button 
          onClick={onSelect}
          className="w-full bg-[#8B4513] hover:bg-[#A0522D] text-[#FFF8DC] mt-2 group text-xs"
        >
          <ShoppingCart className="ml-2 h-3 w-3 transition-transform group-hover:scale-110" />
          طلب الدراسة
        </Button>
        <button 
          onClick={onClose}
          className="mt-2 text-xs text-[#8B4513]/60 hover:text-[#8B4513]"
        >
          إغلاق
        </button>
      </div>
    </motion.div>
  );
};