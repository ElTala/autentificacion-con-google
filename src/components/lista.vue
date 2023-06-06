<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Autores
        </th>
        <th class="text-left">
          Posts
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item,i in posts" :key="posts">
        <td>{{ item.nombre}}</td>
        <td>{{ item.title }}</td>
      </tr>
    </tbody>
    
  </v-table>

  
</template>

<script setup>
  
import{ref, onMounted} from 'vue';
onMounted(()=>{
  let p={};
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    posts.value = json;
  for(let p=0; p < posts.value.length; p++){
    fetch('https://jsonplaceholder.typicode.com/users/' + posts.value[p].userId)
    .then(response => response.json())
    .then( r => {
      posts.value[p].nombre=r.name;
    });
  }
});
});
const posts = ref([]);
</script>
