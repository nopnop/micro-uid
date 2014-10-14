# micro-uid [![Build Status](https://secure.travis-ci.org/nopnop/micro-uid.png?branch=master)](http://travis-ci.org/nopnop/micro-uid) [![NPM version](https://badge-me.herokuapp.com/api/npm/micro-uid.png)](http://badges.enytc.com/for/npm/micro-uid)


> Generate base 62 uid (0-9a-zA-Z).

**Don't use it (without a collision test) if your *life* depend on real unique id.**


```shell
npm install --save micro-uid
```

```javascript
var muid = require('micro-uid');
console.log(muid());    // 'QS8ybCj7'
console.log(muid(42));  // 'pc4RYXhdlWhVYgAhf32sXLij6SPm36QgD07T1An3Pg'
```

---

[MIT](./LICENSE)
