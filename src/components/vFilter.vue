<template>
    <div>
        <button @click="todoRemoveAll">전체삭제</button>
    </div>
</template>

<script>
export default {
    methods : {
        todoRemoveAll(){
            this.$store.commit('todoRemoveAll');
            console.log(this.$store.getters.getTodoList);
        }
    }
}
</script>