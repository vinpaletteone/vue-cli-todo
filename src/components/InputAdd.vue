<template>
    <div>
        <input type="text" placeholder="입력하세요!" v-model="newItem" @keyup.enter="addItem">
        <button @click="addItem">등록</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newItem: ''
        }
    },
    created(){
        const todoList = localStorage.getItem('todoList');

        if(todoList == null) return;
        this.$store.commit('todoSet', JSON.parse(todoList));
    },
    methods : {
        addItem(){
            if(this.newItem!==''){
                let value = {
                    item:this.newItem,
                    date:`${new Date().getMonth()+1}/${new Date().getDate()}`,
                    completed: false
                }

                this.todoAdd(value);
                this.$store.commit('todoLocalSet');

                this.$store.commit('increment');
                this.clearInput();
            }
        },
        clearInput(){
            this.newItem = '';
        },
        todoAdd(value){
            this.$store.commit('todoAdd',value);
        }
    }
}
</script>