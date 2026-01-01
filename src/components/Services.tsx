import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Briefcase',
    title: 'Консалтинг',
    description: 'Профессиональные консультации по развитию вашего бизнеса с учётом отзывов клиентов'
  },
  {
    icon: 'TrendingUp',
    title: 'Аналитика отзывов',
    description: 'Глубокий анализ обратной связи для улучшения качества ваших продуктов и услуг'
  },
  {
    icon: 'Shield',
    title: 'Модерация',
    description: 'Проверка и фильтрация отзывов для защиты от спама и недобросовестной конкуренции'
  },
  {
    icon: 'Bell',
    title: 'Уведомления',
    description: 'Мгновенные оповещения о новых отзывах через email, SMS и мессенджеры'
  },
  {
    icon: 'BarChart3',
    title: 'Отчётность',
    description: 'Детальные отчёты по динамике рейтингов и статистике отзывов за любой период'
  },
  {
    icon: 'Sparkles',
    title: 'Интеграции',
    description: 'Подключение системы отзывов к вашему сайту, приложению или CRM-системе'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр решений для управления репутацией вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border-2 hover:border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
