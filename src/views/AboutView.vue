<template>
  <div class="about p-5">
    <aq-heading info="This is an information tooltip">Aquí están los deseos!</aq-heading>
    <v-client-table
      v-aq-spinner="isLoading"
      :options="tableOptions"
      :data="wishes"
      :columns="columns"
      ref="dataBaseTable"
      data-testid="dataBaseTable"
    >
      <template v-slot:wishes="{ row }">{{ row.wish }} </template>
    </v-client-table>
    \<button @click="updateWishes">add wishes</button>
  </div>
</template>

<script>
import WishesTableOptions from "@/constants/WishesTableOptions";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      tableOptions: {
        ...WishesTableOptions,
        headings: {
          wishes: "Deseos",
        },
        setColumns: this.setColumns,
      },
      columns: ["wishes"],
    };
  },
  computed: {
    ...mapState(["wishes"]),
  },
  methods: {
    ...mapActions(["updateWishes"]),
  },
  mounted() {
    this.updateWishes();
  },
};
</script>
