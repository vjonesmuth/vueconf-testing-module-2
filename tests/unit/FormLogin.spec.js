import { mount, createLocalVue } from '@vue/test-utils'
import router from '../../src/router/index';

import FormLogin from '../../src/components/FormLogin.vue';
import { auth } from '../../src/api';

const localVue = createLocalVue()

let validEmail,
  validPassword;

describe('Shopping List', () => {

  beforeEach(() => {
    validEmail = 'foobar@example.com';
    validPassword = 'password';
  });

  // A
  it('sets email from prop', () => {
    const wrapper = mount(FormLogin, {
      propsData: {
        email: validEmail,
      },
    });

    expect(wrapper.find('input[type=email]').element.value).toBe(validEmail);
  });

  // B
  it('is not valid with empty email and password', () => {
    const wrapper = mount(FormLogin);
    expect(wrapper.vm.isValid).toBeFalsy();
  })

  // C
  it('is not valid with empty password', () => {
    const wrapper = mount(FormLogin);

    wrapper.setData({ form: {
      email: validEmail,
    }});

    expect(wrapper.vm.isValid).toBeFalsy();
  });

  // D
  it('is valid with email and password', () => {
    const wrapper = mount(FormLogin);

    wrapper.setData({ form: {
      email: validEmail,
      password: validPassword,
    }});

    expect(wrapper.vm.isValid).toBeTruthy();
  })

  // E
  it('input fields are bound to form data', () => {
    const wrapper = mount(FormLogin);

    // setValue() triggers the input element so we don't need to do it explicitly.
    wrapper.find('input[type=email]').setValue(validEmail);
    wrapper.find('input[type=password]').setValue(validPassword);

    expect(wrapper.vm.form).toStrictEqual({
      email: validEmail,
      password: validPassword,
    });
  });

  // F
  it('should render validation when dirty and invalid', async () => {
    const wrapper = mount(FormLogin);
    wrapper.vm.isDirty = true;

    expect(wrapper.vm.isValid).toBeFalsy();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toContain('Please fill in both fields.');
  });

  // G
  it('has a submit button', () => {
    const wrapper = mount(FormLogin);
    expect(wrapper.find('button[type=submit').exists()).toBeTruthy();
  });

  // 9.1
  it('shows api errors', async () => {
    const wrapper = mount(FormLogin);
    auth.login = jest.fn(() => Promise.reject('Something went wrong'));

    wrapper.setData({ form: {
      email: validEmail,
      password: validPassword,
    }});

    await wrapper.vm.login();
    
    expect(wrapper.vm.hasError).toBe(true);
    expect(wrapper.html()).toContain('Something went wrong');
    auth.login.mockRestore();
  });

  // 9.2
  it('shows validation error if missing inputs and submitting', async () => {
    const wrapper = mount(FormLogin);
    
    await wrapper.vm.login().catch(() => {});
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toContain('Please fill in both fields.');
  });

  // 9.3
  it(`doesn't hit API endpoint when form data are invalid`, async () => {
    const wrapper = mount(FormLogin);
    const spy = jest.spyOn(auth, 'login');

    await wrapper.vm.login().catch(() => {});
    await wrapper.vm.$nextTick();

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  // 10
  // @docs https://vue-test-utils.vuejs.org/guides/using-with-vue-router.html
  it('redirects on successful login', async () => {
    const wrapper = mount(FormLogin, {
      localVue,
      router,
    });

    auth.login = jest.fn(() => Promise.resolve());

    router.push = jest.fn(() => {});
    const spy = jest.spyOn(router, 'push');

    wrapper.setData({ form: {
      email: validEmail,
      password: validPassword,
    }});

    await wrapper.vm.login();
    await wrapper.vm.$nextTick();

    expect(spy).toHaveBeenCalledWith({ name: 'protected' });
    spy.mockRestore();
  });
});
