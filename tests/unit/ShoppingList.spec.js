import { mount } from '@vue/test-utils'
import ShoppingList from '../../src/components/ShoppingList.vue';

let itemName,
  itemObj,
  itemObjBought,
  itemObj2;

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
  })

  // 7.2
  it('renders name in template', () => {
    const wrapper = mount(ShoppingList, {
      propsData: {
        name: 'My Collectibles',
      },
    });

    expect(wrapper.html()).toContain('My Collectibles');
  });

  // 7.3
  it('is empty by default', () => {
    const wrapper = mount(ShoppingList);
    expect(wrapper.vm.items).toHaveLength(0);
  });

  // 7.3  
  it('can add item', () => {
    const wrapper = mount(ShoppingList);
    
    wrapper.setData({ newItem: itemName });
    wrapper.vm.add();

    expect(wrapper.vm.items).toContainEqual(
      expect.objectContaining({ name: itemName })
    );
  });

  // 7.4
  it('can remove item', () => {
    const wrapper = mount(ShoppingList);

    wrapper.setData({ items: [itemObj] });
    wrapper.vm.remove(itemObj);

    expect(wrapper.vm.items).not.toContain(itemObj);
  });

  // 7.5
  it('can toggle item', () => {
    const wrapper = mount(ShoppingList);
    
    wrapper.setData({ items: [itemObj] });
    wrapper.vm.toggle(itemObj);

    expect(wrapper.vm.items).toContainEqual(itemObjBought);

    wrapper.vm.toggle(itemObj);
    expect(wrapper.vm.items).toContainEqual(itemObj);
  });

  // 7.6
  it('counts remaining items that are not bought', () => {
    const wrapper = mount(ShoppingList);
    wrapper.setData({ items: [itemObj, itemObj2] });

    expect(wrapper.vm.remainingItems).toEqual(1);

    wrapper.vm.items[0].bought = true;

    expect(wrapper.vm.remainingItems).toEqual(0);
  });
});
