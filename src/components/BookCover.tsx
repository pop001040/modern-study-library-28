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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-sm shadow-lg border border-blue-300/30 book-pages backdrop-blur-sm">
            <div className="h-full p-2 flex flex-col justify-between bg-gradient-to-t from-blue-900/20 to-transparent">
              <div className="space-y-1">
                {/* عنوان الكتاب */}
                <h3 className="text-[10px] font-bold text-white text-right leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          
          {/* جانب الكتاب */}
          <div 
            className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-blue-300 to-blue-500 transform origin-right" 
            style={{ transform: 'rotateY(-20deg) translateZ(-1px)' }} 
          />
          
          {/* زر الطلب */}
          <div className="absolute -bottom-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleSelect}
              className="text-[8px] bg-gradient-to-r from-blue-600 to-blue-700 text-white px-2 py-1 rounded-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300 w-full shadow-lg transform hover:scale-105"
            >
              طلب الدراسة
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};