# 02 Hooks

## [01 useState](./src/components/01_useState/)
> `useState` in React is a Hook that allows you to add state to functional components. It returns a state variable and a function to update it.

## [02 useEffect](./src/components/02_useEffect/)
> `useEffect` in React is a Hook that allows you to perform side effects in functional components. It runs after every render and can be configured to run only when certain values change.

## [03 useContext](./src/components/03_useContext/)
> `useContext` in React is a Hook that allows you to access the current value of a context. It simplifies consuming context values directly within functional components without the need for a context consumer.

## [04 useReducer](./src/components/04_useReducer/)
> `useReducer` in React is a Hook that provides an alternative to useState for managing complex state logic. It accepts a reducer function and an initial state, returning the current state and a dispatch function to update it.

## [05 useCallback](./src/components/05_useCallback/)
> `useCallback` in React is a Hook that returns a memoized version of a callback function. It only changes if one of its dependencies has changed, helping to optimize performance by preventing unnecessary re-renders.

## [06 useMemo](./src/components/06_useMemo/)
> `useMemo` in React is a Hook that memoizes the result of a computation, recomputing it only when its dependencies change. This helps optimize performance by preventing expensive calculations on every render.

## [07 useRef](./src/components/07_useRef/)
> `useRef` in React is a Hook that creates a mutable object which persists across renders. It can be used to access or store a DOM element directly or to hold any mutable value.

## [08 useForwardRef](./src/components/08_useForwardRef/)
> `forwardRef` in React is a function that allows you to pass a ref through a component to a child component. It enables parent components to access the ref of a child component's DOM element.

## [09 useImperativeHandle](./src/components/09_useImperativeHandle/)
> `useImperativeHandle` in React is a Hook that customizes the instance value that is exposed when using ref in parent components. It allows you to control the ref and expose specific methods to the parent.

## [10 useId](./src/components/10_useId/)
## [11 customHook](./src/components/11_customHook/)
> A custom hook in React is a reusable function that encapsulates logic and state management, allowing components to share functionality across multiple instances. They enhance code reusability and maintainability by abstracting complex behaviors into reusable functions.