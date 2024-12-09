import { motion } from 'framer-motion';

interface ClassicCounterProps {
  soldStudies: number;
  totalAmount: number;
}

export const ClassicCounter = ({ soldStudies, totalAmount }: ClassicCounterProps) => {
  return (
    <div className="classic-counter w-full max-w-md mx-auto text-center">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm mb-2">عدد الدراسات المباعة</h4>
          <div className="counter-digit">
            {String(soldStudies).padStart(4, '0')}
          </div>
        </div>
        <div>
          <h4 className="text-sm mb-2">إجمالي المبيعات</h4>
          <div className="counter-digit">
            {String(totalAmount).padStart(6, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};