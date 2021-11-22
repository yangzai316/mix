

export const createElement = (tree) => {
    const container = document.createElement(tree.name);
    container.dataset.id = tree.id;
    updateAttribute(container, tree.style);

    const fragment = document.createDocumentFragment();
    (tree?.children || []).forEach(item => {
        const ele = document.createElement(item.name);
        item.content && (ele.innerHTML = item.content);
        ele.dataset.id = item.id;
        updateAttribute(ele, item.style)
        fragment.appendChild(ele);
    });
    container.appendChild(fragment);
    return container;
};
export const updateAttribute = (ele, attrs) => {
    for (const key in attrs) {
        ele.style[key] = attrs[key];
    }
}
