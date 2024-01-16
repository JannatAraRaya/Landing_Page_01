import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Testimonial {
  image: string;
  review: string;
  rating: string; 
}

interface TestimonialContextProps {
  testimonials: Testimonial[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface TestimonialProviderProps {
  children: ReactNode;
}

const TestimonialContext = createContext<TestimonialContextProps | undefined>(undefined);

export const TestimonialProvider: React.FC<TestimonialProviderProps> = ({ children }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('./data/testimonial.json') 
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTestimonials(data);
      })
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []); 

  return (
    <TestimonialContext.Provider value={{ testimonials, currentIndex, setCurrentIndex }}>
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonialContext = () => {
  const context = useContext(TestimonialContext);
  if (!context) {
    throw new Error('useTestimonialContext must be used within a TestimonialProvider');
  }
  return context;
};
