import { createSlice, nanoid } from "@reduxjs/toolkit";
import { filterTodos, loadTodos, saveTodos } from "../../utils/helper";


const initialState = {
    items: loadTodos(),
    tabs: 'allTodos', // initial tab
    filteredItems: [], // to store filtered todos
    editingTodos: null,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const id = nanoid();
            const newTodo = { id, title: action.payload?.title, checked: false };
            state.items.push(newTodo);
            saveTodos(state.items) // save to local storage
            state.filteredItems = filterTodos(state.items, state.tabs);
        },


        removeTodo: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload.id);
            saveTodos(state.items); // Save updated todos to local storage
            state.filteredItems = filterTodos(state.items, state.tabs);
        },

        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const todoToUpdate = state.items.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.title = title;
                saveTodos(state.items); // Save updated todos to local storage
                state.filteredItems = filterTodos(state.items, state.tabs);
            }
        },

        setTabs: (state, action) => {
            state.tabs = action.payload;
            state.filteredItems = filterTodos(state.items, action.payload);
        },

        isChecked: (state, action) => {
            const todo = state.items.find(item => item.id === action.payload);
            if (todo) {
                todo.checked = !todo.checked;
            }
            saveTodos(state.items) // save to local storage
            state.filteredItems = filterTodos(state.items, state.tabs);
        },

        setEditTodo: (state, action) => {
            state.editingTodos = action.payload;
        }
    }
})

export const { addTodo, removeTodo, updateTodo, setTabs, isChecked, setEditTodo } = todoSlice.actions;
export default todoSlice.reducer;