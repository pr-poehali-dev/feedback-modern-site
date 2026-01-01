import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const team = [
  {
    name: 'Анна Соколова',
    role: 'CEO & Основатель',
    initials: 'АС'
  },
  {
    name: 'Михаил Лебедев',
    role: 'Директор по развитию',
    initials: 'МЛ'
  },
  {
    name: 'Ирина Новикова',
    role: 'Руководитель поддержки',
    initials: 'ИН'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            О нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создали платформу, которая помогает бизнесу становиться лучше через честные отзывы клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Наша миссия</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Создать прозрачную систему обратной связи, где каждый голос имеет значение. Мы верим, что честные отзывы — это основа доверия между бизнесом и клиентами.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              С 2020 года мы помогаем компаниям собирать, анализировать и использовать отзывы для роста и развития.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Users" className="mx-auto mb-4 text-primary" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Компаний</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Globe" className="mx-auto mb-4 text-primary" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Стран</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Award" className="mx-auto mb-4 text-primary" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Наград</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Icon name="Heart" className="mx-auto mb-4 text-primary" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Довольных</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Наша команда</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">{member.initials}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{member.name}</h4>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
