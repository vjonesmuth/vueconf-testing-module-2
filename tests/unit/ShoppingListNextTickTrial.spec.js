import { mount } from '@vue/test-utils'
import ShoppingList from '../../src/components/ShoppingList.vue';

let wrapper;

describe('Shopping List', () => {

  beforeEach(() => {
    wrapper = mount(ShoppingList);
  })

  it('renders name in template', async () => {
    wrapper.setProps({ name: 'My Collectibles' });
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toContain('My Collectibles');
  });

  it('is empty by default', () => {
    expect(wrapper.vm.items).toHaveLength(0);
  });
});
