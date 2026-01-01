import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Star" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-foreground">ReviewHub</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
            Связаться с нами
          </Button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-left text-foreground hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full">
              Связаться с нами
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
