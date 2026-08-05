"use strict";

(() => {
    const CONFIG = Object.freeze({
        usersKey: "afitStudyPalUsers:v2",
        sessionKey: "afitStudyPalSession:v2",
        themeKey: "afitStudyPalTheme",
        legacyUserKey: "userData"
    });

    const elements = {
        form:
            document.getElementById("login-form"),

        matricInput:
            document.getElementById(
                "login-matric-number"
            ),

        passwordInput:
            document.getElementById(
                "login-password"
            ),

        submitButton:
            document.getElementById(
                "login-submit-button"
            ),

        formMessage:
            document.getElementById(
                "form-message"
            ),

        loader:
            document.getElementById(
                "page-loader"
            ),

        loaderText:
            document.getElementById(
                "loader-text"
            ),

        toast:
            document.getElementById(
                "app-toast"
            ),

        themeToggle:
            document.getElementById(
                "theme-toggle"
            ),

        passwordToggles: Array.from(
            document.querySelectorAll(
                "[data-password-toggle]"
            )
        )
    };

    const systemDarkQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    function safeParse(value, fallback) {
        if (!value) {
            return fallback;
        }

        try {
            return JSON.parse(value);
        } catch {
            return fallback;
        }
    }

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

    function cleanText(value, maximumLength = 100) {
        return String(value ?? "")
            .replace(/[\u0000-\u001F\u007F]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, maximumLength);
    }

    function createId() {
        if (
            window.crypto &&
            typeof window.crypto.randomUUID === "function"
        ) {
            return window.crypto.randomUUID();
        }

        return `${Date.now()}-${Math.random()
            .toString(16)
            .slice(2)}`;
    }

    async function hashText(value) {
        const text = String(value ?? "");

        if (
            window.crypto?.subtle &&
            window.TextEncoder
        ) {
            const encoded =
                new TextEncoder().encode(text);

            const hashBuffer =
                await window.crypto.subtle.digest(
                    "SHA-256",
                    encoded
                );

            return Array.from(
                new Uint8Array(hashBuffer)
            )
                .map((byte) =>
                    byte
                        .toString(16)
                        .padStart(2, "0")
                )
                .join("");
        }

        return window.btoa(
            unescape(
                encodeURIComponent(text)
            )
        );
    }

    function getUsers() {
        const users = safeParse(
            safeStorageGet(CONFIG.usersKey),
            []
        );

        return Array.isArray(users)
            ? users
            : [];
    }

    function saveUsers(users) {
        return safeStorageSet(
            CONFIG.usersKey,
            JSON.stringify(users)
        );
    }

    function saveSession(user) {
        const session = {
            userId: user.id,
            matricNumber: user.matricNumber,
            signedInAt: new Date().toISOString()
        };

        return safeStorageSet(
            CONFIG.sessionKey,
            JSON.stringify(session)
        );
    }

    function showLoader(
        visible,
        message = "Please wait..."
    ) {
        if (!elements.loader) {
            return;
        }

        elements.loaderText.textContent =
            message;

        elements.loader.classList.toggle(
            "is-visible",
            visible
        );
    }

    function showToast(
        message,
        type = "success"
    ) {
        if (!elements.toast) {
            return;
        }

        window.clearTimeout(showToast.timer);

        elements.toast.textContent = message;

        elements.toast.className =
            `toast is-visible is-${type}`;

        showToast.timer = window.setTimeout(
            () => {
                elements.toast.className =
                    "toast";
            },
            3200
        );
    }

    function showFormMessage(
        message,
        type = "error"
    ) {
        elements.formMessage.textContent =
            message;

        elements.formMessage.className =
            type === "success"
                ? "form-message is-success"
                : "form-message";
    }

    function clearValidation() {
        [
            elements.matricInput,
            elements.passwordInput
        ].forEach((input) => {
            input.removeAttribute(
                "aria-invalid"
            );
        });

        showFormMessage("");
    }

    function showInputError(
        input,
        message
    ) {
        input.setAttribute(
            "aria-invalid",
            "true"
        );

        showFormMessage(message);
        input.focus();
    }

    function setSubmitState(loading) {
        elements.submitButton.disabled =
            loading;

        const label =
            elements.submitButton.querySelector(
                "span"
            );

        if (label) {
            label.textContent = loading
                ? "Signing in..."
                : "Log in";
        }
    }

    function applyTheme(theme) {
        const safeTheme =
            theme === "light"
                ? "light"
                : "dark";

        const isDark =
            safeTheme === "dark";

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

        const icon =
            elements.themeToggle?.querySelector(
                ".theme-toggle__icon"
            );

        const text =
            elements.themeToggle?.querySelector(
                ".theme-toggle__text"
            );

        if (icon) {
            icon.textContent =
                isDark ? "☀" : "☾";
        }

        if (text) {
            text.textContent =
                isDark
                    ? "Light mode"
                    : "Dark mode";
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
        const nextTheme =
            document.documentElement.dataset.theme ===
            "dark"
                ? "light"
                : "dark";

        applyTheme(nextTheme);

        safeStorageSet(
            CONFIG.themeKey,
            nextTheme
        );
    }

    function initialisePasswordToggles() {
        elements.passwordToggles.forEach(
            (button) => {
                button.addEventListener(
                    "click",
                    () => {
                        const input =
                            document.getElementById(
                                button.dataset
                                    .passwordToggle
                            );

                        if (!input) {
                            return;
                        }

                        const isPassword =
                            input.type ===
                            "password";

                        input.type = isPassword
                            ? "text"
                            : "password";

                        button.textContent =
                            isPassword
                                ? "Hide"
                                : "Show";
                    }
                );
            }
        );
    }

    async function migrateLegacyUser() {
        const existingUsers = getUsers();

        if (existingUsers.length > 0) {
            return;
        }

        const legacyUser = safeParse(
            safeStorageGet(CONFIG.legacyUserKey),
            null
        );

        if (
            !legacyUser?.Firstname ||
            !legacyUser?.MatricNumber ||
            !legacyUser?.Password
        ) {
            return;
        }

        const migratedUser = {
            id: createId(),

            firstName: cleanText(
                legacyUser.Firstname,
                40
            ),

            lastName: cleanText(
                legacyUser.Lastname,
                40
            ),

            matricNumber: cleanText(
                legacyUser.MatricNumber,
                30
            ).toUpperCase(),

            email: "",

            department: "General",

            passwordHash: await hashText(
                legacyUser.Password
            ),

            createdAt:
                new Date().toISOString()
        };

        saveUsers([migratedUser]);
    }

    async function handleLogin(event) {
        event.preventDefault();

        clearValidation();

        const matricNumber = cleanText(
            elements.matricInput.value,
            30
        ).toUpperCase();

        const password = cleanText(
            elements.passwordInput.value,
            120
        );

        if (matricNumber.length < 3) {
            showInputError(
                elements.matricInput,
                "Enter a valid matric number."
            );

            return;
        }

        if (!password) {
            showInputError(
                elements.passwordInput,
                "Enter your password."
            );

            return;
        }

        setSubmitState(true);
        showLoader(true, "Signing you in...");

        try {
            await migrateLegacyUser();

            const users = getUsers();

            const user = users.find(
                (item) =>
                    cleanText(
                        item.matricNumber,
                        30
                    ).toUpperCase() ===
                    matricNumber
            );

            if (!user) {
                throw new Error(
                    "No account exists for that matric number."
                );
            }

            const passwordHash =
                await hashText(password);

            if (
                passwordHash !==
                user.passwordHash
            ) {
                throw new Error(
                    "The password is incorrect."
                );
            }

            if (!saveSession(user)) {
                throw new Error(
                    "The browser could not save your login session."
                );
            }

            showFormMessage(
                "Login successful.",
                "success"
            );

            showToast(
                "Welcome back. Opening your dashboard...",
                "success"
            );

            window.setTimeout(() => {
                window.location.href =
                    "/home/afit studypal-home.html";
            }, 800);
        } catch (error) {
            showLoader(false);
            setSubmitState(false);

            const message =
                error instanceof Error
                    ? error.message
                    : "Unable to log in right now.";

            showFormMessage(message);
            showToast(message, "error");
        }
    }

    function redirectActiveSession() {
        const session = safeParse(
            safeStorageGet(CONFIG.sessionKey),
            null
        );

        if (session?.userId) {
            window.location.href =
                "/home/afit studypal-home.html";
        }
    }

    function registerEvents() {
        elements.form?.addEventListener(
            "submit",
            handleLogin
        );

        elements.themeToggle?.addEventListener(
            "click",
            toggleTheme
        );

        [
            elements.matricInput,
            elements.passwordInput
        ].forEach((input) => {
            input.addEventListener(
                "input",
                () => {
                    input.removeAttribute(
                        "aria-invalid"
                    );

                    showFormMessage("");
                }
            );
        });
    }

    async function initialise() {
        redirectActiveSession();
        initialiseTheme();
        initialisePasswordToggles();
        registerEvents();
        showLoader(false);
        await migrateLegacyUser();
    }

    initialise();
})();
