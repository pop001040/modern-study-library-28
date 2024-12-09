import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Phone, X, Send, MinusCircle } from 'lucide-react';

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
  ];

  const answers = {
    "ما هي دراسة الجدوى؟": "دراسة الجدوى هي عملية تحليل شاملة للمشروع المقترح بهدف تقييم إمكانية تنفيذه بنجاح. تتضمن الدراسة تحديد ما إذا كان المشروع يستحق الاستثمار ويجب تنفيذه بناءً على تقييم للفرص والمخاطر المالية، السوقية، التقنية، والقانونية.",
    "هل هذه الدراسة تشمل كل جوانب المشروع؟": "نعم، دراسة الجدوى تشمل جميع جوانب المشروع الضرورية لضمان نجاحه. يتم تحليل الجوانب المالية، السوقية، التقنية، والتشغيلية، وكذلك المخاطر المحتملة التي قد تؤثر على تنفيذ المشروع.",
    "كم من الوقت يستغرق إعداد دراسة الجدوى؟": "مدة إعداد دراسة الجدوى تعتمد على حجم وتعقيد المشروع. عادةً ما يستغرق إعداد دراسة جدوى شاملة بين 2 إلى 4 أسابيع. قد تختلف المدة وفقًا لمتطلبات العميل وحجم البيانات المتاحة.",
    "ما هو محتوى دراسة الجدوى؟": "دراسة الجدوى تتضمن: التكاليف الأولية، تحليل السوق، التوقعات المالية، وتحليل المخاطر المحتملة.",
    "ما هي تكلفة بدء المشروع؟": "تكلفة بدء المشروع تشمل: شراء المعدات والآلات، التراخيص والتصاريح، تكاليف التوظيف والتدريب، تأثيث وتجهيز المكان.",
    "ما هو العائد المتوقع على الاستثمار؟": "العائد على الاستثمار (ROI) هو مقياس يستخدم لتحديد الربح مقارنة بالمبلغ المستثمر. يُحسب بقسمة الإيرادات الصافية على الاستثمار الإجمالي × 100.",
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
    // Add the user's question to messages
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: question,
      sender: 'user'
    }]);

    // Add the bot's answer after a short delay
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

  const handleMinimize = () => {
    setMinimized(!minimized);
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
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b bg-green-500 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <img
                  src="/lovable-uploads/82199cc1-f625-4721-8601-ee8757c421ad.png"
                  alt="مساعد Green Light"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <span className="font-bold">مساعد Green Light</span>
              </div>
              <div className="flex gap-2">
                <button onClick={handleMinimize}>
                  <MinusCircle className="w-6 h-6" />
                </button>
                <button onClick={() => setShowChat(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Chat Messages */}
                <div className="p-4 h-[400px] overflow-y-auto space-y-4" dir="rtl">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'bot'
                            ? 'bg-gray-100'
                            : 'bg-green-500 text-white'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Questions Buttons */}
                <div className="p-4 border-t">
                  <div className="grid grid-cols-1 gap-2">
                    {questions.map((question) => (
                      <Button
                        key={question}
                        variant="outline"
                        className="text-right justify-start hover:bg-green-50"
                        onClick={() => handleQuestionClick(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4 border-t space-y-4">
                  <Button 
                    onClick={handleStartProject}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    ابدأ مشروعك
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <span>للتواصل معنا:</span>
                    <Phone className="h-4 w-4" />
                    <a href="tel:01030435987" className="hover:underline">01030435987</a>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};