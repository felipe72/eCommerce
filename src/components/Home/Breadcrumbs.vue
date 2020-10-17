<template>
  <v-breadcrumbs
    :items="items"
    divider=">>"
  >
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        <v-btn
          v-if="item.icon"
          icon
          small
        >
          <v-icon>mdi-home-variant-outline</v-icon>
        </v-btn>
        <p
          v-else
          class="mb-0"
        >
          {{ item.text }}
        </p>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
