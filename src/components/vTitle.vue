<template>
    <div class="title">
        <p>Hi, {{ name }} !</p>
        <span>{{ today }}</span>
        <p>총 할 일 : {{ $store.state.total }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name : 'Subin'
        }
    },
    created(){
        const nDate = new Date();
        const month = nDate.getMonth() + 1;
        const date = nDate.getDate();

        this.today = `${month}/${date}`;
    },
    mounted(){
        const todoList = JSON.parse(localStorage.getItem('todoList'));
        if(todoList===null || todoList.length===0) return;

        this.$store.commit('totalSet', todoList.length);
    }
}
</script>