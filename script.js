const app = new Vue({
    el: "#vue-app",
    data: {
        isAboutPage: false,
        myProjects: [
            {
                name: "JPATH",
                description: "Kolay bir şekilde json objesinin içerisinde gezinmenizi sağlar!",
                previewURL: "./images/previews/jpath.png", 
                siteURL: "https://thearmagan.github.io/JPATH",
                githubURL: "https://github.com/TheArmagan/JPATH"
            },
            {
                name: "DABOX",
                description: "Sınırsız miktarda dosya yükleyebildiğiniz bir site!",
                previewURL: "./images/previews/dabox.png", 
                siteURL: "https://da-box.herokuapp.com/",
                githubURL: ""
            },
            {
                name: "CLICKCOLOR",
                description: "Gerçek zamanlı olarak renk değiştirebildiğiniz ve renk değiştiğinde POST requesti attırabildiğiniz bir site.",
                previewURL: "./images/previews/clickcolor.png", 
                siteURL: "https://clickcolor.herokuapp.com/",
                githubURL: "https://github.com/TheArmagan/clickcolor"
            },
            {
                name: "GeForce Now - Supported Games",
                description: "Nvidia GeForce NOW tarafından desteklenen oyunları listelemenizi ve filtrelemenizi sağlar.",
                previewURL: "./images/previews/ngfsg.png", 
                siteURL: "https://thearmagan.github.io/nvidia-geforce-now-supported-games",
                githubURL: "https://github.com/TheArmagan/nvidia-geforce-now-supported-games"
            },
            {
                name: "DATAPIPE",
                description: "HTTP/HTTPS Proxy with custom request headers.",
                previewURL: "./images/previews/datapipe.png", 
                siteURL: "https://kao-datapipe-1.herokuapp.com/",
                githubURL: "https://github.com/TheArmagan/data-pipe"
            }
        ]
    },
    mounted: function () {
        setTimeout(()=>{
            requestAnimationFrame(()=>{
                document.body.classList.remove("hidden");
            })
        },10);
    }
})