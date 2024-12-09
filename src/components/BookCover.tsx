import { motion } from 'framer-motion';
import useSound from 'use-sound';
import hoverSound from '../assets/page-flip.mp3';
import selectSound from '../assets/book-select.mp3';

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
  
  // تكوين الأصوات مع حجم صوت أعلى
  const [playHover] = useSound(hoverSound, { 
    volume: 1.0,
    onplay: () => console.log('تشغيل صوت التحويم')
  });
  
  const [playSelect] = useSound(selectSound, { 
    volume: 1.0,
    onplay: () => console.log('تشغيل صوت الاختيار')
  });

  const handleClick = () => {
    console.log('تم النقر على الكتاب - تشغيل صوت الاختيار');
    playSelect();
    onClick();
  };

  const handleSelect = (e: React.MouseEvent) => {
    console.log('تم اختيار الكتاب - تشغيل صوت الاختيار');
    e.stopPropagation();
    playSelect();
    onSelect();
  };

  const handleHover = () => {
    console.log('تم التحويم على الكتاب - تشغيل صوت التحويم');
    playHover();
  };

  return (
    <div className="group perspective">
      <motion.div
        className="book-container cursor-pointer relative"
        onClick={handleClick}
        initial={{ rotateY: 0, y: 0 }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
        onHoverStart={handleHover}
      >
        <div className="relative w-[80px] h-[120px] book-hover">
          <motion.div
            className="absolute inset-0 bg-yellow-300/20 blur-md rounded-sm -z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
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
              onClick={handleSelect}
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