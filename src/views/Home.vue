<template>
  <div>
    <div>
      <Navbar/>
    </div>
    
    <div>
      <Carousel/>
    </div>

    <div>
      <Products/>
    </div>
    
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Products from '@/components/Products';
export default {
  name:'Home',
  components: {
    Navbar,
    Carousel,
    Footer,
    Products
    
  },
  
};
</script>

