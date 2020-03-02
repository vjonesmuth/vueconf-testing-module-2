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

  it('renders name in template', () => {
    const wrapper = mount(ShoppingList, {
      propsData: {
        name: 'My Collectibles',
      },
    });

    expect(wrapper.html()).toContain('My Collectibles');
  });

  it('is empty by default', () => {
    const wrapper = mount(ShoppingList);
    expect(wrapper.vm.items).toEqual([]);
  });

  it('can add item', () => {
    const wrapper = mount(ShoppingList);
    
    wrapper.setData({ newItem: itemName });
    wrapper.vm.add();

    expect(wrapper.vm.items).toContainEqual(itemObj);
  });

  it('can remove item', () => {
    const wrapper = mount(ShoppingList);

    wrapper.setData({ items: [itemObj] });
    wrapper.vm.remove(itemObj);

    expect(wrapper.vm.items).not.toContain(itemObj);
  });

  it('can toggle item', () => {
    const wrapper = mount(ShoppingList);
    
    wrapper.setData({ items: [itemObj] });
    wrapper.vm.toggle(itemObj);

    expect(wrapper.vm.items).toContainEqual(itemObjBought);

    wrapper.vm.toggle(itemObj);
    expect(wrapper.vm.items).toContainEqual(itemObj);
  });

  it('counts remaining items that are not bought', () => {
    const wrapper = mount(ShoppingList);
    wrapper.setData({ items: [itemObj, itemObj2] });

    expect(wrapper.vm.remainingItems).toEqual(1);

    wrapper.vm.items[0].bought = true;

    expect(wrapper.vm.remainingItems).toEqual(0);
  });
});
