import { it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Component from '../Component.vue';

const options = {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn,
        initialState: {
          items: [],
        },
      }),
    ],
  },
};

it('works', () => {
  const wrapper = mount(Component, options);
  expect(wrapper.findComponent(Component)).toBeTruthy();
});
