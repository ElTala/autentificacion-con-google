<template>
<v-btn {{ props.nombre }}></v-btn>
</template>

<script setup>
import {ref} from 'vue';
const props= defineProps({
nombre: String
})
const nombre =ref (props.nombre);
</script>

