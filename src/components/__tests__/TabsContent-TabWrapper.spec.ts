import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TabsWrapper from '@/components/ui/tabs/TabsWrapper.vue'
import TabContent from '@/components/ui/tabs/TabContent.vue'
import type { useTranslation } from '@/composables/useTranslation'

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

const mockI18n = vi.hoisted(() => {
  return {
    composable: vi.fn().mockReturnValue({
      t: (str: string) => str,
    }),
  };
});

vi.mock('@/composables/useTranslation.ts', () => {
  return {
    useTranslation: mockI18n.composable,
  }
});


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

    const firstPanel = wrapper.findAll(`[data-test="tab-content"]`)[0]
    const secondPanel = wrapper.findAll(`[data-test="tab-content"]`)[1]

    expect(firstPanel.isVisible()).toBe(true)
    expect(secondPanel.isVisible()).toBe(false)
  })

  it('switches the content based on the tab clicked', async () => {
    const wrapper = mount(wrapperConfig[0], wrapperConfig[1])
    await wrapper.vm.$nextTick()

    await wrapper.findAll(`[data-test="tab-title"]`)[1].trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll(`[data-test="tab-content"]`)[1].isVisible()).toBe(true)
    expect(wrapper.findAll(`[data-test="tab-content"]`)[0].isVisible()).toBe(false)

    await wrapper.findAll(`[data-test="tab-title"]`)[2].trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll(`[data-test="tab-content"]`)[2].isVisible()).toBe(true)
    expect(wrapper.findAll(`[data-test="tab-content"]`)[1].isVisible()).toBe(false)
  })
})
