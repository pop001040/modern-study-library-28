import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export const ChatbotAvatar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    // تأخير ظهور الشات بوت لمدة ثانيتين
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => {
      navigate('/studies');
      // التمرير إلى قسم الدراسات
      window.scrollTo({
        top: document.getElementById('studies-section')?.offsetTop || 0,
        behavior: 'smooth'
      });
    }, 1000);
  };

  const handleHover = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-8 right-8 cursor-pointer z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onHoverStart={handleHover}
      >
        <div className="relative">
          {/* صورة الشخصية */}
          <motion.img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            alt="مساعد Green Light"
            className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-lg"
            animate={isWaving ? {
              rotate: [0, -10, 10, -10, 10, 0],
              transition: {
                duration: 1,
                ease: "easeInOut"
              }
            } : {
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          
          {/* فقاعة الكلام */}
          <motion.div
            className="absolute -top-32 right-0 bg-white p-4 rounded-lg shadow-md text-sm max-w-[250px] text-right"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="mb-3">مرحباً! هل ترغب في استعراض دراسات الجدوى المتاحة؟</p>
            <Button 
              onClick={handleClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              نعم، أرغب في ذلك
            </Button>
            <div className="absolute bottom-0 right-4 w-4 h-4 bg-white transform rotate-45 translate-y-2" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};