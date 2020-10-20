<template>
  <div class="d-flex flex-column align-stretch">
    <v-btn
      v-for="rating in aggregatedRatings"
      :key="rating.stars"
      text
      class="px-0"
      @click="setRating(rating.stars)"
    >
      <v-rating
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        half-icon="mdi-star-half-full"
        half-increments
        dense
        readonly
        length="5"
        size="20"
        :value="rating.stars"
      />
      <p class="my-0 ml-1">
        &amp; UP
      </p>
      <p class="my-0 ml-auto caption">
        {{ rating.count }}
      </p>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import sumBy from 'lodash/sumBy';

export default {
  name: 'Rating',
  computed: {
    ...mapGetters(['ratings']),
    aggregatedRatings() {
      const { ratings } = this;
      return ratings.map((x, i) => ({
        ...x,
        count: sumBy(ratings.slice(0, i + 1), 'count'),
      }));
    },
  },
  methods: {
    ...mapActions(['setRating'])
  }
};
</script>
