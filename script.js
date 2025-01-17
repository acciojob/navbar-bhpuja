// Add interactivity for debugging or logging clicks on navigation items
document.querySelectorAll(".navbar li").forEach((item) => {
    item.addEventListener("click", () => {
        console.log(`You clicked on: ${item.textContent}`);
        alert(`You clicked on: ${item.textContent}`);
    });
});
