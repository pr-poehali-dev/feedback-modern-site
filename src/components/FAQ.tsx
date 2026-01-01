import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Как оставить отзыв?',
    answer: 'Заполните форму обратной связи в разделе "Контакты" или нажмите кнопку "Оставить отзыв" на главной странице. Укажите ваше имя, email и текст отзыва, а также поставьте оценку от 1 до 5 звёзд.'
  },
  {
    question: 'Модерируются ли отзывы?',
    answer: 'Да, все отзывы проходят модерацию для проверки на спам и соответствие правилам. Мы публикуем как положительные, так и конструктивные критические отзывы, если они написаны корректно.'
  },
  {
    question: 'Можно ли изменить или удалить свой отзыв?',
    answer: 'Да, вы можете связаться с нами через форму обратной связи, указав email, с которого оставляли отзыв, и мы поможем его отредактировать или удалить.'
  },
  {
    question: 'Как быстро появится мой отзыв на сайте?',
    answer: 'Обычно модерация занимает от 24 до 48 часов. После одобрения ваш отзыв сразу появится на странице с отзывами.'
  },
  {
    question: 'Можно ли прикрепить фото к отзыву?',
    answer: 'В текущей версии платформы эта функция находится в разработке. Скоро вы сможете добавлять изображения к своим отзывам.'
  },
  {
    question: 'Как рассчитывается средний рейтинг?',
    answer: 'Средний рейтинг рассчитывается как среднее арифметическое всех оценок от клиентов. Каждый отзыв влияет на общий рейтинг одинаково, независимо от даты публикации.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на популярные вопросы о нашем сервисе
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border-2 rounded-xl px-6 hover:border-primary transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
