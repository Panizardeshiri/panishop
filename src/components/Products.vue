<template>
  <div>
    <b-container class="my-5 heart-loc">
      <b-row class="justify-content-center">
        <b-col
          md="4"
          sm="6"
          cols="10"
          v-for="product in products"
          :key="product.id"
        >
          <b-card
            :title="product.name"
            :img-src="product.imageUrl"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4"
          >
            <b-card-text>
              <p>قیمت: {{ product.price }} هزار دلار</p>
            </b-card-text>

            <b-row>
              <b-col>
                <b-button href="#" variant="secondary">
                  <b-icon icon="cart-plus-fill"></b-icon>
                </b-button>
              </b-col>
              <b-col lg="2" md="4" sm="3" cols="2">
                <b-icon
                  v-b-popover.hover.top="'افزودن به علاقه مندی ها'"
                  class="h2 heart-loc1"
                  icon="suit-heart-fill"
                  variant="danger"
                ></b-icon>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  created() {
    this.$store.dispatch("loadproducts");
  },
};
</script>

<style scoped>
.card .product-image {
  height: 300px;
}

.heart-loc1 {
  cursor: pointer;
}
</style>
