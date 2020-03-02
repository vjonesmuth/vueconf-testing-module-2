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