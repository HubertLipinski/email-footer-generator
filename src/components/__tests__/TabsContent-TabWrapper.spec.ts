import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TabsWrapper from '@/components/ui/tabs/TabsWrapper.vue'
import TabContent from '@/components/ui/tabs/TabContent.vue'

const wrapperConfig = [
  {
    components: {
      TabsWrapper,
      TabContent,
    },
    template: `<div><TabsWrapper>
      <TabContent title="Tab 1">
        <p>Tab 1 Content</p>
      </TabContent>
      <TabContent title="Tab 2">
        <p>Tab 2 Content</p>
      </TabContent>
      <TabContent title="Tab 3">
        <p>Tab 3 Content</p>
      </TabContent>
    </TabsWrapper></div>
  `,
  },
  {
    attachTo: document.body,
  },
]

describe('the use of TabsContent with TabsWrapper', () => {
  it('renders the tab titles', async () => {
    const wrapper = mount(wrapperConfig[0], wrapperConfig[1])
    await wrapper.vm.$nextTick()

    const titleEls = wrapper.findAll(`[data-test="tab-title"]`)

    expect(titleEls.length).toBe(3)
    expect(titleEls[0].text()).toBe('Tab 1')
    expect(titleEls[1].text()).toBe('Tab 2')
    expect(titleEls[2].text()).toBe('Tab 3')
  })

  it('renders the tab panel content', async () => {
    const wrapper = mount(wrapperConfig[0], wrapperConfig[1])
    await wrapper.vm.$nextTick()

    const titleEls = wrapper.findAll(`[data-test="tab-content"]`)

    expect(titleEls.length).toBe(3)
    expect(titleEls[0].text()).toBe('Tab 1 Content')
    expect(titleEls[1].text()).toBe('Tab 2 Content')
    expect(titleEls[2].text()).toBe('Tab 3 Content')
  })

  it('only shows the content for the active panel', async () => {
    const wrapper = mount(wrapperConfig[0], wrapperConfig[1])
    await wrapper.vm.$nextTick()

    const firstPanel = wrapper.find(`[data-test="tab-content"]:nth-child(1)`)
    const secondPanel = wrapper.find(`[data-test="tab-content"]:nth-child(2)`)

    expect(firstPanel.isVisible()).toBe(true)
    expect(secondPanel.isVisible()).toBe(false)
  })

  it('switches the content based on the tab clicked', async () => {
    const wrapper = mount(wrapperConfig[0], wrapperConfig[1])
    await wrapper.vm.$nextTick()

    await wrapper.find(`[data-test="tab-title"]:nth-child(2)`).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find(`[data-test="tab-content"]:nth-child(2)`).isVisible()).toBe(true)
    expect(wrapper.find(`[data-test="tab-content"]:nth-child(1)`).isVisible()).toBe(false)

    await wrapper.find(`[data-test="tab-title"]:nth-child(3)`).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find(`[data-test="tab-content"]:nth-child(3)`).isVisible()).toBe(true)
    expect(wrapper.find(`[data-test="tab-content"]:nth-child(2)`).isVisible()).toBe(false)
  })
})
