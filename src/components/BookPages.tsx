import { motion } from 'framer-motion';
import { ShoppingCart, Coins, TrendingUp, Tag } from 'lucide-react';
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
      className="relative w-[250px] bg-white rounded-xl shadow-2xl overflow-hidden"
    >
      {/* صورة الدراسة */}
      <div 
        className="h-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')`
        }}
      >
        <div className="h-full flex items-end p-3">
          <h2 className="text-white text-base font-bold">{title}</h2>
        </div>
      </div>

      {/* تفاصيل الدراسة */}
      <div className="p-3 space-y-3">
        {/* رأس المال */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="p-1.5 bg-blue-100 rounded-lg">
            <Coins className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-600">رأس المال المطلوب</p>
            <p className="text-sm font-bold text-blue-600">{capital.toLocaleString()} جنيه</p>
          </div>
        </div>

        {/* الربح المتوقع */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="p-1.5 bg-green-100 rounded-lg">
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-600">الأرباح المتوقعة</p>
            <p className="text-sm font-bold text-green-600">{expectedProfit.toLocaleString()} جنيه</p>
          </div>
        </div>

        {/* السعر */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="p-1.5 bg-purple-100 rounded-lg">
            <Tag className="h-4 w-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-600">سعر الدراسة</p>
            <p className="text-sm font-bold text-purple-600">{price} جنيه</p>
          </div>
        </div>

        {/* أزرار التحكم */}
        <div className="flex flex-col gap-2 mt-3">
          <Button 
            onClick={onSelect}
            className="w-full bg-green-600 hover:bg-green-700 text-white group text-sm py-1"
          >
            <ShoppingCart className="ml-2 h-3 w-3 transition-transform group-hover:scale-110" />
            طلب الدراسة
          </Button>
          <button 
            onClick={onClose}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </motion.div>
  );
};