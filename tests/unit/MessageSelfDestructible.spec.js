import { mount } from '@vue/test-utils'

import MessageSelfDestructible from '../../src/components/MessageSelfDestructible.vue';

jest.useFakeTimers();

const message = 'My Message';

describe('MessageSelfDestructible', () => {

  it('ensure interval is defined after component mounted', async () => {
    const wrapper = mount(MessageSelfDestructible, {
      propsData: {
        message,
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.interval).not.toBe(undefined);
    wrapper.destroy();
  });

  it('counter data increases by 1 for every passed second', async () => {
    const wrapper = mount(MessageSelfDestructible, {
      propsData: {
        message,
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.counter).toBe(0);
    jest.advanceTimersByTime(1000);

    expect(wrapper.vm.counter).toBe(1);
    wrapper.destroy();
  });

  it('self-destructs when counter gets equal to the timer', async () => {
    const wrapper = mount(MessageSelfDestructible, {
      propsData: {
        message,
      },
    });    

    const spy = jest.spyOn(wrapper, 'destroy');

    wrapper.setData({
      counter: 5,
    });

    await wrapper.vm.$nextTick();

    wrapper.destroy();

    expect(spy).toHaveBeenCalled();
    expect(wrapper.vm.interval).toBe(undefined);
    expect(wrapper.emitted('deleted')).toBeTruthy();
  });
});