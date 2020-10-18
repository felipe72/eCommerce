<template>
  <div class="d-flex flex-column align-stretch">
    <v-btn
      v-for="n in [5, 4, 3]"
      :key="n"
      text
      class="px-0"
    >
      <v-rating
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        half-icon="mdi-star-half-full"
        dense
        readonly
        length="5"
        size="24"
        :value="n"
      />
      <p class="my-0 ml-1 ">
        &amp; UP
      </p>
      <p class="my-0 ml-auto caption">
        42
      </p>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Rating',
};
</script>
