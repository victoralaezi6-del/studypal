"use strict";

(() => {
    const CONFIG = Object.freeze({
        themeKey: "afitStudyPalTheme",
        sessionKey: "afitStudyPalSession:v2"
    });

    const elements = {
        menuButton:
            document.getElementById("landing-menu-button"),

        navigation:
            document.getElementById("landing-navigation"),

        navigationLinks: Array.from(
            document.querySelectorAll(
                "#landing-navigation a"
            )
        ),

        themeToggle:
            document.getElementById("theme-toggle"),

        currentYear:
            document.getElementById("current-year"),

        loginLink:
            document.getElementById("landing-login-link"),

        registerLink:
            document.getElementById("landing-register-link"),

        heroAction:
            document.getElementById("hero-primary-action"),

        ctaRegisterLink:
            document.getElementById("cta-register-link"),

        ctaLoginLink:
            document.getElementById("cta-login-link"),

        revealElements: Array.from(
            document.querySelectorAll(".reveal-element")
        )
    };

    const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const systemDarkQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    function safeStorageGet(key) {
        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    function safeStorageSet(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch {
            return false;
        }
    }

    function safeParse(value, fallback = null) {
        if (!value) {
            return fallback;
        }

        try {
            return JSON.parse(value);
        } catch {
            return fallback;
        }
    }

    function applyTheme(theme) {
        const safeTheme =
            theme === "light"
                ? "light"
                : "dark";

        const isDark = safeTheme === "dark";

        document.documentElement.dataset.theme =
            safeTheme;

        elements.themeToggle?.setAttribute(
            "aria-pressed",
            String(isDark)
        );

        elements.themeToggle?.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

        const icon = elements.themeToggle?.querySelector(
            ".theme-toggle__icon"
        );

        const text = elements.themeToggle?.querySelector(
            ".theme-toggle__text"
        );

        if (icon) {
            icon.textContent = isDark ? "☀" : "☾";
        }

        if (text) {
            text.textContent = isDark
                ? "Light mode"
                : "Dark mode";
        }

        const themeMeta = document.querySelector(
            'meta[name="theme-color"]'
        );

        if (themeMeta) {
            themeMeta.content = isDark
                ? "#131218"
                : "#f5f7fb";
        }
    }

    function initialiseTheme() {
        const storedTheme = safeStorageGet(
            CONFIG.themeKey
        );

        const theme =
            storedTheme === "light" ||
            storedTheme === "dark"
                ? storedTheme
                : systemDarkQuery.matches
                    ? "dark"
                    : "light";

        applyTheme(theme);
    }

    function toggleTheme() {
        const currentTheme =
            document.documentElement.dataset.theme;

        const nextTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        applyTheme(nextTheme);

        safeStorageSet(
            CONFIG.themeKey,
            nextTheme
        );
    }

    function openMenu() {
        elements.navigation?.classList.add(
            "is-open"
        );

        elements.menuButton?.classList.add(
            "is-active"
        );

        elements.menuButton?.setAttribute(
            "aria-expanded",
            "true"
        );

        elements.menuButton?.setAttribute(
            "aria-label",
            "Close navigation menu"
        );
    }

    function closeMenu() {
        elements.navigation?.classList.remove(
            "is-open"
        );

        elements.menuButton?.classList.remove(
            "is-active"
        );

        elements.menuButton?.setAttribute(
            "aria-expanded",
            "false"
        );

        elements.menuButton?.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

    function toggleMenu() {
        if (
            elements.navigation?.classList.contains(
                "is-open"
            )
        ) {
            closeMenu();
            return;
        }

        openMenu();
    }

    function initialiseAccountActions() {
        const session = safeParse(
            safeStorageGet(CONFIG.sessionKey)
        );

        if (!session?.userId) {
            return;
        }

        const dashboardUrl =
            "/home/afit studypal-home.html";

        if (elements.loginLink) {
            elements.loginLink.href = dashboardUrl;
            elements.loginLink.textContent = "Dashboard";
        }

        if (elements.registerLink) {
            elements.registerLink.href = dashboardUrl;
            elements.registerLink.textContent =
                "Open dashboard";
        }

        if (elements.heroAction) {
            elements.heroAction.href = dashboardUrl;

            const textNode =
                elements.heroAction.firstChild;

            if (textNode) {
                textNode.textContent =
                    "Open your dashboard ";
            }
        }

        if (elements.ctaRegisterLink) {
            elements.ctaRegisterLink.href =
                dashboardUrl;

            elements.ctaRegisterLink.textContent =
                "Open dashboard";
        }

        if (elements.ctaLoginLink) {
            elements.ctaLoginLink.href =
                "/login/afit studypal-login.html";

            elements.ctaLoginLink.textContent =
                "Switch account";
        }
    }

    function initialiseRevealAnimations() {
        if (
            reducedMotionQuery.matches ||
            !("IntersectionObserver" in window)
        ) {
            elements.revealElements.forEach(
                (element) => {
                    element.classList.add(
                        "is-visible"
                    );
                }
            );

            return;
        }

        const observer =
            new IntersectionObserver(
                (entries, currentObserver) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "is-visible"
                        );

                        currentObserver.unobserve(
                            entry.target
                        );
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );

        elements.revealElements.forEach(
            (element, index) => {
                element.style.transitionDelay =
                    `${(index % 3) * 0.1}s`;

                observer.observe(element);
            }
        );
    }

    function registerEvents() {
        elements.themeToggle?.addEventListener(
            "click",
            toggleTheme
        );

        elements.menuButton?.addEventListener(
            "click",
            toggleMenu
        );

        elements.navigationLinks.forEach(
            (link) => {
                link.addEventListener(
                    "click",
                    closeMenu
                );
            }
        );

        document.addEventListener(
            "click",
            (event) => {
                if (
                    !elements.navigation?.classList.contains(
                        "is-open"
                    )
                ) {
                    return;
                }

                const clickedNavigation =
                    elements.navigation.contains(
                        event.target
                    );

                const clickedMenuButton =
                    elements.menuButton?.contains(
                        event.target
                    );

                if (
                    !clickedNavigation &&
                    !clickedMenuButton
                ) {
                    closeMenu();
                }
            }
        );

        window.addEventListener(
            "resize",
            () => {
                if (window.innerWidth > 860) {
                    closeMenu();
                }
            }
        );
    }

    function initialise() {
        document.documentElement.classList.remove(
            "no-js"
        );

        initialiseTheme();
        initialiseAccountActions();
        initialiseRevealAnimations();
        registerEvents();

        if (elements.currentYear) {
            elements.currentYear.textContent =
                String(new Date().getFullYear());
        }
    }

    initialise();
})();
