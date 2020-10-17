<template>
  <v-card>
    <v-card-text>
      <multi-range />
    </v-card-text>
  </v-card>
</template>

<script>
import MultiRange from './MultiRange';

export default {
  name: 'Filters',
  components: { MultiRange },
}
</script>
