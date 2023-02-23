<script>
import TheHeader from "./components/TheHeader.vue";
import axios from "axios";
import { DOMDirectiveTransforms } from "@vue/compiler-dom";
import { useAttrs } from "vue";


export default {
  components: { TheHeader },
  data() {
    return {

      projects: []

    };

  },
  methods: {
    fetchprojects() {
      axios.get("http://127.0.0.1:8000/api/projects")
        .then((resp) => {
          this.projects = (resp.data.projects);

        })
    }
  },
  mounted() {
    this.fetchprojects();

  }

};
</script>

<template>
  <the-header></the-header>
  <RouterView :projects="projects"></RouterView>
<!--   <h1>mio htmllll</h1>
  <div class="container">
    <div class="row row-cols-4 g-5">
      <div class="col" v-for="project in projects" :key="project.id">
        <div class="card bg-success h-100 w-100" style="width: 18rem;">
          <img v-if="project.cover_img" class="card-img-top"
            src="http://127.0.0.1:8000 + '/storage/' + project.cover_img)" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">name: {{ project.name }}</h4>
            <p class="card-text">description: {{ project.description }}</p>
            <h5 class="card-text text-light">git link: {{ project.github_link }}</h5>
            <h5 class="card-text text-light mb-5">type: {{ project.github_link }}</h5>
            <a href="#" class="btn btn-primary ">Go somewhere</a>
          </div>
        </div>



      </div>
    </div>
  </div> -->
</template>

<style lang="scss">
@use "./generic.scss"
</style>
