import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Star" className="text-primary" size={28} />
              <span className="text-2xl font-bold">ReviewHub</span>
            </div>
            <p className="text-background/80 mb-4">
              Платформа для сбора и управления отзывами. Помогаем бизнесу стать лучше через честную обратную связь.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-background/80 hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-background/80">
              <li>info@reviewhub.ru</li>
              <li>+7 (495) 123-45-67</li>
              <li>г. Москва</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} ReviewHub. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
