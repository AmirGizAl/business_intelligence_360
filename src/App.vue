<template>
  <div id="app">
    <Header/>
    <About/>
    <Services/>
    <Contact/>
  </div>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 "Бизнес Интеллект 360", г. Казань.</p>
    </div>
  </footer>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Services from '../../business_intelligence_360/src/components/Services.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Services,
    Contact
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  color: #111F22;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background: #f5f7fa;
}

.footer {
  background: linear-gradient(-1000grad, #8cb5ed, #8cb5ed);
  color: white;
  padding: 20px 0;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
</style>