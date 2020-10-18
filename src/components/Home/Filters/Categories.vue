<template>
  <div class="mb-4">
    <p class="my-2">
      Categories
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
  name: 'Categories',
  data() {
    return {
      selected: [],
      categories: [
        { label: 'Cell Phones', must: ['cellphone'] },
        { label: 'Computers & Tablets', should: ['computer', 'tablet'] },
        { label: 'Cell Phone Accessories', must: ['cellphone', 'accessory'] },
        { label: 'Appliances', must: ['appliance'] },
        { label: 'Audio', must: ['audio'] },
        { label: 'Iphone', must: ['iphone', 'accessory'] },
        { label: 'Cameras & Camcorder', should: ['camera', 'camcorder'] },
        { label: 'Iphone cases & clips', must: ['iphone', 'case'] },
        { label: 'TV & Home Theater', should: ['tv', 'hometheater'] },
        { label: 'Small Kitchen Appliances', must: ['kitchen', 'appliance'] },
      ]
    }
  }
};
</script>
