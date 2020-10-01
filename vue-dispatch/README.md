# vue-dispatch

> A Vue.js project

- [vue-dispatch](#vue-dispatch)
  - [actions 简介](#actions-简介)
  - [dispatch 简介](#dispatch-简介)
  - [reducer 简介](#reducer-简介)
  - [Build Setup](#build-setup)

学习了用派发器将组件的视图与功能抽离，思想类似于 `vuex`、`redux`。但它们的实现中都是有一个新的 `state` 来存储状态，此处为了简略直接引用了 `vue` 实例中的 `data` 属性来进行全局管理。

尝试自己完成一遍。

整个应用分为三个部分，分别是 `counter`, `calculator` 和 `todolist`。
每个部分的开发思路基本一致，在页面组件中放置组件，在主组件中进行主要的逻辑处理，细分每个子组件，所有功能由子组件响应但传递给父组件进行真正的处理。
父组件所负责的处理也只是调用 `dispatch` 来进行数据处理，把 `vue` 实例数据代理出去，直接交由 `dispatch` 全局处理。

```js
├─src //项目源码
│  ├─actions //定义派发器类型的常量文件
│  ├─components //应用组件
│  │  ├─calculator //计算器组件
│  │  │  └─cmps //子组件
│  │  ├─counter //计数器组件
│  │  │  └─components //子组件
│  │  └─todo-list //todolist 组件
│  │      └─cmps //子组件
│  ├─dispatches //派发器
│  ├─libs //工具函数
│  └─reducers //定义全局管理函数

```

## actions 简介

如下例所示，可以看出， `actions` 仅仅是定义了一些常量用于判断当前派发操作的类型，这样做的好处不仅有简洁直观，而且易于修改拓展，且不容易出错。

```js
// src/actions/todoList.js
const ADDTODO = "add-todo";

const REMOVETODO = "remove-todo";

const UPDATESTATUS = "update-status";

export { ADDTODO, REMOVETODO, UPDATESTATUS };
```

## dispatch 简介

如下例所示，`dispatch` 是定义了一个函数，调用了 `reducer` 中定义好的方法，在被执行时返回一个函数，接受派发器的类别和其余参数，然后经过判断调用合适的方法来完成全局管理。

> 此处的参数 `ctx` 为 `vue` 实例。

```js
// src/dispatches/todoList.js
import todoListReducer from "@/reducers/todoList";

import { ADDTODO, REMOVETODO, UPDATESTATUS } from "@/actions/todoList";

export default function(ctx) {
  const { addTodo, removeTodo, updateStatus } = todoListReducer(ctx.list);

  return function(type, ...args) {
    switch (type) {
      case ADDTODO:
        ctx.list = addTodo(...args);
        break;
      case REMOVETODO:
        ctx.list = removeTodo(...args);
        break;
      case UPDATESTATUS:
        ctx.list = updateStatus(...args);
        break;
      default:
        break;
    }
  };
}
```

## reducer 简介

如下例所示，`reducer` 中定义了真正的操作函数，由 `dispatch` 传入的参数进行数据操作。

```js
// src/reducers/todoList.js
export default function(data) {
  function addTodo(todo) {
    return data.concat(todo);
  }
  function removeTodo(id) {
    return data.filter(item => item.id !== id);
  }
  function updateStatus(id) {
    return data.map(item => {
      if (item.id === id) {
        item.isCompleted ^= true;
      }
      return item;
    });
  }

  return {
    addTodo,
    removeTodo,
    updateStatus
  };
}
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
