<template>
  <v-card
    class="d-flex"
    min-width="775px"
  >
    <avatar />
    <info />
    <v-divider
      vertical
      class="ml-4"
    />
    <actions />
  </v-card>
</template>

<script>
import Avatar from './Avatar';
import Info from './Info';
import Actions from './Actions';

export default {
  name: 'LongItem',
  components: { Avatar, Info, Actions },
};
</script>
