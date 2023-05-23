import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Hero from '../Hero.vue'

describe('Hero', () => {
  const wrapper = mount(Hero)

  test('renders properly', async () => {
    expect(wrapper.text()).toContain('Conheça o COVIDY')
  })
  
  test("has btn-scroll", () => {
    expect(wrapper.find("#btn-scroll").exists()).toBe(true);
  });

  test("has btn-github", () => {
    expect(wrapper.find("#btn-github").exists()).toBe(true);
  });

  test('clicked btn-scroll', async () => {
    await wrapper.find('#btn-scroll').trigger('click')
  })

  test('clicked btn-github', async () => {
    await wrapper.find('#btn-github').trigger('click')
  })
})
