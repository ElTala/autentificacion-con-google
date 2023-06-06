<template>

      <v-app-bar color="primary"
                 prominent>
        <v-app-bar-nav-icon variant="text"
                            @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Tabla de opciones</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>

      
        
       
        
      </v-app-bar>

      <v-navigation-drawer v-model="drawer"
                           location="top"
                           temporary>
        <v-list density="compact" nav>
          <v-list-item @click="$router.push('/')"
                       prepend-icon="mdi-view-dashboard"
                       title="inicio"
                       value="value">
          </v-list-item>
          <v-list-item @click="$router.push('/tabla')"
                       prepend-icon="mdi-table"
                       title="Tabla"
                       value="value">
          </v-list-item>

          <v-list-item @click="$router.push('/tabladatos')"
                       prepend-icon="mdi-table"
                       title="Tabla de datos"
                       value="value">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,

    }),
    watch: {
      group() {
        this.drawer = false
      },
    },
  }
</script>
