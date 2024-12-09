import { motion } from 'framer-motion';

interface ClassicCounterProps {
  soldStudies: number;
  totalAmount: number;
}

export const ClassicCounter = ({ soldStudies, totalAmount }: ClassicCounterProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 p-4 shadow-xl"
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
          <div className="relative">
            <h4 className="text-lg font-bold mb-2 text-primary">الدراسات المختارة</h4>
            <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
              {String(soldStudies).padStart(2, '0').split('').map((digit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center"
                >
                  <span className="text-3xl font-bold text-primary">{digit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-secondary/10 p-4 shadow-xl"
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
          <div className="relative">
            <h4 className="text-lg font-bold mb-2 text-secondary">المبلغ الإجمالي</h4>
            <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
              {String(totalAmount).padStart(4, '0').split('').map((digit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-10 h-14 bg-white rounded-lg shadow-lg flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-secondary">{digit}</span>
                </motion.div>
              ))}
              <div className="mr-2 text-lg font-bold text-secondary">جنيه</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};