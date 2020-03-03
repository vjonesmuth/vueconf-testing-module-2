# Testing Vue Components

* https://vue-test-utils.vuejs.org/guides
* https://github.com/rahaug/testing-workshop-boilerplate

This repository holds the boilerplate for the exercises of module 2.

Module 2 covers testing Vue.js components with Vue Test Utils.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# [Testing Vue Components](https://www.notion.so/Testing-Vue-Components-1d06a558ad194072a33b42b55cbf29b6)

# 7.1 | 5 minutes

- In your projects directory, clone [this repository](https://github.com/rahaug/testing-workshop-boilerplate) and install the dependencies

    git clone https://github.com/rahaug/testing-workshop-boilerplate
    cd testing-workshop-boilerplate
    yarn

# 7.2 | 10 minutes

- Create test `renders name in template`
    - Mount the `ShoppingList` component with a `name` prop
    - Expect the `name` prop to be rendered in the template

        <shopping-list name="My Collectibles" />

# 7.3 | 10 minutes

- Create test `is empty by default`
    - Mount the `ShoppingList` component
    - Expect that the `items` data property is empty by default
- Create test `can add item`
    - Mount the `ShoppingList` component
    - Set the `newItem` data property to `Mona Lisa`
    - Trigger the `add` method
    - Expect that the `items` data property contains the newly added item object (see structure below)

**Item Object Structure**

    {
      name: 'Mona Lisa',
      bought: false
    }

> Tip: Explore the toContainEqual matcher

# ~~7.4 | 5 minutes~~

- Create test `can remove item`
    - Mount the `ShoppingList` component
    - Create and fill the `items` data property with an item object (structure above)
    - Trigger the `remove` method with the item object as argument
    - Expect that the `items` data property does not contain the item object.

# ~~7.5 | 5 minutes~~

- Create test `can toggle item`
    - Mount the `ShoppingList` component
    - Create and fill the `items` data property with an item object (structure above)
    - Trigger the `toggle` method with the item object as argument
    - Expect that the item object’s `bought` property is `true`
    - Trigger the `toggle` method with the item object as argument
    - Expect that the item object’s `bought` property is `false`

# 7.6 | 5 minutes

- Create test `counts remaining items that are not bought`
    - Mount the `ShoppingList` component
    - Create and add multiple item objects with various bought state to the `items` data property.
    - Expect that the `remainingItems` is equal to items that are not bought
    - Change the `bought` state of one of the items
    - Expect that the `remainingItems` is equal to items that are not bought


# [Login Form](https://www.notion.so/Login-Form-8d13aba5a6574bc58dddcf8c3ec81374)
> Show and Demo the form

- In your projects directory, clone [this repository](https://github.com/rahaug/testing-workshop-boilerplate) and install the dependencies (if you don't have it)

    git clone https://github.com/rahaug/testing-workshop-boilerplate
    cd testing-workshop-boilerplate
    yarn

**A | 5 minutes**

- create a new `FormLogin.spec.js` file in the `tests/unit` directory
- create test: `sets email from prop`
    - import the `FormLogin` component and mount it with an `email` prop.
    - expect that `form.email` is equal to the `email` prop that was passed in.

**B | 5 minutes**

- create test: `is not valid with empty email and password`
    - Mount `FormLogin` component
    - expect that the `isValid` computed property is falsy when no email or password is given

**~~C | 5 minutes~~**

- create test: `is not valid with empty password`
    - Mount `FormLogin` component
    - set `form.email` data property to a valid email
    - expect that the `isValid` computed property is falsy

**D | 5 minutes**

- Create test: `is valid with email and password`
    - Mount `FormLogin` component
    - Assign the `form` data a valid email and password (any password)
    - Expect that the `isValid` computed property is truthy

**E | 10 minutes**

- create test: `input fields are bound to form data`
    - Mount `FormLogin` component
    - Find and set the email input field to a valid email
    - Find and set the password input field to a valid password (any password)
    - Expect that the `form` data contain email and password

**F | 5 minutes**

- Create test: `should render validation when dirty and invalid`
    - Mount `FormLogin` component
    - Set the `isDirty` data property to true
    - Make sure the form data is invalid
    - Expect the template to contain a “Please fill in both fields.” string

> Tip: Remember to trigger the next render with wrapper.vm.$nextTick()

**G | 5 minutes**

- Create test: `has a submit button`
    - Mount `FormLogin` component
    - Expect that the template contains a button with the type of `submit`

# [Login Form 2 (Stubs, Mocks, and Spies)](https://www.notion.so/Login-Form-2-Stubs-Mocks-and-Spies-dd579c63a9994c0bba93cc8f30de6b53)

# 9.1 | 15 minutes

- Create async test: `it shows api errors`
    - Import `auth` in top of test file: `import {auth} from '../../src/api`
    - Stub the `login` property of `auth`. Return a rejected `Promise`
    - Set form data to valid `email` and `password`
    - Invoke the `login` method
    - ~~Expect that the `hasError` data property is `true`~~
    - Expect that the api error is displayed in the template
    - Restore mock to original implementation

# 9.2 | 10 minutes

- Create async test: `shows validation error if missing inputs and submitting`
    - Mount the `FormLogin` component
    - Invoke the `login` method
    - Expect the template to contain `Please fill in both fields.`

> *Tip: Catch and mute the thrown exception*

# 9.3 | 5 minutes

- Create async test: `doesn't hit API endpoint when form data are invalid`
    - Mount the `FormLogin` component
    - Invoke the `login` method with invalid data
    - Expect that `auth.login()` is not called

# [Login Form 3 (Mock Component Dependencies)](https://www.notion.so/Login-Form-3-Mock-Component-Dependencies-54e62a4fbedd422f88298a170383838b)

# 10 | 20 minutes

- Create async test: `redirects on successful login`
    - Stub `auth.login` and return a resolved `Promise`
    - Create a `$router` mock, that has an empty `push` method.
    - Create a spy that spies on the `push` method
    - Mount the component with the mocked dependency
    - Set valid email and password to `form` data
    - invoke the `login` method
    - Expect spy to have been called with `{name: 'protected'}`


# [Component Lifecycle](https://www.notion.so/Component-Lifecycle-03c4955adaa64aa1a37d63f8c05d2d39)

During these exercises you should use the documentation extensively when you don’t remember or know exactly what to do. Inspect the component to get inspiration on how to test it.

# 11.1 | 10 minutes

- create a test that ensures that the `interval` data is defined after the component is mounted

# 11.2 | 10 minutes

- test that the `counter` data increases by 1 for every passed second

# 11.3 | 15 minutes

- test that the component self-destructs when `counter` gets equal to the `timer`
- test that the `interval` is cleared when the component self-destructs

# 11.4 | 10 minutes

- test that the component emits a `deleted` custom event when destroyed.