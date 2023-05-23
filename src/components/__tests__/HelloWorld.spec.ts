import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Hero from '../Hero.vue'

describe('Hero', () => {
  it('renders properly', () => {
    const wrapper = mount(Hero, { props: { msg: 'COVIDY' } })
    expect(wrapper.text()).toContain('COVIDY')
  })
})
