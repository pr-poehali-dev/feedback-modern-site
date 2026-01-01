import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    name: 'Мария Петрова',
    rating: 5,
    date: '15 декабря 2024',
    text: 'Отличный сервис! Быстро, качественно и профессионально. Рекомендую всем!',
    initials: 'МП'
  },
  {
    id: 2,
    name: 'Александр Иванов',
    rating: 5,
    date: '10 декабря 2024',
    text: 'Очень доволен результатом. Команда профессионалов своего дела. Все сделали точно в срок.',
    initials: 'АИ'
  },
  {
    id: 3,
    name: 'Елена Сидорова',
    rating: 4,
    date: '5 декабря 2024',
    text: 'Хороший уровень обслуживания. Единственное - хотелось бы чуть быстрее, но в целом всё отлично.',
    initials: 'ЕС'
  },
  {
    id: 4,
    name: 'Дмитрий Козлов',
    rating: 5,
    date: '1 декабря 2024',
    text: 'Превосходно! Превзошли все ожидания. Обязательно обращусь еще раз.',
    initials: 'ДК'
  },
  {
    id: 5,
    name: 'Ольга Морозова',
    rating: 5,
    date: '28 ноября 2024',
    text: 'Профессиональный подход к делу. Всё объяснили, показали, помогли с выбором.',
    initials: 'ОМ'
  },
  {
    id: 6,
    name: 'Сергей Волков',
    rating: 4,
    date: '25 ноября 2024',
    text: 'Качественная работа, адекватные цены. Небольшая задержка по срокам, но результат того стоил.',
    initials: 'СВ'
  }
];

const Reviews = () => {
  const [filter, setFilter] = useState<number | null>(null);

  const filteredReviews = filter 
    ? mockReviews.filter(review => review.rating === filter)
    : mockReviews;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={18}
            className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные истории реальных людей
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button
            variant={filter === null ? 'default' : 'outline'}
            onClick={() => setFilter(null)}
          >
            Все отзывы
          </Button>
          <Button
            variant={filter === 5 ? 'default' : 'outline'}
            onClick={() => setFilter(5)}
          >
            <Icon name="Star" size={16} className="mr-2" />
            5 звёзд
          </Button>
          <Button
            variant={filter === 4 ? 'default' : 'outline'}
            onClick={() => setFilter(4)}
          >
            <Icon name="Star" size={16} className="mr-2" />
            4 звезды
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
