const app = new Vue({
    el: "#vue-app",
    data: {
        isAboutPage: false,
        myProjects: __MY_PROJECTS__
    },
    mounted: function () {
        setTimeout(() => {
            requestAnimationFrame(() => {
                document.body.classList.remove("hidden");
            });
        }, 10);
    },
});