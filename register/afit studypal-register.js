"use strict";

(() => {
    const CONFIG = Object.freeze({
        usersKey: "afitStudyPalUsers:v2",
        sessionKey: "afitStudyPalSession:v2",
        themeKey: "afitStudyPalTheme",

        departments: Object.freeze([
            "Aircraft Engineering",
            "Business Administration",
            "Civil Engineering",
            "Electrical Engineering",
            "Mechanical Engineering",
            "General"
        ])
    });

    const elements = {
        form:
            document.getElementById("register-form"),

        firstNameInput:
            document.getElementById(
                "register-first-name"
            ),

        lastNameInput:
            document.getElementById(
                "register-last-name"
            ),

        matricInput:
            document.getElementById(
                "register-matric-number"
            ),

        departmentInput:
            document.getElementById(
                "register-department"
            ),

        emailInput:
            document.getElementById(
                "register-email"
            ),

        passwordInput:
            document.getElementById(
                "register-password"
            ),

        confirmPasswordInput:
            document.getElementById(
                "register-confirm-password"
            ),

        submitButton:
            document.getElementById(
                "register-submit-button"
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
            elements.firstNameInput,
            elements.lastNameInput,
            elements.matricInput,
            elements.departmentInput,
            elements.emailInput,
            elements.passwordInput,
            elements.confirmPasswordInput
        ].forEach((field) => {
            field.removeAttribute(
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
                ? "Creating account..."
                : "Create account";
        }
    }

    function isValidName(value) {
        return /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,40}$/.test(
            value
        );
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value
        );
    }

    function isValidMatricNumber(value) {
        return /^[A-Z0-9/_-]{3,30}$/.test(
            value
        );
    }

    function isValidPassword(value) {
        return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(
            value
        );
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

    async function handleRegistration(event) {
        event.preventDefault();

        clearValidation();

        const firstName = cleanText(
            elements.firstNameInput.value,
            40
        );

        const lastName = cleanText(
            elements.lastNameInput.value,
            40
        );

        const matricNumber = cleanText(
            elements.matricInput.value,
            30
        ).toUpperCase();

        const department = cleanText(
            elements.departmentInput.value,
            60
        );

        const email = cleanText(
            elements.emailInput.value,
            100
        ).toLowerCase();

        const password = String(
            elements.passwordInput.value
        );

        const confirmPassword = String(
            elements.confirmPasswordInput.value
        );

        if (!isValidName(firstName)) {
            showInputError(
                elements.firstNameInput,
                "Enter a valid first name."
            );

            return;
        }

        if (!isValidName(lastName)) {
            showInputError(
                elements.lastNameInput,
                "Enter a valid last name."
            );

            return;
        }

        if (!isValidMatricNumber(matricNumber)) {
            showInputError(
                elements.matricInput,
                "Enter a valid matric number."
            );

            return;
        }

        if (
            !CONFIG.departments.includes(
                department
            )
        ) {
            showInputError(
                elements.departmentInput,
                "Select a valid department."
            );

            return;
        }

        if (!isValidEmail(email)) {
            showInputError(
                elements.emailInput,
                "Enter a valid email address."
            );

            return;
        }

        if (!isValidPassword(password)) {
            showInputError(
                elements.passwordInput,
                "Password must contain at least 8 characters, including letters and numbers."
            );

            return;
        }

        if (password !== confirmPassword) {
            showInputError(
                elements.confirmPasswordInput,
                "The passwords do not match."
            );

            return;
        }

        const users = getUsers();

        const existingUser = users.find(
            (user) =>
                cleanText(
                    user.matricNumber,
                    30
                ).toUpperCase() ===
                    matricNumber ||
                cleanText(
                    user.email,
                    100
                ).toLowerCase() ===
                    email
        );

        if (existingUser) {
            showFormMessage(
                "An account already exists with that matric number or email."
            );

            showToast(
                "That account already exists.",
                "error"
            );

            return;
        }

        setSubmitState(true);

        showLoader(
            true,
            "Creating your account..."
        );

        try {
            const user = {
                id: createId(),
                firstName,
                lastName,
                matricNumber,
                department,
                email,

                passwordHash:
                    await hashText(password),

                createdAt:
                    new Date().toISOString()
            };

            users.push(user);

            if (!saveUsers(users)) {
                throw new Error(
                    "The browser could not save your account."
                );
            }

            if (!saveSession(user)) {
                throw new Error(
                    "Your account was created, but the login session could not be saved."
                );
            }

            showFormMessage(
                "Account created successfully.",
                "success"
            );

            showToast(
                "Account created. Opening your dashboard...",
                "success"
            );

            window.setTimeout(() => {
                window.location.href =
                    "/home/afit studypal-home.html";
            }, 900);
        } catch (error) {
            showLoader(false);
            setSubmitState(false);

            const message =
                error instanceof Error
                    ? error.message
                    : "Unable to create your account.";

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
            handleRegistration
        );

        elements.themeToggle?.addEventListener(
            "click",
            toggleTheme
        );

        [
            elements.firstNameInput,
            elements.lastNameInput,
            elements.matricInput,
            elements.departmentInput,
            elements.emailInput,
            elements.passwordInput,
            elements.confirmPasswordInput
        ].forEach((field) => {
            field.addEventListener(
                "input",
                () => {
                    field.removeAttribute(
                        "aria-invalid"
                    );

                    showFormMessage("");
                }
            );
        });
    }

    function initialise() {
        redirectActiveSession();
        initialiseTheme();
        initialisePasswordToggles();
        registerEvents();
        showLoader(false);
    }

    initialise();
})();
