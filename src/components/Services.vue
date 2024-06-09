<template>
  <section class="services">
    <div class="container">
      <h2 class="section-title">Наши услуги</h2>
      <div class="services-grid">
        <div class="service">
          <h3>Веб-разработка</h3>
          <p>Мы создаем красивые и функциональные веб-приложения для наших клиентов.</p>
        </div>
        <div class="service">
          <h3>Мобильная-разработка</h3>
          <p>Мы создаем современные мобильные приложения для iOS и Android, которые сочетают в себе высокую производительность, удобство использования и красивый дизайн.</p>
        </div>
        <div class="service">
          <h3>Дизайн</h3>
          <p>Наша команда дизайнеров поможет вам создать уникальный дизайн для вашего проекта.</p>
        </div>
        <div class="service">
          <h3>Аналитика</h3>
          <p>Мы проводим детальное изучение бизнес-процессов вашей компании, выявляем потребности и цели, а также формулируем требования к программному обеспечению для их достижения.</p>
        </div>
        <div class="service">
          <h3>Парсинг данных</h3>
          <p>Мы предоставляем услуги по парсингу данных с веб-сайтов, а также их структурированию и анализу для использования в вашем проекте.</p>
        </div>
        <div class="service">
          <h3>OutStaff</h3>
          <p>Наши лучшие IT-специалисты готовы взяться за любой Ваш проект.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesPage'
}
</script>

<style scoped>
.services {
  width: 100%;
  padding: 80px 0;
  background: linear-gradient(-1000grad, #8cb5ed, #de5060);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  color: #fff;
  font-size: 36px;
  margin-bottom: 30px;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.service {
  width: calc(33.3333% - 20px);
  margin-bottom: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.service:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.service p {
  font-size: 16px;
  color: #333;
}

@media screen and (max-width: 768px) {
  .services {
    padding: 3% 0;
  }

  .section-title {
    font-size: 2em;
  }

  .service {
    width: 30%;
    margin: 1% 3% 2%;
    padding: 1% 7%;
    border-radius: 4%;
  }

  .service h3 {
    font-size: 120%; /* Уменьшим размер заголовка для мобильных устройств */
  }

  .service p {
    font-size: 67%; /* Уменьшим размер текста для мобильных устройств */
  }
}
</style>



