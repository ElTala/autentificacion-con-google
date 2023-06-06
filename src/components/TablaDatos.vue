<template>
  <v-data-table :headers="headers"
                :items="desserts"
                :sort-by="[{ key: 'calories', order: 'asc' }]"
                class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Tabla de datos</v-toolbar-title>
        <v-divider class="mx-4"
                   inset
                   vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog"
                  max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn color="primary"
                   dark
                   class="mb-2"
                   v-bind="props">
              Nuevo autor
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12"
                         sm="6"
                         md="4">
                    <v-text-field v-model="editedItem.name"
                                  label="Autor"></v-text-field>
                  </v-col>
                  <v-col cols="12"
                         sm="6"
                         md="10">
                    <v-text-field v-model="editedItem.post"
                                  label="Titulo del post"></v-text-field>
                  </v-col>
                  <v-col cols="12"
                         sm="12"
                         md="12">
                    <v-text-field v-model="editedItem.body"
                                  label="Contenido del post"></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1"
                     variant="text"
                     @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue-darken-1"
                     variant="text"
                     @click="save">
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Esta Seguro que desea eliminarlo?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small"
              class="me-2"
              @click="editItem(item.raw)">
        mdi-pencil
      </v-icon>
      <v-icon size="small"
              @click="deleteItem(item.raw)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary"
             @click="initialize">
        Reset
      </v-btn>

    </template>
  </v-data-table>



          
   

</template>

<script setup>
import { ref, onMounted } from 'vue';
let p={};
const dialog = ref(false);
const dialogDelete = ref(false);
const headers = [
  {
    title: 'Autor',
    align: 'start',
    sortable: false,
    key: 'name',
  },
  { title: 'Titulo', key: 'title' },
  { title: 'Post', key: 'body' },
 
];
const desserts = ref([]);
const editedIndex = ref(-1);
const editedItem = ref({
  name: '',
  post: '',
  body: '',
  
});
const defaultItem = {
  name: '',
  post: '',
  body: '',
 
};


  onMounted(()=>{
  let p={};
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    desserts.value = json;
  for(let p=0; p < desserts.value.length; p++){
    fetch('https://jsonplaceholder.typicode.com/users/' + desserts.value[p].userId)
    .then(response => response.json())
    .then( r => {
      desserts.value[p].name=r.name;
    });
  }
});
});
const posts = ref([]);


function editItem(item) {
  editedIndex.value = desserts.value.indexOf(item);
  Object.assign(editedItem.value, item);
  dialog.value = true;
}

function deleteItem(item) {
  editedIndex.value = desserts.value.indexOf(item);
  Object.assign(editedItem.value, item);
  dialogDelete.value = true;
}

function deleteItemConfirm() {
  desserts.value.splice(editedIndex.value, 1);
  closeDelete();
}

function close() {
  dialog.value = false;
  editedItem.value = { ...defaultItem };
  editedIndex.value = -1;
}

function closeDelete() {
  dialogDelete.value = false;
  editedItem.value = { ...defaultItem };
  editedIndex.value = -1;
}

function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value);
  } else {
    desserts.value.push(editedItem.value);
  }
  close();
}
</script>