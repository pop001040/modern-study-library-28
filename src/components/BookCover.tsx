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

const bookColors = [
  'from-[#8B4513] to-[#A0522D]',
  'from-[#654321] to-[#8B4513]',
  'from-[#A0522D] to-[#D2691E]',
  'from-[#8B4513] to-[#CD853F]',
  'from-[#D2691E] to-[#DEB887]',
];

export const BookCover = ({ title, description, onClick, onSelect }: BookCoverProps) => {
  const randomColor = bookColors[Math.floor(Math.random() * bookColors.length)];
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
          <div className={`absolute inset-0 bg-gradient-to-l ${randomColor} rounded-sm shadow-2xl border-r-2 border-[#DEB887] book-pages`}>
            <div className="h-full p-2 flex flex-col justify-between">
              <div className="space-y-1">
                {/* عنوان الكتاب */}
                <h3 className="text-[8px] font-bold text-[#DEB887] text-right leading-tight drop-shadow-sm">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          
          {/* جانب الكتاب */}
          <div 
            className="absolute inset-y-0 right-0 w-1 bg-[#DEB887]/20 transform origin-right" 
            style={{ transform: 'rotateY(-20deg) translateZ(-1px)' }} 
          />
          
          {/* زر الطلب */}
          <div className="absolute -bottom-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleSelect}
              className="text-[8px] bg-[#8B4513] text-[#DEB887] px-2 py-1 rounded-sm hover:bg-[#A0522D] transition-colors w-full shadow-lg"
            >
              طلب الدراسة
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};