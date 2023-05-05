<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useStore } from '../store';

const { t } = useI18n();
const store = useStore();
const { isLoading } = storeToRefs(store);
store.init();
</script>

<template>
  <button @click="store.init()">{{ t('init') }}</button>
  <p>Loading: {{ isLoading ? 'Yes' : 'No' }}</p>
</template>
