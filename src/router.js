import { createRouter, createWebHistory } from "vue-router";

import ProjectsPage from "./pages/Projects.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/Projects",
            name:"Index",
            component: ProjectsPage,
        }
    ]


});
export { router };