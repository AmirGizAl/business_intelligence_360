<template>
  <header class="header">
    <div class="container">
      <img ref="logo" src="../assets/logo.png" alt="Kazan Techno" class="logo" @mouseover="increaseLogo" @mouseleave="resetLogo">
      <h1 class="slogan">
        <p class="first-slogan">Бизнес Интеллект 360</p>
        <p class="second-slogan">Умное развитие Вашего бизнеса</p>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  methods: {
    increaseLogo() {
      if (this.$refs.logo) {
        this.$refs.logo.style.transform = 'scale(1.1)';
      }
    },
    resetLogo() {
      if (this.$refs.logo) {
        this.$refs.logo.style.transform = 'scale(1)';
      }
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  padding: 10px 0;
  background: linear-gradient(135deg, #111e27, #111e27);
}

.container {
  display: flex;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  width: 200px;
  transition: transform 0.3s ease-in-out;
}

.slogan {
  color: #c3dbfa;
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
  margin: 0 200px;
}

.first-slogan {
  font-size: 45px;
  font-weight: 1000;
}

.second-slogan {
  font-size: 30px;
  margin-left: 15px;
  font-weight: 700;
}

.slogan:hover {
  opacity: 1;
}

.logo:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column; /* Столбцовая ориентация для мобильных устройств */
    align-items: center; /* Центрируем элементы по горизонтали */
  }

  .logo {
    width: 95%; /* Увеличим размер логотипа */
    margin-bottom: 1%; /* Добавляем отступ снизу */
  }

  .slogan {
    text-align: center; /* Центрируем текст */
    margin: 0 1% 0; /* Убираем боковые отступы */
    text-indent: 0; /* Добавим красную строку */
  }

  .first-slogan {
    font-size: 85%;
  }

  .second-slogan {
    font-size: 60%;
    margin-left: 0; /* Убираем левый отступ для второго абзаца */
  }
}
</style>



