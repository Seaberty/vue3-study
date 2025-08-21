<script>
const obj = {
    count: 0,
}
export default {
    data() {
        // return {
        //     count: 0,
        // }
        return obj
    },
}
</script>

<template>
    <button @click="count++">
        {{ count }}
    </button>
</template>