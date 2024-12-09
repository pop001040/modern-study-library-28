import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Phone } from 'lucide-react';

export const ChatbotAvatar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => {
      navigate('/studies');
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
          <motion.img
            src="/lovable-uploads/82199cc1-f625-4721-8601-ee8757c421ad.png"
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
            onClick={() => setShowFAQ(!showFAQ)}
          />
          
          {showFAQ ? (
            <motion.div
              className="absolute -top-[32rem] right-0 bg-white p-4 rounded-lg shadow-md text-sm max-w-[400px] text-right max-h-[500px] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-green-600">الأسئلة الشائعة حول دراسة الجدوى</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>ما هي دراسة الجدوى؟</AccordionTrigger>
                  <AccordionContent>
                    دراسة الجدوى هي عملية تحليل شاملة للمشروع المقترح بهدف تقييم إمكانية تنفيذه بنجاح. تتضمن الدراسة تحديد ما إذا كان المشروع يستحق الاستثمار ويجب تنفيذه بناءً على تقييم للفرص والمخاطر المالية، السوقية، التقنية، والقانونية.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>هل هذه الدراسة تشمل كل جوانب المشروع؟</AccordionTrigger>
                  <AccordionContent>
                    نعم، دراسة الجدوى تشمل جميع جوانب المشروع الضرورية لضمان نجاحه. يتم تحليل الجوانب المالية، السوقية، التقنية، والتشغيلية، وكذلك المخاطر المحتملة التي قد تؤثر على تنفيذ المشروع.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>كم من الوقت يستغرق إعداد دراسة الجدوى؟</AccordionTrigger>
                  <AccordionContent>
                    مدة إعداد دراسة الجدوى تعتمد على حجم وتعقيد المشروع. عادةً ما يستغرق إعداد دراسة جدوى شاملة بين 2 إلى 4 أسابيع. قد تختلف المدة وفقًا لمتطلبات العميل وحجم البيانات المتاحة.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>ما هو محتوى دراسة الجدوى؟</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pr-4 space-y-2">
                      <li>التكاليف الأولية: تقييم التكاليف المتعلقة بتأسيس المشروع</li>
                      <li>تحليل السوق: دراسة احتياجات السوق، المنافسة، والجمهور المستهدف</li>
                      <li>التوقعات المالية: حساب الإيرادات المتوقعة والتكاليف التشغيلية</li>
                      <li>المخاطر: تحليل التحديات التي قد يواجهها المشروع وكيفية التعامل معها</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>ما هي تكلفة بدء المشروع؟</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pr-4 space-y-2">
                      <li>شراء المعدات والآلات</li>
                      <li>التراخيص والتصاريح</li>
                      <li>تكاليف التوظيف والتدريب</li>
                      <li>تأثيث وتجهيز المكان</li>
                      <li>أي تكاليف أخرى متعلقة بتأسيس المشروع</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-4 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={handleClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    ابدأ مشروعك
                  </Button>
                </motion.div>

                <div className="flex items-center justify-center gap-2 text-green-600">
                  <span>للتواصل معنا:</span>
                  <Phone className="h-4 w-4" />
                  <a href="tel:01030435987" className="hover:underline">01030435987</a>
                </div>
              </div>

              <div className="absolute bottom-0 right-4 w-4 h-4 bg-white transform rotate-45 translate-y-2" />
            </motion.div>
          ) : (
            <motion.div
              className="absolute -top-32 right-0 bg-white p-4 rounded-lg shadow-md text-sm max-w-[250px] text-right"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="mb-3">مرحباً! هل ترغب في استعراض دراسات الجدوى المتاحة؟</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  ابدأ مشروعك
                </Button>
              </motion.div>
              <div className="absolute bottom-0 right-4 w-4 h-4 bg-white transform rotate-45 translate-y-2" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};