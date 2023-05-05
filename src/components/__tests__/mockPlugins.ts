import { vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { createI18n } from 'vue-i18n';

export const piniaMock = createTestingPinia({
  createSpy: vi.fn(),
  initialState: {
    items: [],
  },
});

export const i18nMock = createI18n({
  legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': {
      init: 'Initialize',
    },
  },
});
