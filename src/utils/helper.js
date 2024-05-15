import toast from "react-hot-toast";

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


// utils/localStorage.js
export const loadTodos = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    toast.error(err.message || "Could not get todos")
    return [];
  }
};

export const saveTodos = (todos) => {
  try {
    const serializedState = JSON.stringify(todos);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    toast.error(err.message || "Could not save todos")
  }
};

