import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChatHeader } from './chat/ChatHeader';
import { ChatMessage } from './chat/ChatMessage';
import { ChatQuestions } from './chat/ChatQuestions';
import { ChatActions } from './chat/ChatActions';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

export const ChatbotAvatar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "مرحباً! كيف يمكنني مساعدتك اليوم؟",
      sender: 'bot'
    }
  ]);
  const [minimized, setMinimized] = useState(false);

  const questions = [
    "ما هي دراسة الجدوى؟",
    "هل هذه الدراسة تشمل كل جوانب المشروع؟",
    "كم من الوقت يستغرق إعداد دراسة الجدوى؟",
    "ما هو محتوى دراسة الجدوى؟",
    "ما هي تكلفة بدء المشروع؟",
    "ما هو العائد المتوقع على الاستثمار؟",
    "ما هو رأس المال الذي أحتاجه لبدء المشروع؟",
    "ما هي طرق الدفع المتاحة؟",
    "كيف يمكنني التواصل معكم؟"
  ];

  const answers = {
    "ما هي دراسة الجدوى؟": "دراسة الجدوى هي عملية تحليل شاملة للمشروع المقترح بهدف تقييم إمكانية تنفيذه بنجاح. تتضمن الدراسة تحديد ما إذا كان المشروع يستحق الاستثمار ويجب تنفيذه بناءً على تقييم للفرص والمخاطر المالية، السوقية، التقنية، والقانونية.",
    "هل هذه الدراسة تشمل كل جوانب المشروع؟": "نعم، دراسة الجدوى تشمل جميع جوانب المشروع الضرورية لضمان نجاحه. يتم تحليل الجوانب المالية، السوقية، التقنية، والتشغيلية، وكذلك المخاطر المحتملة التي قد تؤثر على تنفيذ المشروع.",
    "كم من الوقت يستغرق إعداد دراسة الجدوى؟": "يتم إعداد دراسة الجدوى خلال 24 ساعة من وقت الطلب.",
    "ما هو محتوى دراسة الجدوى؟": "دراسة الجدوى تتضمن: التكاليف الأولية، تحليل السوق، التوقعات المالية، وتحليل المخاطر المحتملة.",
    "ما هي تكلفة بدء المشروع؟": "تكلفة بدء المشروع تشمل: شراء المعدات والآلات، التراخيص والتصاريح، تكاليف التوظيف والتدريب، تأثيث وتجهيز المكان.",
    "ما هو العائد المتوقع على الاستثمار؟": "العائد على الاستثمار (ROI) هو مقياس يستخدم لتحديد الربح مقارنة بالمبلغ المستثمر. يُحسب بقسمة الإيرادات الصافية على الاستثمار الإجمالي × 100.",
    "ما هو رأس المال الذي أحتاجه لبدء المشروع؟": "يختلف رأس المال المطلوب حسب نوع وحجم المشروع. نقدم في دراسة الجدوى تفصيلاً كاملاً لرأس المال المطلوب، بما في ذلك التكاليف الثابتة والمتغيرة ورأس المال العامل.",
    "ما هي طرق الدفع المتاحة؟": "يمكنك التواصل معنا مباشرة عبر الواتساب على الرقم 01030435987 لمناقشة طرق الدفع المتاحة وتفاصيل الدفع.",
    "كيف يمكنني التواصل معكم؟": "يمكنك التواصل معنا عبر الواتساب على الرقم 01030435987 في أي وقت للاستفسار عن الخدمات أو طلب دراسة جدوى."
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setShowChat(true);
    setMinimized(false);
  };

  const handleQuestionClick = (question: string) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: question,
      sender: 'user'
    }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: answers[question as keyof typeof answers],
        sender: 'bot'
      }]);
    }, 500);
  };

  const handleStartProject = () => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: "رائع! سأساعدك في بدء مشروعك.",
      sender: 'bot'
    }]);
    setTimeout(() => {
      navigate('/studies');
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        {!showChat ? (
          <div className="relative cursor-pointer" onClick={handleClick}>
            <motion.img
              src="/lovable-uploads/82199cc1-f625-4721-8601-ee8757c421ad.png"
              alt="مساعد Green Light"
              className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-lg"
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </div>
        ) : (
          <motion.div
            className={`bg-white rounded-lg shadow-xl ${minimized ? 'w-64 h-16' : 'w-96 h-[600px]'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ChatHeader 
              onMinimize={() => setMinimized(!minimized)} 
              onClose={() => setShowChat(false)} 
            />

            {!minimized && (
              <>
                <div className="p-4 h-[400px] overflow-y-auto space-y-4" dir="rtl">
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      text={message.text}
                      sender={message.sender}
                    />
                  ))}
                </div>

                <div className="p-4 border-t">
                  <ChatQuestions
                    questions={questions}
                    onQuestionClick={handleQuestionClick}
                  />
                </div>

                <ChatActions onStartProject={handleStartProject} />
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};