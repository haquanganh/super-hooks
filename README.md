# @astroha/super-hooks

A lightweight, modern collection of reusable React hooks designed to supercharge your React applications with minimal overhead. Built with TypeScript for type safety and tree-shakable for optimal bundle size, `@astroha/super-hooks` provides intuitive and production-ready utilities for common use cases.

## Features

- **TypeScript Support**: Fully typed for a seamless developer experience.
- **Tree-Shakable**: Only import what you need to keep your bundle lean.
- **Production-Ready**: Extensively tested hooks for reliable performance.
- **Minimalistic**: Simple APIs to reduce complexity in your codebase.
- **Server-Safe**: Compatible with server-side rendering (SSR).

## Installation

Install the package via npm, yarn, or pnpm:

```bash
npm install @astroha/super-hooks
```

```bash
yarn add @astroha/super-hooks
```

```bash
pnpm add @astroha/super-hooks
```

## Usage

Import and use any hook directly in your React components. Below are examples of some available hooks:

### `useLocalStorage`

Persist state in `localStorage` and sync it across component renders.

```jsx
import { useLocalStorage } from '@astroha/super-hooks';

function App() {
  const [value, setValue] = useLocalStorage('my-key', 'initialValue');

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Stored Value: {value}</p>
    </div>
  );
}
```

### `useToggle`

Manage a boolean toggle state with a simple API.

```jsx
import { useToggle } from '@astroha/super-hooks';

function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{isOn ? 'Turn Off' : 'Turn On'}</button>
      <p>Status: {isOn ? 'On' : 'Off'}</p>
    </div>
  );
}
```

### `useDebounce`

Debounce a value to prevent rapid updates, useful for search inputs.

```jsx
import { useDebounce } from '@astroha/super-hooks';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Debounced Value: {debouncedInput}</p>
    </div>
  );
}
```

## Available Hooks

- `useLocalStorage`: Sync state with `localStorage`.
- `useToggle`: Manage boolean toggle states.
- `useDebounce`: Debounce values for controlled updates.
- More to come! Stay tuned for updates.

## Documentation

Detailed documentation is coming soon! For now, refer to the examples above or check the source code in the [GitHub repository](https://github.com/haquanganh/super-hooks) for more details on each hook's API and usage.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/haquanganh/super-hooks/blob/main/LICENSE.md) file for details.

---

Built for the community.
