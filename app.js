document.addEventListener("DOMContentLoaded", () => {

    const toggler = document.querySelector(".hamburger__menu--item");
    const ulVisible = document.querySelector("ul");
    const navbarElem = document.querySelector(".navbar");
    const asideHero = document.querySelector("aside.hero");
    const heightElem = Math.floor(asideHero.getBoundingClientRect().height);

    toggler.onclick = function() {
        ulVisible.classList.toggle("visible");
        // ulVisible.style.css = "position: absolute";
    }

    document.addEventListener("scroll", () => {
        
        // const valueScrollTop = window.pageYOffset;
        const valueScrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if(valueScrollTop >= heightElem) {
            asideHero.style.cssText = "padding-bottom: 60px";
            navbarElem.style.cssText = "position: fixed; top:0;";
        } else {
            asideHero.paddingTop = "";
            navbarElem.style.top = "";
            navbarElem.style.position = "";
        }
        
    }, false);

});

