const app = new Vue({
    el: "#container",
    data: {
        projeler: DATA_PROJELERIM
    },
    mounted() {
        const ageSpans = document.querySelectorAll(".auto-fill-age");

        function updateAgeTexts() {

            const birthDate = new Date("01-30-2004");
            const currentDate = new Date();
            const dateDiff = new Date(currentDate - birthDate);
            const dateDiffAsYears = (Number(dateDiff) / 1000 / 60 / 60 / 24 / 30 / 12) - 0.4;

            ageSpans.forEach((el) => {
                el.title = dateDiffAsYears;
                el.textContent = dateDiffAsYears.toFixed(2);
            });

        }

        setInterval(() => {
            updateAgeTexts();
        }, 1000);
        updateAgeTexts();
    }
})