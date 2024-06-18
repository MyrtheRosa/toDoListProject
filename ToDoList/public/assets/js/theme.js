const settings = document.getElementById("settings");
const settingDiv = document.querySelector(".menuDiv");

document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="selectColor"]');

    function saveColorTheme(theme) {
        document.cookie =
            "colorTheme=" +
            theme +
            "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }

    if (!document.cookie.includes("colorTheme")) {
        saveColorTheme("Midnight");
    }

    function getCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function applyColorTheme(theme) {
        const themes = {
            Midnight: {
                "--main-color": "rgba(20, 88, 233, 0.719)",
                "--main-color-hover": "rgb(25, 109, 243)",
                "--main-color-active": "rgba(14, 67, 181, 0.719)",
                "--main-text": "rgb(25, 109, 243)",
                "--toDO-text": "white",
                "--grad1": "#2b1055",
                "--grad2": "#4070f4",
                "--note": "rgba(51, 150, 255, 0.815)",
                "--main-img": "url(../images/stars.png)",
                "--main-obj": "url(../images/moon.png)",
                "--main-obj2": "url(../images/mountains_front.png)",
                "--school": "#0171c6",
                "--work": "#2f58c7",
                "--sport": "#5073d4",
                "--hobby": "#2d4da5",
                "--other": "#6a82c2",
            },
            Sunshine: {
                "--main-color": "rgba(233, 198, 20, 0.719)",
                "--main-color-hover": "rgb(243, 167, 25)",
                "--main-color-active": "rgba(181, 128, 14, 0.719)",
                "--main-text": "rgb(243, 196, 25)",
                "--toDO-text": "white",
                "--grad1": "#6eeaf8",
                "--grad2": "#1eb7c5",
                "--note": "rgba(211, 170, 24, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/sunshine.jpg)",
                "--school": "#ffae0d",
                "--work": "#dc970e",
                "--sport": "#e2b65c",
                "--hobby": "#f6c259",
                "--other": "#c98f1a",
            },
            Pink: {
                "--main-color": "#f29de1",
                "--main-color-hover": "rgb(255, 88, 252)",
                "--main-color-active": "rgba(181, 14, 181, 0.719)",
                "--main-text": "rgb(212, 79, 219)",
                "--toDO-text": "white",
                "--grad1": "none",
                "--grad2": "none",
                "--note": "rgba(228, 109, 255, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/pink.jpeg)",
                "--school": "#ff0df3",
                "--work": "#db45d4",
                "--sport": "#b822b1",
                "--hobby": "#e38cde",
                "--other": "#ac0aa4",
            },
            Forest: {
                "--main-color": "rgba(46, 207, 51, 0.719)",
                "--main-color-hover": "rgb(47, 171, 63)",
                "--main-color-active": "rgba(14, 181, 45, 0.719)",
                "--main-text": "rgb(64, 155, 78)",
                "--toDO-text": "white",
                "--grad1": "none",
                "--grad2": "none",
                "--note": "rgba(37, 157, 45, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/forest.jpeg)",
                "--school": "#3fce4b",
                "--work": "#29bf53",
                "--sport": "#38a146",
                "--hobby": "#71d37b",
                "--other": "#0a8710",
            },
            Caramel: {
                "--main-color": "rgba(216, 199, 132, 0.719)",
                "--main-color-hover": "rgb(156, 137, 73)",
                "--main-color-active": "rgba(181, 139, 14, 0.719)",
                "--main-text": "rgb(214, 186, 96)",
                "--toDO-text": "white",
                "--grad1": "none",
                "--grad2": "none",
                "--note": "rgba(230, 183, 122, 0.815)",
                "--main-img": "none",
                "--main-obj": "none",
                "--main-obj2": "url(../images/caramel.jpg)",
                "--school": "#dcc176",
                "--work": "#bf9c29",
                "--sport": "#a18838",
                "--hobby": "#cfbd83",
                "--other": "#876c0a",
            },
        };

        function applyTheme(themeName) {
            const theme = themes[themeName];
            for (const property in theme) {
                document.documentElement.style.setProperty(
                    property,
                    theme[property]
                );
            }
        }
        applyTheme(theme);
    }

    const savedTheme = getCookie("colorTheme");
    if (savedTheme) {
        applyColorTheme(savedTheme);
        const savedRadio = document.querySelector(
            `input[name="selectColor"][value="${savedTheme}"]`
        );
        if (savedRadio) {
            savedRadio.checked = true;
        }
    }

    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            const selectedTheme = this.value;
            applyColorTheme(selectedTheme);
            saveColorTheme(selectedTheme);
        });
    });
});

settings.addEventListener("click", function () {
    if (settingDiv.style.right === "10px") {
        settingDiv.style.right = "-300px";
        settings.style.right = "10px";
        settings.style.color = "gray";
    } else {
        settingDiv.style.right = "10px";
        settings.style.color = "darkgray";
        settings.style.right = "270px";
    }
});
