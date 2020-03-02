import { mount } from '@vue/test-utils'
import ShoppingList from '../../src/components/ShoppingList.vue';

let itemName,
  itemObj,
  itemObjBought,
  itemObj2,
  wrapper;

describe('Shopping List', () => {

  beforeEach(() => {
    itemName = 'Mona Lisa'; 
    itemObj = {
      'bought': false,
      'name': itemName,
    };
    itemObjBought = {
      'bought': true,
      'name': itemName,
    };
    itemObj2 = {
      'bought': true,
      'name': 'Phil Lisa',
    };

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
