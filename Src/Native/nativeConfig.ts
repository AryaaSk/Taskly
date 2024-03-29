if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    LoadDarkMode();
}
else {
    //do nothing since native is in light mode by default
}

TAB_BAR_CONFIG = [
    { iconSrc: "/Assets/checkmark.svg", title: "Tasks", path: "/Src/Tasks/tasks.html" },
    { iconSrc: "/Assets/cart.svg", title: "Rewards", path: "/Src/Rewards/rewards.html" },
    { iconSrc: "/Assets/trophy.svg", title: "Goals", path: "/Src/Goals/goals.html" },
    { iconSrc: "/Assets/flame.svg", title: "Progress", path: "/Src/Progress/progress.html" },
    { iconSrc: "/Assets/gearshape.svg", title: "Setup", path: "/Src/Setup/setup.html", subpaths: ["/Src/Migration/export.html", "/Src/Setup/AddTask/addTask.html", "/Src/Setup/AddGoal/addGoal.html",  "/Src/Setup/AddReward/addReward.html"] },
];
InitTabBar();