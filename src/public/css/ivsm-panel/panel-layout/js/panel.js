const titleDesktop = document.getElementById("title-desktop");
const layoutContent = document.getElementById("layout-content");
const buttonDisplayMenu = document.getElementById("menu");
const verticalMenu = document.getElementById("vertical-menu");
const menuItems = document.getElementById("menu-items");

let buttonExpanded = buttonDisplayMenu.getAttribute("aria-expanded") === "true";

const toggleMenu = () => {
    buttonExpanded = !buttonExpanded;
    verticalMenu.classList.toggle("activated", buttonExpanded);
    titleDesktop.style.visibility = buttonExpanded ? "hidden" : "visible";
    buttonDisplayMenu.setAttribute("aria-expanded", buttonExpanded.toString());
};

layoutContent.addEventListener("click", () => {
    if (buttonExpanded) toggleMenu();
});

buttonDisplayMenu.addEventListener("click", toggleMenu);

let tabler_icons = {
    ARROW: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="20" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
            </svg>`,
    ARROW_DOWN: `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-down" width="20" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 5l0 14" />
            <path d="M16 15l-4 4" />
            <path d="M8 15l4 4" />
        </svg>
    `,
};

const jsonPanelLoad = async () => {
    try {
        const response = await fetch("/css/ivsm-panel/config/panel.json");
        if (!response.ok) {
            throw new Error("[ERROR] Network response was not ok");
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(
            "[ERROR] There was a problem with the fetch operation:",
            error
        );
    }
};

const panelLoadProcess = async () => {
    try {
        const json = await jsonPanelLoad();

        json.panel.config.sidebar.navigation.items.forEach((items) => {
            if (items.sub_items) {
                const containerId = `sub_items_container_${items.id}`;
                menuItems.innerHTML += `
                <ul class="d-flex flex-column m-0 p-0">
                    <li><a href='#' id="anchor_sub_items_${items.id}">${items.description} <span class="arrow-effect" id="anchor_arrow_item_${items.id}">${tabler_icons.ARROW}</span></a></li>
                    <ul id="${containerId}" class="sub-items gap-4">
                       
                    </ul>
                </ul>
                `;

                let subItemsContainer = document.getElementById(containerId);

                items.sub_items.forEach((subItem) => {
                    const subItemElement = document.createElement("li");
                    const subItemLink = document.createElement("a");
                    subItemLink.href = subItem.link_to;
                    subItemLink.textContent = subItem.description;
                    subItemElement.appendChild(subItemLink);
                    subItemsContainer.appendChild(subItemElement);
                });
            } else {
                menuItems.innerHTML += `
                <li><a href='${items.link_to}'>${items.description}</a></li>
                `;
            }
        });
        json.panel.config.sidebar.navigation.items.forEach((items) => {
            if (items.sub_items) {
                let menuItem = document.getElementById(
                    `sub_items_container_${items.id}`
                );
                let anchorItem = document.getElementById(
                    `anchor_sub_items_${items.id}`
                );
                let anchorArrow = document.getElementById(
                    `anchor_arrow_item_${items.id}`
                );
                anchorItem.addEventListener("click", () => {
                    menuItem.classList.toggle("show");
                    anchorArrow.classList.toggle("arrow");
                });
            }
        });
    } catch (error) {
        console.error("[ERROR] Error processing panel load:", error);
    }
};

panelLoadProcess();