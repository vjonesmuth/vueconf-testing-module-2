# Testing Vue Components

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