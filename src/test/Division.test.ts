import {mount} from "@vue/test-utils";
import PageDivision from "@/layouts/PageDivision.vue";
import { expect, it } from 'vitest'
import polaroidCard from '@/components/polaroidCard.vue'

const wrapper = mount(PageDivision, {
  propsData: {
    elems: [polaroidCard, polaroidCard]
  }
})

it("Testing if props is an object and remain that", async () => {
    expect(typeof wrapper.props('elems')).toBe('object')
});

it("Testing if all the pushed element inside the array remain avaible", async () => {
    expect(wrapper.props('elems')?.length).toBe(2)
});

it("Testing if div is loaded", async () => {
       const renderedHtml = wrapper.find('div');
       expect(renderedHtml.html()).toContain('div')

})