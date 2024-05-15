// utils/helper.js
export const filterTodos = (items, filter) => {
  switch (filter) {
    case 'Checked':
      return items.filter(item => item.checked);
    case 'unChecked':
      return items.filter(item => !item.checked);
    case 'allTodos':
    default:
      return items;
  }
};
