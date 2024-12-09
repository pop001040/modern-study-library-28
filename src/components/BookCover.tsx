import { motion } from 'framer-motion';
import useSound from 'use-sound';
import hoverSound from '../assets/page-flip.mp3';
import selectSound from '../assets/book-select.mp3';

interface BookCoverProps {
  title: string;
  description: string;
  onClick: () => void;
  onSelect: () => void;
}

export const BookCover = ({ title, description, onClick, onSelect }: BookCoverProps) => {
  const [playHover] = useSound(hoverSound, { volume: 0.5 });
  const [playSelect] = useSound(selectSound, { volume: 0.5 });

  const handleClick = () => {
    playSelect();
    onClick();
  };

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSelect();
    onSelect();
  };

  const handleHover = () => {
    playHover();
  };

  return (
    <div className="group perspective">
      <motion.div
        className="book-container cursor-pointer relative"
        onClick={handleClick}
        initial={{ rotateY: 0, y: 0 }}
        whileHover={{ 
          rotateY: -20,
          y: -10,
          transition: { duration: 0.3 }
        }}
        onHoverStart={handleHover}
      >
        <div className="relative w-[80px] h-[120px]">
          {/* ظل الكتاب */}
          <div className="book-shadow" />
          
          {/* غلاف الكتاب */}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-600 to-blue-800 rounded-sm shadow-2xl border-r-2 border-blue-300 book-pages">
            <div className="h-full p-2 flex flex-col justify-between">
              <div className="space-y-1">
                {/* عنوان الكتاب */}
                <h3 className="text-[8px] font-bold text-blue-100 text-right leading-tight drop-shadow-sm">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          
          {/* جانب الكتاب */}
          <div 
            className="absolute inset-y-0 right-0 w-1 bg-blue-300/20 transform origin-right" 
            style={{ transform: 'rotateY(-20deg) translateZ(-1px)' }} 
          />
          
          {/* زر الطلب */}
          <div className="absolute -bottom-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleSelect}
              className="text-[8px] bg-blue-700 text-blue-100 px-2 py-1 rounded-sm hover:bg-blue-600 transition-colors w-full shadow-lg"
            >
              طلب الدراسة
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};