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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-900 rounded-lg shadow-lg border border-blue-300/30 book-pages backdrop-blur-sm overflow-hidden">
            {/* تأثير اللمعان */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-white/30 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="h-full p-2 flex flex-col justify-between bg-gradient-to-t from-blue-900/40 to-transparent relative">
              {/* زخرفة ذهبية */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600/0 via-yellow-400 to-yellow-600/0" />
              
              <div className="space-y-1">
                {/* عنوان الكتاب */}
                <h3 className="text-[11px] font-bold text-white text-right leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] font-['Noto Kufi Arabic']">
                  {title}
                </h3>
              </div>
              
              {/* زخرفة ذهبية سفلية */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600/0 via-yellow-400 to-yellow-600/0" />
            </div>
          </div>
          
          {/* جانب الكتاب */}
          <div 
            className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 transform origin-right rounded-r-sm" 
            style={{ transform: 'rotateY(-20deg) translateZ(-1px)' }} 
          />
          
          {/* زر الطلب */}
          <div className="absolute -bottom-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleSelect}
              className="text-[8px] bg-gradient-to-r from-red-900 to-red-800 text-yellow-100 px-2 py-1 rounded-md hover:from-red-800 hover:to-red-700 transition-all duration-300 w-full shadow-lg transform hover:scale-105 border border-yellow-500/20"
            >
              طلب الدراسة
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};