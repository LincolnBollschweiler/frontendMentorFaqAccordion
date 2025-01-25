export const mainEvents = () => {
  $(document)
    .off("click", ".faq-list button")
    .on("click", ".faq-list button", (event) => {
      const button = event.currentTarget;
      const content = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true" || false;

      button.setAttribute("aria-expanded", !expanded);
      content.hidden = expanded;

      $(content).removeClass("show");
      $(content).addClass(expanded ? "" : "show");

      // change the icon based on the state
      const icon = button.querySelector("img");
      icon.src = icon.src.includes("plus")
        ? "images/icon-minus.svg"
        : "images/icon-plus.svg";
    });
};
