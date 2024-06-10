<template>
  <section class="contact">
    <div class="container">
      <h2 class="section-title">Сотрудничество</h2>
      <div class="content">
        <p>Телефон: <a href="tel:+7(965)580-37-65">+7(965)580-37-65</a></p>
        <p>Email: <a href="mailto:amirxan.gizatullin@bk.ru">amirxan.gizatullin@bk.ru</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact {
  width: 100%;
  padding: 80px 0;
  background: linear-gradient(-1000grad, #f43446, #8cb5ed);
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
  max-width: 600px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
  color: #111f22;
}

@media screen and (max-width: 768px) {
  .contact {
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



