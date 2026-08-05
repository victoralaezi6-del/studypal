"use strict";

(() => {
    const CONFIG = Object.freeze({
        usersKey: "afitStudyPalUsers:v2",
        sessionKey: "afitStudyPalSession:v2",
        themeKey: "afitStudyPalTheme",
        activityPrefix: "afitStudyPalActivity:",
        sidebarKey: "afitStudyPalSidebarCollapsed"
    });

    const DEPARTMENT_NAMES = Object.freeze({
        AETD: "Aircraft Engineering",
        BAM: "Business Administration",
        CEED: "Civil Engineering",
        EED: "Electrical Engineering",
        MAGED: "Mechanical Engineering",
        GENERAL: "General Studies"
    });

    const RESOURCES = Object.freeze([
        {
            id: "mth-201",
            code: "MTH 201",
            title: "Logic and Linear Algebra",
            department: "GENERAL",
            image: "/images/features3.jpeg"
        },
        {
            id: "phy-201",
            code: "PHY 201",
            title: "Physics",
            department: "GENERAL",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "mec-229",
            code: "MEC 229",
            title: "Fluid Mechanics",
            department: "MAGED",
            image: "/images/features2.jpeg"
        },
        {
            id: "aec-209",
            code: "AEC 209",
            title: "Aircraft Structure",
            department: "AETD",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "gns-241",
            code: "GNS 241",
            title: "Introduction to Psychology",
            department: "GENERAL",
            image: "/images/features1.jpeg"
        },
        {
            id: "aec-201",
            code: "AEC 201",
            title: "Aircraft Powerplant I",
            department: "AETD",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "aec-213",
            code: "AEC 213",
            title: "Digital Electronics and Programming",
            department: "AETD",
            image: "/images/features2.jpeg"
        },
        {
            id: "ent-216",
            code: "ENT 216",
            title: "Entrepreneurship",
            department: "GENERAL",
            image: "/images/features3.jpeg"
        },
        {
            id: "aec-207",
            code: "AEC 207",
            title: "Communication Principles",
            department: "AETD",
            image: "/images/features1.jpeg"
        },
        {
            id: "cad-cam",
            code: "CAD & CAM",
            title: "Introduction to CAD and CAM",
            department: "MAGED",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "mec-201",
            code: "MEC 201",
            title: "Engineering Drawing",
            department: "MAGED",
            image: "/images/features2.jpeg"
        },
        {
            id: "aec-205",
            code: "AEC 205",
            title: "Aircraft Systems",
            department: "AETD",
            image: "/images/features3.jpeg"
        },
        {
            id: "aec-203",
            code: "AEC 203",
            title: "Aircraft Materials and Processes",
            department: "AETD",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "cec-209",
            code: "CEC 209",
            title: "Civil Engineering Drawing",
            department: "CEED",
            image: "/images/features1.jpeg"
        },
        {
            id: "gns-201",
            code: "GNS 201",
            title: "Communication Skills",
            department: "GENERAL",
            image: "/images/features3.jpeg"
        },
        {
            id: "mth-112",
            code: "MTH 112",
            title: "Trigonometry and Analytical Geometry",
            department: "GENERAL",
            image: "/images/features2.jpeg"
        },
        {
            id: "bam-205",
            code: "BAM 205",
            title: "Cost Accounting I",
            department: "BAM",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "cec-201",
            code: "CEC 201",
            title: "Hydraulics and Hydrology",
            department: "CEED",
            image: "/images/features2.jpeg"
        },
        {
            id: "bam-203",
            code: "BAM 203",
            title: "Business Law",
            department: "BAM",
            image: "/images/features1.jpeg"
        },
        {
            id: "eec-235",
            code: "EEC 235",
            title: "Electrical and Electronic Instruments",
            department: "EED",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "mec-217",
            code: "MEC 217",
            title: "Technical Report Writing",
            department: "MAGED",
            image: "/images/features3.jpeg"
        },
        {
            id: "eec-209",
            code: "EEC 209",
            title: "Electronics II and Practical",
            department: "EED",
            image: "/images/features2.jpeg"
        },
        {
            id: "sug-208",
            code: "SUG 208",
            title: "Engineering Surveying I",
            department: "CEED",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "bam-211",
            code: "BAM 211",
            title: "Principles of Management I",
            department: "BAM",
            image: "/images/features1.jpeg"
        },
        {
            id: "mec-215",
            code: "MEC 215",
            title: "Foundry Technology and Forging Operations",
            department: "MAGED",
            image: "/images/features2.jpeg"
        },
        {
            id: "eec-237",
            code: "EEC 237",
            title: "Telecommunication Engineering",
            department: "EED",
            image: "/images/features3.jpeg"
        },
        {
            id: "cec-205",
            code: "CEC 205",
            title: "Theory of Structures I",
            department: "CEED",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "bam-201",
            code: "BAM 201",
            title: "Business Statistics",
            department: "BAM",
            image: "/images/features2.jpeg"
        },
        {
            id: "mec-213",
            code: "MEC 213",
            title: "Thermodynamics",
            department: "MAGED",
            image: "/images/features1.jpeg"
        },
        {
            id: "eec-239",
            code: "EEC 239",
            title: "Electrical Circuit Theory",
            department: "EED",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "cec-207",
            code: "CEC 207",
            title: "Hydrogeology",
            department: "CEED",
            image: "/images/features3.jpeg"
        },
        {
            id: "bam-213",
            code: "BAM 213",
            title: "Office Management",
            department: "BAM",
            image: "/images/features1.jpeg"
        },
        {
            id: "mec-212",
            code: "MEC 212",
            title: "Engineering Measurement",
            department: "MAGED",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "ict-201-cpp",
            code: "ICT 201",
            title: "Introduction to C++ Programming",
            department: "EED",
            image: "/images/features2.jpeg"
        },
        {
            id: "cec-211",
            code: "CEC 211",
            title: "Civil Engineering Construction",
            department: "CEED",
            image: "/images/features1.jpeg"
        },
        {
            id: "bam-215",
            code: "BAM 215",
            title: "Information Technology II",
            department: "BAM",
            image: "/images/features3.jpeg"
        },
        {
            id: "eec-125",
            code: "EEC 125",
            title: "Electrical Engineering Science",
            department: "EED",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "eec-233",
            code: "EEC 233",
            title: "Electrical Machines II",
            department: "EED",
            image: "/images/features2.jpeg"
        },
        {
            id: "ict-201",
            code: "ICT 201",
            title: "Introduction to Computing",
            department: "GENERAL",
            image: "/images/features1.jpeg"
        },
        {
            id: "bam-217",
            code: "BAM 217",
            title: "Research Methodology",
            department: "BAM",
            image: "/images/dashboard1.jpeg"
        },
        {
            id: "eec-231",
            code: "EEC 231",
            title: "Electrical Power Systems II and Practical",
            department: "EED",
            image: "/images/features3.jpeg"
        },
        {
            id: "cec-203",
            code: "CEC 203",
            title: "Workshop Technology II",
            department: "CEED",
            image: "/images/features2.jpeg"
        },
        {
            id: "aec-109",
            code: "AEC 109",
            title: "Basic Electronics",
            department: "AETD",
            image: "/images/features1.jpeg"
        }
    ]);

    const elements = {
        loader:
            document.getElementById("page-loader"),

        loaderText:
            document.getElementById("loader-text"),

        toast:
            document.getElementById("app-toast"),

        sidebar:
            document.getElementById("app-sidebar"),

        mobileBackdrop:
            document.getElementById("mobile-backdrop"),

        mobileMenuButton:
            document.getElementById("mobile-menu-button"),

        sidebarCollapseButton:
            document.getElementById("sidebar-collapse-button"),

        sidebarNavigationButtons: Array.from(
            document.querySelectorAll(
                "[data-view-target]"
            )
        ),

        appViews: Array.from(
            document.querySelectorAll(
                "[data-app-view]"
            )
        ),

        currentViewTitle:
            document.getElementById("current-view-title"),

        themeToggle:
            document.getElementById("theme-toggle"),

        logoutButton:
            document.getElementById("logout-button"),

        headerProfileButton:
            document.getElementById("header-profile-button"),

        browseResourcesButton:
            document.getElementById("browse-resources-button"),

        sidebarSearchForm:
            document.getElementById("sidebar-search-form"),

        sidebarSearchInput:
            document.getElementById("sidebar-search-input"),

        browseSearchForm:
            document.getElementById("browse-search-form"),

        browseSearchInput:
            document.getElementById("browse-search-input"),

        departmentFilter:
            document.getElementById("department-filter"),

        browseResultCount:
            document.getElementById("browse-result-count"),

        browseResourceList:
            document.getElementById("browse-resource-list"),

        showcaseTrack:
            document.getElementById("showcase-resource-track"),

        departmentSections:
            document.getElementById("department-resource-sections"),

        carouselButtons: Array.from(
            document.querySelectorAll(
                "[data-scroll-target]"
            )
        ),

        welcomeName:
            document.getElementById("welcome-name"),

        welcomeProfileLetter:
            document.getElementById("welcome-profile-letter"),

        welcomeDepartment:
            document.getElementById("welcome-department"),

        welcomeDate:
            document.getElementById("welcome-date"),

        headerProfileLetter:
            document.getElementById("header-profile-letter"),

        headerProfileName:
            document.getElementById("header-profile-name"),

        headerProfileMatric:
            document.getElementById("header-profile-matric"),

        searchCount:
            document.getElementById("search-count"),

        viewCount:
            document.getElementById("view-count"),

        savedCount:
            document.getElementById("saved-count"),

        streakCount:
            document.getElementById("streak-count"),

        profileLargeLetter:
            document.getElementById("profile-large-letter"),

        profileHeading:
            document.getElementById("profile-view-heading"),

        profileDepartment:
            document.getElementById("profile-department"),

        profileFullName:
            document.getElementById("profile-full-name"),

        profileMatric:
            document.getElementById("profile-matric-number"),

        profileEmail:
            document.getElementById("profile-email"),

        profileDepartmentValue:
            document.getElementById("profile-department-value"),

        profileCreatedDate:
            document.getElementById("profile-created-date"),

        profileSearchCount:
            document.getElementById("profile-search-count"),

        profileViewCount:
            document.getElementById("profile-view-count"),

        profileSavedCount:
            document.getElementById("profile-saved-count"),

        profileStreakCount:
            document.getElementById("profile-streak-count"),

        profilePointsCount:
            document.getElementById("profile-points-count"),

        profileRewardLevel:
            document.getElementById("profile-reward-level"),

        resetActivityButton:
            document.getElementById("reset-activity-button"),

        currentYear:
            document.getElementById("current-year"),

        resourceDialog:
            document.getElementById("resource-dialog"),

        dialogCode:
            document.getElementById("resource-dialog-code"),

        dialogTitle:
            document.getElementById("resource-dialog-title"),

        dialogDepartment:
            document.getElementById("resource-dialog-department"),

        dialogImage:
            document.getElementById("resource-preview-image"),

        dialogSaveButton:
            document.getElementById("dialog-save-button"),

        closeDialogButton:
            document.getElementById("close-resource-dialog")
    };

    const state = {
        user: null,
        activity: null,
        activeView: "home",
        searchTerm: "",
        departmentFilter: "all",
        selectedResourceId: null
    };

    const dateFormatter = new Intl.DateTimeFormat(
        "en-NG",
        {
            dateStyle: "medium"
        }
    );

    const fullDateFormatter = new Intl.DateTimeFormat(
        "en-NG",
        {
            dateStyle: "full"
        }
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

    function createElement(
        tagName,
        className,
        text
    ) {
        const element =
            document.createElement(tagName);

        if (className) {
            element.className = className;
        }

        if (typeof text === "string") {
            element.textContent = text;
        }

        return element;
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

    function getSession() {
        return safeParse(
            safeStorageGet(CONFIG.sessionKey),
            null
        );
    }

    function getActivityKey() {
        return `${CONFIG.activityPrefix}${state.user.id}`;
    }

    function getTodayString(date = new Date()) {
        const year = date.getFullYear();

        const month = String(
            date.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            date.getDate()
        ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }

    function getYesterdayString() {
        const yesterday = new Date();

        yesterday.setDate(
            yesterday.getDate() - 1
        );

        return getTodayString(yesterday);
    }

    function createDefaultActivity() {
        return {
            searchCount: 0,
            viewedIds: [],
            savedIds: [],
            studyPoints: 0,
            streak: 1,
            lastVisitDate: getTodayString()
        };
    }

    function normaliseActivity(activity) {
        const safeActivity =
            activity &&
            typeof activity === "object"
                ? activity
                : createDefaultActivity();

        return {
            searchCount:
                Number(safeActivity.searchCount) ||
                0,

            viewedIds:
                Array.isArray(safeActivity.viewedIds)
                    ? safeActivity.viewedIds.filter(
                        (value) =>
                            typeof value ===
                            "string"
                    )
                    : [],

            savedIds:
                Array.isArray(safeActivity.savedIds)
                    ? safeActivity.savedIds.filter(
                        (value) =>
                            typeof value ===
                            "string"
                    )
                    : [],

            studyPoints:
                Number(safeActivity.studyPoints) ||
                0,

            streak:
                Number(safeActivity.streak) ||
                1,

            lastVisitDate:
                cleanText(
                    safeActivity.lastVisitDate,
                    10
                ) || getTodayString()
        };
    }

    function loadActivity() {
        return normaliseActivity(
            safeParse(
                safeStorageGet(
                    getActivityKey()
                ),
                createDefaultActivity()
            )
        );
    }

    function saveActivity() {
        return safeStorageSet(
            getActivityKey(),
            JSON.stringify(state.activity)
        );
    }

    function updateDailyStreak() {
        const today = getTodayString();

        if (
            state.activity.lastVisitDate ===
            today
        ) {
            return;
        }

        if (
            state.activity.lastVisitDate ===
            getYesterdayString()
        ) {
            state.activity.streak += 1;
        } else {
            state.activity.streak = 1;
        }

        state.activity.lastVisitDate =
            today;

        state.activity.studyPoints += 5;

        saveActivity();
    }

    function getInitials(name) {
        return cleanText(name, 80)
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) =>
                part.charAt(0).toUpperCase()
            )
            .join("");
    }

    function getRewardLevel(points) {
        if (points >= 300) {
            return "Scholar";
        }

        if (points >= 150) {
            return "Focused";
        }

        if (points >= 60) {
            return "Consistent";
        }

        return "Starter";
    }

    function shuffleCopy(items) {
        const copiedItems = [...items];

        for (
            let index =
                copiedItems.length - 1;
            index > 0;
            index -= 1
        ) {
            const randomIndex = Math.floor(
                Math.random() *
                    (index + 1)
            );

            [
                copiedItems[index],
                copiedItems[randomIndex]
            ] = [
                copiedItems[randomIndex],
                copiedItems[index]
            ];
        }

        return copiedItems;
    }

    function showLoader(
        visible,
        message = "Loading..."
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

        const systemDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        const theme =
            storedTheme === "light" ||
            storedTheme === "dark"
                ? storedTheme
                : systemDark
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

        showToast(
            `${nextTheme === "dark" ? "Dark" : "Light"} mode enabled.`,
            "success"
        );
    }

    function initialiseCurrentUser() {
        const session = getSession();

        if (!session?.userId) {
            window.location.href =
                "/login/afit studypal-login.html";

            return false;
        }

        const user = getUsers().find(
            (item) =>
                item.id === session.userId
        );

        if (!user) {
            localStorage.removeItem(
                CONFIG.sessionKey
            );

            window.location.href =
                "/login/afit studypal-login.html";

            return false;
        }

        state.user = user;
        state.activity = loadActivity();

        updateDailyStreak();

        return true;
    }

    function populateUserInterface() {
        const fullName = [
            state.user.firstName,
            state.user.lastName
        ]
            .filter(Boolean)
            .join(" ");

        const firstName =
            cleanText(
                state.user.firstName,
                40
            ) || "Student";

        const initial =
            getInitials(fullName).charAt(0) ||
            "S";

        elements.welcomeName.textContent =
            firstName;

        elements.welcomeProfileLetter.textContent =
            initial;

        elements.welcomeDepartment.textContent =
            state.user.department ||
            "General Studies";

        elements.welcomeDate.textContent =
            fullDateFormatter.format(
                new Date()
            );

        elements.headerProfileLetter.textContent =
            initial;

        elements.headerProfileName.textContent =
            firstName;

        elements.headerProfileMatric.textContent =
            state.user.matricNumber;

        elements.profileLargeLetter.textContent =
            initial;

        elements.profileHeading.textContent =
            fullName;

        elements.profileDepartment.textContent =
            state.user.department;

        elements.profileFullName.textContent =
            fullName;

        elements.profileMatric.textContent =
            state.user.matricNumber;

        elements.profileEmail.textContent =
            state.user.email ||
            "Not provided";

        elements.profileDepartmentValue.textContent =
            state.user.department;

        elements.profileCreatedDate.textContent =
            state.user.createdAt
                ? dateFormatter.format(
                    new Date(
                        state.user.createdAt
                    )
                )
                : "Unavailable";

        if (elements.currentYear) {
            elements.currentYear.textContent =
                String(new Date().getFullYear());
        }
    }

    function renderStatistics() {
        const viewedCount =
            state.activity.viewedIds.length;

        const savedCount =
            state.activity.savedIds.length;

        const streakLabel =
            `${state.activity.streak} ${
                state.activity.streak === 1
                    ? "day"
                    : "days"
            }`;

        elements.searchCount.textContent =
            String(
                state.activity.searchCount
            );

        elements.viewCount.textContent =
            String(viewedCount);

        elements.savedCount.textContent =
            String(savedCount);

        elements.streakCount.textContent =
            streakLabel;

        elements.profileSearchCount.textContent =
            String(
                state.activity.searchCount
            );

        elements.profileViewCount.textContent =
            String(viewedCount);

        elements.profileSavedCount.textContent =
            String(savedCount);

        elements.profileStreakCount.textContent =
            streakLabel;

        elements.profilePointsCount.textContent =
            String(
                state.activity.studyPoints
            );

        elements.profileRewardLevel.textContent =
            getRewardLevel(
                state.activity.studyPoints
            );
    }

    function createResourceCard(
        resource,
        compact = false
    ) {
        const card = createElement(
            "article",
            compact
                ? "resource-card resource-card--compact"
                : "resource-card"
        );

        const top = createElement(
            "div",
            "resource-card__top"
        );

        const department = createElement(
            "span",
            "resource-card__department",
            resource.department
        );

        const savedButton = createElement(
            "button",
            state.activity.savedIds.includes(
                resource.id
            )
                ? "resource-save-button is-saved"
                : "resource-save-button",
            state.activity.savedIds.includes(
                resource.id
            )
                ? "★"
                : "☆"
        );

        savedButton.type = "button";

        savedButton.dataset.resourceAction =
            "save";

        savedButton.dataset.resourceId =
            resource.id;

        savedButton.setAttribute(
            "aria-label",
            state.activity.savedIds.includes(
                resource.id
            )
                ? `Remove ${resource.code} from saved resources`
                : `Save ${resource.code}`
        );

        top.append(
            department,
            savedButton
        );

        const code = createElement(
            "h3",
            "",
            resource.code
        );

        const title = createElement(
            "p",
            "",
            resource.title
        );

        const departmentName =
            createElement(
                "small",
                "",
                DEPARTMENT_NAMES[
                    resource.department
                ]
            );

        const previewButton = createElement(
            "button",
            "button button--primary resource-card__button",
            "View resource"
        );

        previewButton.type = "button";

        previewButton.dataset.resourceAction =
            "view";

        previewButton.dataset.resourceId =
            resource.id;

        card.append(
            top,
            code,
            title,
            departmentName,
            previewButton
        );

        return card;
    }

    function renderShowcase() {
        elements.showcaseTrack.replaceChildren();

        const fragment =
            document.createDocumentFragment();

        shuffleCopy(RESOURCES)
            .slice(0, 8)
            .forEach((resource) => {
                fragment.appendChild(
                    createResourceCard(
                        resource,
                        true
                    )
                );
            });

        elements.showcaseTrack.appendChild(
            fragment
        );
    }

    function createDepartmentSection(
        departmentCode
    ) {
        const section = createElement(
            "section",
            "department-resource-section"
        );

        const heading = createElement(
            "div",
            "department-resource-section__heading"
        );

        const headingText =
            createElement("div");

        headingText.append(
            createElement(
                "small",
                "",
                departmentCode
            ),

            createElement(
                "h3",
                "",
                DEPARTMENT_NAMES[
                    departmentCode
                ]
            )
        );

        const controls = createElement(
            "div",
            "carousel-controls"
        );

        const trackId =
            `department-track-${departmentCode.toLowerCase()}`;

        const previousButton =
            createElement(
                "button",
                "",
                "←"
            );

        previousButton.type = "button";

        previousButton.dataset.scrollTarget =
            trackId;

        previousButton.dataset.scrollDirection =
            "-1";

        previousButton.setAttribute(
            "aria-label",
            `Scroll ${DEPARTMENT_NAMES[departmentCode]} resources left`
        );

        const nextButton =
            createElement(
                "button",
                "",
                "→"
            );

        nextButton.type = "button";

        nextButton.dataset.scrollTarget =
            trackId;

        nextButton.dataset.scrollDirection =
            "1";

        nextButton.setAttribute(
            "aria-label",
            `Scroll ${DEPARTMENT_NAMES[departmentCode]} resources right`
        );

        controls.append(
            previousButton,
            nextButton
        );

        heading.append(
            headingText,
            controls
        );

        const track = createElement(
            "div",
            "resource-track"
        );

        track.id = trackId;

        RESOURCES.filter(
            (resource) =>
                resource.department ===
                departmentCode
        ).forEach((resource) => {
            track.appendChild(
                createResourceCard(
                    resource,
                    true
                )
            );
        });

        section.append(
            heading,
            track
        );

        return section;
    }

    function renderDepartmentSections() {
        elements.departmentSections.replaceChildren();

        [
            "AETD",
            "BAM",
            "CEED",
            "EED",
            "MAGED"
        ].forEach((departmentCode) => {
            elements.departmentSections.appendChild(
                createDepartmentSection(
                    departmentCode
                )
            );
        });
    }

    function getFilteredResources() {
        const query =
            state.searchTerm.toLowerCase();

        return RESOURCES.filter(
            (resource) => {
                const searchText = [
                    resource.code,
                    resource.title,
                    resource.department,
                    DEPARTMENT_NAMES[
                        resource.department
                    ]
                ]
                    .join(" ")
                    .toLowerCase();

                const matchesSearch =
                    searchText.includes(query);

                let matchesDepartment = true;

                if (
                    state.departmentFilter ===
                    "saved"
                ) {
                    matchesDepartment =
                        state.activity.savedIds.includes(
                            resource.id
                        );
                } else if (
                    state.departmentFilter !==
                    "all"
                ) {
                    matchesDepartment =
                        resource.department ===
                        state.departmentFilter;
                }

                return (
                    matchesSearch &&
                    matchesDepartment
                );
            }
        );
    }

    function renderBrowseResources() {
        const resources =
            getFilteredResources();

        elements.browseResultCount.textContent =
            String(resources.length);

        elements.browseResourceList.replaceChildren();

        if (resources.length === 0) {
            const emptyState =
                createElement(
                    "div",
                    "empty-state"
                );

            emptyState.append(
                createElement(
                    "span",
                    "empty-state__icon",
                    "⌕"
                ),

                createElement(
                    "h3",
                    "",
                    "No resources found"
                ),

                createElement(
                    "p",
                    "",
                    "Try another search term or department filter."
                )
            );

            elements.browseResourceList.appendChild(
                emptyState
            );

            return;
        }

        const fragment =
            document.createDocumentFragment();

        resources.forEach((resource) => {
            fragment.appendChild(
                createResourceCard(resource)
            );
        });

        elements.browseResourceList.appendChild(
            fragment
        );
    }

    function showView(viewName) {
        const targetView =
            elements.appViews.find(
                (view) =>
                    view.dataset.appView ===
                    viewName
            );

        if (!targetView) {
            return;
        }

        state.activeView = viewName;

        elements.appViews.forEach((view) => {
            const isTarget =
                view === targetView;

            view.hidden = !isTarget;

            view.classList.toggle(
                "is-active",
                isTarget
            );
        });

        elements.sidebarNavigationButtons.forEach(
            (button) => {
                button.classList.toggle(
                    "is-active",
                    button.dataset
                        .viewTarget ===
                        viewName
                );
            }
        );

        const titles = {
            home: "Dashboard",
            browse: "Browse resources",
            profile: "Student profile"
        };

        elements.currentViewTitle.textContent =
            titles[viewName];

        if (viewName === "browse") {
            renderBrowseResources();

            window.setTimeout(() => {
                elements.browseSearchInput.focus();
            }, 100);
        }

        closeMobileSidebar();

        window.scrollTo({
            top: 0,
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
                ? "auto"
                : "smooth"
        });
    }

    function openMobileSidebar() {
        elements.sidebar.classList.add(
            "is-mobile-open"
        );

        elements.mobileBackdrop.classList.add(
            "is-visible"
        );

        elements.mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    function closeMobileSidebar() {
        elements.sidebar.classList.remove(
            "is-mobile-open"
        );

        elements.mobileBackdrop.classList.remove(
            "is-visible"
        );

        elements.mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    function toggleSidebarCollapse() {
        document.body.classList.toggle(
            "sidebar-collapsed"
        );

        const collapsed =
            document.body.classList.contains(
                "sidebar-collapsed"
            );

        safeStorageSet(
            CONFIG.sidebarKey,
            String(collapsed)
        );

        elements.sidebarCollapseButton.setAttribute(
            "aria-label",
            collapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
        );
    }

    function initialiseSidebarState() {
        const collapsed =
            safeStorageGet(CONFIG.sidebarKey) ===
            "true";

        document.body.classList.toggle(
            "sidebar-collapsed",
            collapsed
        );
    }

    function openResource(resourceId) {
        const resource = RESOURCES.find(
            (item) =>
                item.id === resourceId
        );

        if (!resource) {
            showToast(
                "That resource could not be found.",
                "error"
            );

            return;
        }

        state.selectedResourceId =
            resource.id;

        elements.dialogCode.textContent =
            resource.code;

        elements.dialogTitle.textContent =
            resource.title;

        elements.dialogDepartment.textContent =
            DEPARTMENT_NAMES[
                resource.department
            ];

        elements.dialogImage.src =
            resource.image;

        elements.dialogImage.alt =
            `Sample preview for ${resource.code} ${resource.title}`;

        updateDialogSaveButton(resource);

        if (
            !state.activity.viewedIds.includes(
                resource.id
            )
        ) {
            state.activity.viewedIds.push(
                resource.id
            );

            state.activity.studyPoints += 10;

            saveActivity();
            renderStatistics();
        }

        if (
            typeof elements.resourceDialog
                .showModal === "function"
        ) {
            elements.resourceDialog.showModal();
        } else {
            elements.resourceDialog.setAttribute(
                "open",
                ""
            );
        }
    }

    function closeResourceDialog() {
        state.selectedResourceId = null;

        if (elements.resourceDialog.open) {
            elements.resourceDialog.close();
        } else {
            elements.resourceDialog.removeAttribute(
                "open"
            );
        }
    }

    function updateDialogSaveButton(resource) {
        const isSaved =
            state.activity.savedIds.includes(
                resource.id
            );

        elements.dialogSaveButton.textContent =
            isSaved
                ? "Remove from saved"
                : "Save resource";

        elements.dialogSaveButton.classList.toggle(
            "button--danger",
            isSaved
        );

        elements.dialogSaveButton.classList.toggle(
            "button--primary",
            !isSaved
        );
    }

    function toggleSavedResource(resourceId) {
        const resource = RESOURCES.find(
            (item) =>
                item.id === resourceId
        );

        if (!resource) {
            return;
        }

        const savedIndex =
            state.activity.savedIds.indexOf(
                resource.id
            );

        if (savedIndex === -1) {
            state.activity.savedIds.push(
                resource.id
            );

            state.activity.studyPoints += 5;

            showToast(
                `${resource.code} saved.`,
                "success"
            );
        } else {
            state.activity.savedIds.splice(
                savedIndex,
                1
            );

            showToast(
                `${resource.code} removed from saved resources.`,
                "success"
            );
        }

        saveActivity();

        renderStatistics();
        renderShowcase();
        renderDepartmentSections();
        renderBrowseResources();

        if (
            state.selectedResourceId ===
            resource.id
        ) {
            updateDialogSaveButton(resource);
        }
    }

    function performSearch(
        query,
        countSearch = true
    ) {
        state.searchTerm = cleanText(
            query,
            80
        );

        elements.sidebarSearchInput.value =
            state.searchTerm;

        elements.browseSearchInput.value =
            state.searchTerm;

        if (
            countSearch &&
            state.searchTerm
        ) {
            state.activity.searchCount += 1;
            state.activity.studyPoints += 2;

            saveActivity();
            renderStatistics();
        }

        showView("browse");
        renderBrowseResources();
    }

    function handleResourceAction(event) {
        const button = event.target.closest(
            "[data-resource-action]"
        );

        if (!button) {
            return;
        }

        const resourceId =
            button.dataset.resourceId;

        if (
            button.dataset.resourceAction ===
            "view"
        ) {
            openResource(resourceId);
        }

        if (
            button.dataset.resourceAction ===
            "save"
        ) {
            toggleSavedResource(resourceId);
        }
    }

    function handleCarouselButton(event) {
        const button = event.currentTarget;

        const track = document.getElementById(
            button.dataset.scrollTarget
        );

        if (!track) {
            return;
        }

        const direction =
            Number(
                button.dataset.scrollDirection
            ) || 1;

        const firstCard =
            track.querySelector(
                ".resource-card"
            );

        const scrollAmount =
            firstCard
                ? firstCard.offsetWidth + 16
                : 300;

        track.scrollBy({
            left:
                scrollAmount *
                direction,

            behavior: "smooth"
        });
    }

    function resetActivity() {
        const confirmed = window.confirm(
            "Reset all StudyPal searches, viewed resources, saved resources, points, and streak activity?"
        );

        if (!confirmed) {
            return;
        }

        state.activity =
            createDefaultActivity();

        saveActivity();

        renderStatistics();
        renderShowcase();
        renderDepartmentSections();
        renderBrowseResources();

        showToast(
            "Your StudyPal activity has been reset.",
            "success"
        );
    }

    function logout() {
        showLoader(
            true,
            "Signing you out..."
        );

        localStorage.removeItem(
            CONFIG.sessionKey
        );

        window.setTimeout(() => {
            window.location.href =
                "/login/afit studypal-login.html";
        }, 700);
    }

    function registerEvents() {
        elements.themeToggle.addEventListener(
            "click",
            toggleTheme
        );

        elements.mobileMenuButton.addEventListener(
            "click",
            () => {
                if (
                    elements.sidebar.classList.contains(
                        "is-mobile-open"
                    )
                ) {
                    closeMobileSidebar();
                } else {
                    openMobileSidebar();
                }
            }
        );

        elements.mobileBackdrop.addEventListener(
            "click",
            closeMobileSidebar
        );

        elements.sidebarCollapseButton.addEventListener(
            "click",
            toggleSidebarCollapse
        );

        elements.sidebarNavigationButtons.forEach(
            (button) => {
                button.addEventListener(
                    "click",
                    () => {
                        showView(
                            button.dataset
                                .viewTarget
                        );
                    }
                );
            }
        );

        elements.headerProfileButton.addEventListener(
            "click",
            () => {
                showView("profile");
            }
        );

        elements.browseResourcesButton.addEventListener(
            "click",
            () => {
                showView("browse");
            }
        );

        elements.sidebarSearchForm.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                performSearch(
                    elements.sidebarSearchInput
                        .value
                );
            }
        );

        elements.browseSearchForm.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();

                performSearch(
                    elements.browseSearchInput
                        .value
                );
            }
        );

        elements.browseSearchInput.addEventListener(
            "input",
            () => {
                state.searchTerm =
                    cleanText(
                        elements
                            .browseSearchInput
                            .value,
                        80
                    );

                elements.sidebarSearchInput.value =
                    state.searchTerm;

                renderBrowseResources();
            }
        );

        elements.departmentFilter.addEventListener(
            "change",
            () => {
                state.departmentFilter =
                    elements.departmentFilter
                        .value;

                renderBrowseResources();
            }
        );

        elements.carouselButtons.forEach(
            (button) => {
                button.addEventListener(
                    "click",
                    handleCarouselButton
                );
            }
        );

        elements.departmentSections.addEventListener(
            "click",
            (event) => {
                const carouselButton =
                    event.target.closest(
                        "[data-scroll-target]"
                    );

                if (carouselButton) {
                    handleCarouselButton({
                        currentTarget:
                            carouselButton
                    });

                    return;
                }

                handleResourceAction(event);
            }
        );

        elements.showcaseTrack.addEventListener(
            "click",
            handleResourceAction
        );

        elements.browseResourceList.addEventListener(
            "click",
            handleResourceAction
        );

        elements.closeDialogButton.addEventListener(
            "click",
            closeResourceDialog
        );

        elements.resourceDialog.addEventListener(
            "click",
            (event) => {
                if (
                    event.target ===
                    elements.resourceDialog
                ) {
                    closeResourceDialog();
                }
            }
        );

        elements.dialogSaveButton.addEventListener(
            "click",
            () => {
                if (
                    state.selectedResourceId
                ) {
                    toggleSavedResource(
                        state.selectedResourceId
                    );
                }
            }
        );

        elements.resetActivityButton.addEventListener(
            "click",
            resetActivity
        );

        elements.logoutButton.addEventListener(
            "click",
            logout
        );

        window.addEventListener(
            "resize",
            () => {
                if (window.innerWidth > 860) {
                    closeMobileSidebar();
                }
            }
        );
    }

    function initialise() {
        showLoader(
            true,
            "Preparing your StudyPal dashboard..."
        );

        if (!initialiseCurrentUser()) {
            return;
        }

        initialiseTheme();
        initialiseSidebarState();
        populateUserInterface();
        renderStatistics();
        renderShowcase();
        renderDepartmentSections();
        renderBrowseResources();
        registerEvents();
        showView("home");

        window.setTimeout(() => {
            showLoader(false);
        }, 500);
    }

    initialise();
})();
