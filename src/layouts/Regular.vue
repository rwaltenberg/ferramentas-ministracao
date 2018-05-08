<template>
  <div id="App">
    <md-drawer class="side-menu" md-permanent="full">
      <md-toolbar class="md-primary" md-elevation="0">
        <h1>Ferramentas de Ministração</h1>
      </md-toolbar>

      <md-list>
        <md-list-item :to="{ name: 'Frequencia' }">
          <md-icon>done_all</md-icon>
          <span class="md-list-item-text">Lista de Frequência</span>
        </md-list-item>

        <md-list-item :to="{ name: 'Duplas' }">
          <md-icon>supervisor_account</md-icon>
          <span class="md-list-item-text">Duplas de Ministradores</span>
        </md-list-item>

        <md-list-item :to="{ name: 'Diretorio' }">
          <md-icon>face</md-icon>
          <span class="md-list-item-text">Diretório de Membros</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-content md-tag="main" class="main-content">
      <router-view/>
    </md-content>
    <md-bottom-bar class="bottom-menu" md-type="shift" :md-active-item="activeMenuItem">
      <router-link class="bottom-bar-item" :to="{ name: 'Frequencia' }">
        <md-bottom-bar-item id="BottomBarRouteFrequencia" md-label="Frequência" md-icon="done_all"></md-bottom-bar-item>
      </router-link>
      <router-link class="bottom-bar-item" :to="{ name: 'Duplas' }">
        <md-bottom-bar-item id="BottomBarRouteDuplas" md-label="Duplas" md-icon="supervisor_account"></md-bottom-bar-item>
      </router-link>
      <router-link class="bottom-bar-item" :to="{ name: 'Diretorio' }">
        <md-bottom-bar-item id="BottomBarRouteDiretorio" md-label="Membros" md-icon="face"></md-bottom-bar-item>
      </router-link>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'RegularLayout',
  computed: {
    activeMenuItem () {
      if (this.$route.matched.length < 2) {
        return null
      }

      return `BottomBarRoute${this.$route.matched[1].name}`
    }
  },
  watch: {
    '$route.fullPath': function () {
      setTimeout(() => {
        const bottomBar = this.$children.find(m => m.$vnode.componentOptions.tag === 'md-bottom-bar')
        bottomBar && bottomBar.setActiveItemByIndex()
      }, 0)
    }
  }
}
</script>

<style lang="postcss" scoped>
  #App {
    bottom: 0;
    display: grid;
    grid-template-columns: 300px 2fr @599 1fr @(print) 1fr;
    grid-template-rows: 1fr @599 1fr 56px @(print) 1fr;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .main-content {
    background-color: #f1f1f1;
    grid-row: 1;
    justify-self: center;
    padding: 10px 30px @599 0 10px;
    width: 100%;
  }

  .side-menu {
    grid-row: 1;
    display: block @(print) none;
    width: 100%;
  }

  .md-toolbar h1 {
    line-height: 1.2;
    font-weight: normal;
    font-size: 1.6em;
  }

  .bottom-menu {
    display: none @599 flex @(print) none;
    grid-column: 1 / span 2;
    align-self: end;
  }

  .bottom-menu .bottom-bar-item {
    flex-grow: 1;
  }

  .bottom-menu .md-bottom-bar-item {
    width: 100%;
  }
</style>
