<template>
    <div class="title">
        <p>Hi, {{ name }} !</p>
        <span>{{ today }}</span>
        <p>총 할 일 : {{ total }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name : 'Subin',
            total : 0
        }
    },
    created(){
        const nDate = new Date();
        const month = nDate.getMonth() + 1;
        const date = nDate.getDate();

        this.today = `${month}/${date}`;
    }
}
</script>