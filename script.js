const app = new Vue({
    el: "#vue-app",
    data: {
        isAboutPage: false,
        myProjects: __MY_PROJECTS__
    },
    mounted: async function () {

        let discordOnlineUserAmount = (await (await fetch("https://discord.com/api/guilds/775348842894983171/widget.json")).json()).presence_count;

        this.myProjects.find(i => i.name == "DISCORD SERVER").buttons.push({ name: `${discordOnlineUserAmount}` });

        setTimeout(() => {
            requestAnimationFrame(() => {
                document.body.classList.remove("hidden");
            });
        }, 10);
    },
});