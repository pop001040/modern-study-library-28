import { motion } from 'framer-motion';

interface BookCoverProps {
  title: string;
  onClick: () => void;
}

export const BookCover = ({ title, onClick }: BookCoverProps) => {
  return (
    <motion.div
      className="book-container cursor-pointer"
      onClick={onClick}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: -90 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-[60px] h-[90px] book-hover">
        <div className="absolute inset-0 bg-gradient-to-l from-[#8B4513] to-[#A0522D] rounded-sm shadow-xl border-r-2 border-[#DEB887]">
          <div className="h-full p-2 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-[#DEB887] rounded-full mx-auto" />
              <h3 className="text-[6px] font-bold text-[#DEB887] text-right leading-tight">{title}</h3>
            </div>
          </div>
        </div>
        <div 
          className="absolute inset-y-0 right-0 w-1 bg-[#DEB887]/20 transform origin-right" 
          style={{ transform: 'rotateY(-20deg) translateZ(-1px)' }} 
        />
      </div>
    </motion.div>
  );
};