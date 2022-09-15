import { createSlice } from "@reduxjs/toolkit";
import { addTodoAsync, getTodoAsync, removeTodoAsync, toggleTodoAsync } from "./services";




export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: localStorage.getItem('activeFilter'),
        addNewTodoIsLoading: false,
        addNewTodoError: null,
        addNewTodo:{
            isLoading:false,
            error:false,
        }

    },
    reducers: {

/*
        toggle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.completed = !item.completed
        },*/
        /*
        destroy: (state, action) => {
            const id = action.payload;
            //silinmek istenen item dışı tüm itemları filtreleme
            const filtered = state.items.filter((item) => item.id !== id)
            //filtrelenen item ı state olarak verme
            state.items = filtered;
        },*/
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        //button, cleaning
        clearCompleted: (state) => {
            const filtered = state.items.filter((item => item.completed === false));

            state.items = filtered;

        },

    },
    extraReducers: {
        //gettodos
        [getTodoAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getTodoAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodoAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        //addtodo 
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodo.isLoading = true;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.addNewTodo.isLoading = false;
        },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodo.isLoading = false;
            state.addNewTodo.error = action.error.message;
        },

        //toggle todo
        [toggleTodoAsync.fulfilled]:(state,action)=>{
            const {id,completed}=action.payload;
            const index=state.items.findIndex(item =>item.id===id);
            state.items[index].completed=completed;
        },
        //remove todo
        [removeTodoAsync.fulfilled]:(state,action)=>{
            const id = action.payload;
            const index =state.items.findIndex((item)=>item.id ===id);

            state.items.splice(index,1);
        },

    }
})


//Selectors
export const selectTodos = (state) => state.todos.items;

//all filtered
export const selectFilteredTodos = (state) => {
    if (state.todos.activeFilter === "all") {
        return state.todos.items;
    }

    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === 'active'
            ? todo.completed === false
            : todo.completed === true
    )
}

export const selectActiveFilter = (state) => state.todos.activeFilter

export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;