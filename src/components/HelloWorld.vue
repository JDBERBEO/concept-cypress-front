<!-- eslint-disable quotes -->
<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <aq-card>
        <aq-card-header>
          <template #title>
            <aq-subheading>AGREGAR DESEO DE FIN DE AÑO</aq-subheading>
          </template>
        </aq-card-header>
        <aq-card-content>
          {{ currentWish }}
          <aq-text-editor
            v-model="currentWish"
            id="modalTextEditor"
            placeholder="Inserta tu deseo"
            :isPlainText="true"
            :height="100"
            :toolbar="toolbar"
            data-testid="description"
        /></aq-card-content>
        <aq-card-footer
          ><aq-button color="blue" @click="createNewWish(currentWish)"
            >confirm</aq-button
          ></aq-card-footer
        >
      </aq-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      toolbar: [
        {
          name: "document",
          items: ["Undo", "-", "Redo"],
        },
      ],
      currentWish: "",
    };
  },
  methods: {
    ...mapActions(["createNewWish"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
