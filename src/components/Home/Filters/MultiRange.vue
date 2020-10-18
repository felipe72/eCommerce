<template>
  <div>
    <p>Multi Range</p>
    <v-radio-group v-model="selected">
      <v-radio
        v-for="({ label }, index) in options"
        :key="label"
        :value="index"
        :label="label"
      />
    </v-radio-group>
    <div v-show="options[selected].label === 'Custom'">
      <div>
        <p> Custom range </p>
        <p> ${{ customRange[0] }}  - ${{ customRange[1] }} </p>
      </div>
      <v-range-slider
        v-model="customRange"
        :max="600"
        :min="20"
        :step="10"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiRange',
  data() {
    return {
      selected: 4,
      customRange: [0, 1000],
      options: [
        { label: '$0 - $10', min: 0, max: 10 },
        { label: '$10 - $100', min: 10, max: 100 },
        { label: '$100 - $500', min: 100, max: 500 },
        { label: '$500 and higher', min: 500, max: -1 },
        { label: 'All', min: 0, max: -1 },
        { label: 'Custom' },
      ],
    };
  },
};
</script>
