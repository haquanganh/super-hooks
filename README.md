@astroha/super-hooks
A lightweight, modern collection of reusable React hooks designed to supercharge your React applications with minimal overhead. Built with TypeScript for type safety and tree-shakable for optimal bundle size, @astroha/super-hooks provides intuitive and production-ready utilities for common use cases.
Features

TypeScript Support: Fully typed for a seamless developer experience.
Tree-Shakable: Only import what you need to keep your bundle lean.
Production-Ready: Extensively tested hooks for reliable performance.
Minimalistic: Simple APIs to reduce complexity in your codebase.
Server-Safe: Compatible with server-side rendering (SSR).

Installation
Install the package via npm, yarn, or pnpm:
npm install @astroha/super-hooks

yarn add @astroha/super-hooks

pnpm add @astroha/super-hooks

Usage
Import and use any hook directly in your React components. Below are examples of some available hooks:

useToggle
Manage a boolean toggle state with a simple API.
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

Available Hooks

useLocalStorage: Sync state with localStorage.
useToggle: Manage boolean toggle states.
useDebounced: Debounce values for controlled updates.
More to come! Stay tuned for updates.

Documentation
Detailed documentation is coming soon! For now, refer to the examples above or check the source code in the GitHub repository for more details on each hook's API and usage.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Support
If you encounter issues or have questions, please file an issue on the GitHub repository. For community discussions, join our Discord server.

Built for the community.
