import { motion } from 'framer-motion';

interface ClassicCounterProps {
  soldStudies: number;
  totalAmount: number;
}

export const ClassicCounter = ({ soldStudies, totalAmount }: ClassicCounterProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-3 text-primary">عدد الدراسات المباعة</h4>
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary"
          >
            {String(soldStudies).padStart(4, '0')}
          </motion.div>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-3 text-primary">إجمالي المبيعات</h4>
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-primary"
          >
            {String(totalAmount).padStart(6, '0')}
            <span className="text-lg mr-1">جنيه</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};