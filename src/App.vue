<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent, onBeforeMount } from "vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
// import moment from "moment";
import "moment/dist/locale/zh-cn";
// import { AppDeviceEnquire } from '@/utils/mixin';
// moment.locale("zh-cn");

  
export default defineComponent({
    name: 'App',
    components: {
      // AConfigProvider: ConfigProvider,
      // ARangePicker: DatePicker.RangePicker,
    },
    setup() {
      onBeforeMount(() => {
        // store.dispatch('user/getMenus')
      })

      return {
        locale: zhCN,
      }
    },
  })

</script>

<template>
  <a-config-provider :locale="locale">
    <a-range-picker></a-range-picker>
  </a-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
