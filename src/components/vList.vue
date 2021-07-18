<template>
    <ul class="todo-list">
        <li v-for="(item, i) in this.$store.state.todoList" :key="i">
            {{item.item}},  
            {{item.date}}
            <button @click="todoRemove(i)">삭제도 가능~</button>
        </li>
    </ul>
</template>
<script>
export default {
    methods : {
        todoRemove(idx){
            this.$store.commit('todoRemove',idx);
            this.$store.commit('todoLocalSet');
            this.$store.commit('decrement');
        }
    }
}
</script>