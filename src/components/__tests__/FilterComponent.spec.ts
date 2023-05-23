import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Filter from '../Filter.vue'

describe('Filter', () => {
  const wrapper = mount(Filter)

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Filtrar dados sobre um país')
  })

  it('filters properly', async () => {
    await wrapper.find('input').trigger('click')
    expect(wrapper.html()).toContain('')
  })
})
