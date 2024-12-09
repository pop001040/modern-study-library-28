import { motion } from 'framer-motion';

interface BookCoverProps {
  title: string;
  description: string;
  color: string;
  onClick: () => void;
  onSelect: () => void;
}

const bookColors = [
  'from-[#8B4513] to-[#A0522D]',
  'from-[#654321] to-[#8B4513]',
  'from-[#A0522D] to-[#D2691E]',
  'from-[#8B4513] to-[#CD853F]',
  'from-[#D2691E] to-[#DEB887]',
];

export const BookCover = ({ title, description, onClick, onSelect }: BookCoverProps) => {
  const randomColor = bookColors[Math.floor(Math.random() * bookColors.length)];

  return (
    <div className="group perspective">
      <motion.div
        className="book-container cursor-pointer relative"
        onClick={onClick}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 0 }}
        exit={{ rotateY: -90 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, translateY: -5 }}
      >
        <div className="relative w-[80px] h-[120px] book-hover transform transition-all duration-300 group-hover:translate-y-[-5px]">
          <div className={`absolute inset-0 bg-gradient-to-l ${randomColor} rounded-sm shadow-2xl border-r-2 border-[#DEB887]`}>
            <div className="h-full p-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-[#DEB887] rounded-full mx-auto" />
                <h3 className="text-[8px] font-bold text-[#DEB887] text-right leading-tight">{title}</h3>
                <p className="text-[6px] text-[#DEB887]/80 text-right mt-1">{description}</p>
              </div>
            </div>
          </div>
          <div 
            className="absolute inset-y-0 right-0 w-1 bg-[#DEB887]/20 transform origin-right" 
            style={{ transform: 'rotateY(-20deg) translateZ(-1px)' }} 
          />
          <div className="absolute -bottom-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className="text-[8px] bg-[#8B4513] text-[#DEB887] px-2 py-1 rounded-sm hover:bg-[#A0522D] transition-colors w-full"
            >
              طلب الدراسة
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};