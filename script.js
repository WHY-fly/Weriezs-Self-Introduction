(function () {
    const body = document.body;
    const themeButtons = document.querySelectorAll("[data-theme-toggle]");
    const themeLabels = document.querySelectorAll("[data-theme-label]");
    const storageKey = "why-profile-theme";

    function readStoredTheme() {
        try {
            return window.localStorage.getItem(storageKey);
        } catch (error) {
            return null;
        }
    }

    function writeStoredTheme(theme) {
        try {
            window.localStorage.setItem(storageKey, theme);
        } catch (error) {
            // Storage can be unavailable for local file previews.
        }
    }

    function setTheme(theme) {
        const isNight = theme === "night";
        body.classList.toggle("theme-night", isNight);
        themeButtons.forEach((button) => {
            button.setAttribute("aria-pressed", String(isNight));
        });
        themeLabels.forEach((label) => {
            label.textContent = isNight ? "纸面" : "夜读";
        });
        writeStoredTheme(isNight ? "night" : "paper");
    }

    setTheme(readStoredTheme() || "paper");

    themeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setTheme(body.classList.contains("theme-night") ? "paper" : "night");
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    document.querySelectorAll("[data-email]").forEach((button) => {
        button.addEventListener("click", async () => {
            const email = button.getAttribute("data-email");
            const label = button.querySelector("[data-copy-label]");
            let copied = false;

            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(email);
                    copied = true;
                } catch (error) {
                    copied = false;
                }
            }

            if (!copied) {
                const helper = document.createElement("textarea");
                helper.value = email;
                helper.setAttribute("readonly", "");
                helper.style.position = "fixed";
                helper.style.opacity = "0";
                document.body.appendChild(helper);
                helper.select();
                copied = document.execCommand("copy");
                helper.remove();
            }

            if (label) {
                const original = label.textContent;
                label.textContent = copied ? "已复制" : "请手动复制";
                window.setTimeout(() => {
                    label.textContent = original;
                }, 1500);
            }
        });
    });
})();
