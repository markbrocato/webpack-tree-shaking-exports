# webpack-tree-shaking-exports

This shows that Webpack's tree shaking, unlike Rollup, will not remove variables that result from a function call, even if they aren't used.

For example, the following will always be included in the bundle.

```javascript
export const B = foo('B');
```

While, the following will not:

```javascript
export const B = 'B';
```

You can see that in B.js

# Running

```
yarn install
yarn run build:prod
```

Open bundle.prod-formatted.js to view the output.