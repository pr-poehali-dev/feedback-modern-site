import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Отзывы, которым
            <span className="text-primary"> доверяют</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Система оценок и рейтингов для вашего бизнеса. Собирайте честные отзывы от реальных клиентов.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => scrollToSection('reviews')} className="text-lg">
              Посмотреть отзывы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg">
              Оставить отзыв
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up">
            <div className="bg-secondary/50 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <div className="text-muted-foreground">Средний рейтинг</div>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">2,543</div>
              <Icon name="MessageSquare" className="mx-auto mb-2 text-primary" size={28} />
              <div className="text-muted-foreground">Отзывов</div>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <Icon name="ThumbsUp" className="mx-auto mb-2 text-primary" size={28} />
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
