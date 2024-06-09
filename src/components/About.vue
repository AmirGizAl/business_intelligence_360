<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title">О нас</h2>
      <div class="content">
        <p>Компания "Kazan Techno" - молодая и динамичная команда профессионалов в сфере информационных технологий. Мы стремимся к инновациям и качеству во всем, что делаем.</p>
        <p>Наша цель - создать уникальные и актуальные решения для наших клиентов, помогая им достигать своих целей и успешно развиваться в цифровом мире.</p>
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
  background: linear-gradient(-1000grad, #f1f8fe, #8cb5ed);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  color: #111F22;
  font-size: 36px;
  margin-bottom: 30px;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.6;
  color: #555;
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


