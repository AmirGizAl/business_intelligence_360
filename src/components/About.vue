<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title">О проекте</h2>
      <div class="content">
        <p>"Бизнес Интеллект 360: Умное Развитие Бизнеса" - инновационный сервис, созданный для обеспечения всесторонней поддержки предпринимателям и малому бизнесу в их стремлении к эффективному развитию. С применением передовых методов машинного обучения, анализа данных и геоаналитики населенного пункта, сервис анализирует различные аспекты бизнеса, включая финансовые показатели, тенденции рынка, потребительский спрос и конкурентную среду. На основе этих данных "Бизнес Интеллект 360: Умное Развитие Бизнеса" предлагает индивидуальные рекомендации и составляет бизнес-планы, способствуя принятию информированных решений предпринимателями.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about {
  width: 100%;
  padding: 80px 0;
  background: linear-gradient(-1000grad, #254b6f, #217c9e);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  color: #f1f8fe;
  font-size: 36px;
  margin-bottom: 30px;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.6;
  color: #f1f8fe;
}

@media screen and (max-width: 768px) {
  .about {
    padding: 10% 0;
  }

  .section-title {
    font-size: 2em; /* Уменьшаем размер заголовка для мобильных устройств */
  }

  .content {
    font-size: 100%; /* Уменьшаем размер текста для мобильных устройств */
    margin: 0 20px; /* Уменьшаем боковые отступы */
  }
}
</style>


