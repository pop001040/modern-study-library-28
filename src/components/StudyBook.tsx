import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BookCover } from './BookCover';
import { BookPages } from './BookPages';

interface StudyBookProps {
  title: string;
  capital: number;
  expectedProfit: number;
  price: number;
  onSelect: () => void;
}

export const StudyBook = ({ title, capital, expectedProfit, price, onSelect }: StudyBookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative perspective" dir="rtl">
      <AnimatePresence>
        {!isOpen ? (
          <BookCover title={title} onClick={handleClick} />
        ) : (
          <BookPages
            title={title}
            capital={capital}
            expectedProfit={expectedProfit}
            price={price}
            onClose={handleClick}
            onSelect={onSelect}
          />
        )}
      </AnimatePresence>
    </div>
  );
};