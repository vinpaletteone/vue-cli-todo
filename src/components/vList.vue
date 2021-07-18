<template>
    <ul class="todo-list">
        <li v-for="(item, i) in todoItems" :key="i">
            {{item.item}},  
            {{item.date}}
            <button @click="todoRemove(i)">삭제도 가능~</button>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            todoItems: []
        }
    },
    watch : {
        todoItems(newTodoItems, oldTodoItems){
            this.$store.state.todoList
        }
    },
    created(){
        this.todoItems = this.$store.getters.getTodoList;
    },
    methods : {
        todoRemove(idx){
            this.$store.commit('todoLocalSet');
            this.$store.commit('todoRemove',idx);
        }
    }
}
</script>