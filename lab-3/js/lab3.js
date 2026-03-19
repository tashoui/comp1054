document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("[role='tab']");
    const panels = document.querySelectorAll("[role='tabpanel']");

    tabs[0].classList.add("active");
    panels[0].classList.add("active");

    tabs.forEach(function(tab){
        tab.querySelector("a").addEventListener("click", function (e) {
            e.preventDefault();

            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).classList.add("active")

        });
    });
});