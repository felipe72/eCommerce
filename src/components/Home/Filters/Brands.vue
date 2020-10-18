<template>
  <div class="mb-4">
    <p class="my-2">
      Brands
    </p>
    <v-checkbox
      v-for="category in categories"
      :key="category.label"
      v-model="selected"
      dense
      multiple
      hide-details
      :label="category.label"
      :value="category"
      class="my-1"
    >
      <template #append>
        <p class="my-0 caption">
          42
        </p>
      </template>
    </v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'Brands',
  data() {
    return {
      selected: [],
      categories: [
        { label: 'Insigni', value: 'insigni' },
        { label: 'Samsung', value: 'samsung' },
        { label: 'Apple', value: 'apple' },
        { label: 'HP', value: 'hp' },
        { label: 'Sony', value: 'sony' },
        { label: 'Metra', value: 'metra' },
        { label: 'Dyne', value: 'dyne' },
        { label: 'LG', value: 'lg' },
        { label: 'Canon', value: 'canon' },
        { label: 'Speck', value: 'speck' },
      ]
    }
  }
};
</script>
