<template>
  <section class="services">
    <div class="container">
      <h2 class="section-title">Основные возможности проекта:
      </h2>
      <div class="services-grid">
        <div class="service">
          <h3>Анализ бизнеса:</h3>
          <p>Платформа проводит анализ финансовых показателей, рыночных тенденций, конкурентной среды и других факторов, влияющих на успех предприятия.</p>
        </div>
        <div class="service">
          <h3>Прогнозирование и предсказание:</h3>
          <p>"Бизнес Интеллект 360: Умное Развитие Бизнеса" использует алгоритмы машинного обучения для прогнозирования спроса на товары или услуги, доходов и затрат, помогая предпринимателям принимать обоснованные решения.</p>
        </div>
        <div class="service">
          <h3>Индивидуальные рекомендации:</h3>
          <p>На основе анализа данных и прогнозов, сервис предоставляет индивидуальные рекомендации и стратегии для оптимизации бизнеса и повышения его конкурентоспособности.</p>
        </div>
        <div class="service">
          <h3>Составление бизнес-планов:</h3>
          <p>Платформа помогает предпринимателям составлять индивидуальные бизнес-планы, учитывая их уникальные потребности, цели и характеристики бизнеса.</p>
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
  background: linear-gradient(-1000grad, #217c9e, #f43446);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  color: #fff;
  font-size: 36px;
  margin-bottom: 100px;
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



