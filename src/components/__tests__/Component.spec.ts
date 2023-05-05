import { it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Component from '../Component.vue';
import { i18nMock, piniaMock } from './mockPlugins';

it('does work', () => {
  const wrapper = mount(Component, {
    global: {
      plugins: [i18nMock, piniaMock],
    },
  });
  expect(wrapper.findComponent(Component)).toBeTruthy();
});
