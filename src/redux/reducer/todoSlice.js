import { createSlice, nanoid } from "@reduxjs/toolkit";
import { filterTodos } from "../../utils/helper";


const initialState = {
    items: [],
    tabs: 'allTodos', // initial tab
    filteredItems: [], // to store filtered todos
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const id = nanoid();
            const newTodo = { id, title: action.payload?.title, checked: false };
            state.items.push(newTodo);
            state.filteredItems = filterTodos(state.items, state.tabs);
        },


        removeTodo: (state, action) => {

        },

        updateTodo: (state, action) => {

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
            state.filteredItems = filterTodos(state.items, state.tabs);
        }
    }
})

export const { addTodo, removeTodo, updateTodo, setTabs, isChecked } = todoSlice.actions;
export default todoSlice.reducer;