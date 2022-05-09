<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      title: 'Mercado Libre - Envíos Gratis en el día',
      meta: [
        { name: 'description', 
          content: 'Compre productos con Envío Gratis en el día en Mercado Libre. Encuentre miles de marcas y productos a precios increíbles.' 
        },
        { name: 'keywords', 
          content: 'mercadolibre comprar vender envio gratis busca encuentra' 
        },
      ]
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
* {
	background-color: white;
  margin: 0;
  padding: 0;
}
</style>
