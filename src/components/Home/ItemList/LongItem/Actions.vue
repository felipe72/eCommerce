<template>
  <div class="d-flex flex-column justify-start">
    <div class="d-flex">
      <v-chip
        label
        small
        class="ma-2 px-2 ml-auto"
      >
        <p class="ma-0 mr-2">
          3.4
        </p>
        <v-icon small>
          mdi-star-outline
        </v-icon>
      </v-chip>
    </div>

    <p class="mb-0 mt-2 align-self-center">
      $399
    </p>
    <div class="d-flex mb-4 mt-n1 align-self-center">
      <v-icon small>
        mdi-cart-outline
      </v-icon>
      <p class="mb-0 caption">
        Free Shipping
      </p>
    </div>

    <v-btn class="mx-4 mb-2 mt-auto">
      <v-icon
        left
        dark
      >
        mdi-heart-outline
      </v-icon>
      WISHLIST
    </v-btn>

    <v-btn class="mx-4 mt-2 mb-4">
      <v-icon
        left
        dark
      >
        mdi-heart-outline
      </v-icon>
      ADD TO CART
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Actions',
};
</script>
