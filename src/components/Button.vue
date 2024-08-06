<script setup>
    import { defineProps } from 'vue';

    defineProps({
        bgColor: {
            type: String,
            default: "bg-white"
        },
        textColor: "",
        text: ""
    })

</script>

<template>
    <button :class="`relative ${bgColor} ${textColor} h-10 w-auto px-4 font-medium rounded-xl shadow-md`">
        {{ text }}
        <span
            class="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"
        ></span>
    </button>
</template>