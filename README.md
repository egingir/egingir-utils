# egingir-utils 🚀

A powerful, lightweight, and modular JavaScript utility library designed to simplify **string manipulation, time handling, and location-based calculations**.

🔹 **Lightweight** - Optimized for performance  
🔹 **Fully Modular** - Import only what you need  
🔹 **Developer-Friendly** - Includes JSDoc comments for IntelliSense  
🔹 \*\*Supports Both `import` (ESM) and `require` (CommonJS) in Node.js

---

## 📌 Installation

You can install `egingir-utils` via **NPM**:

```sh
npm install egingir-utils
```

or using **Yarn**:

```sh
yarn add egingir-utils
```

---

## 📌 Usage

### **🔹 String Manipulation**

#### **Using `import` (ESM)**

```js
import { toUpperCase, toLowerCase } from "egingir-utils";

console.log(toUpperCase("hello world")); // "HELLO WORLD"
console.log(toLowerCase("HELLO WORLD")); // "hello world"
```

#### **Using `require` (CommonJS) in Node.js**

```js
const { toUpperCase, toLowerCase } = require("egingir-utils");

console.log(toUpperCase("hello world")); // "HELLO WORLD"
console.log(toLowerCase("HELLO WORLD")); // "hello world"
```

### **🔹 Time Manipulation**

#### **Using `import` (ESM)**

```js
import { formatDate, getCurrentTimestamp } from "egingir-utils";

console.log(formatDate(new Date())); // "2025-03-14"
console.log(getCurrentTimestamp()); // 1710456789123 (UNIX timestamp)
```

#### **Using `require` (CommonJS) in Node.js**

```js
const { formatDate, getCurrentTimestamp } = require("egingir-utils");

console.log(formatDate(new Date())); // "2025-03-14"
console.log(getCurrentTimestamp()); // 1710456789123 (UNIX timestamp)
```

### **🔹 Location Handling**

(Coming Soon 🚀)

---

## 📌 API Reference

### 🔹 **String Utilities**

| Function                           | Description                     |
| ---------------------------------- | ------------------------------- |
| `toUpperCase(str: string): string` | Converts a string to uppercase. |
| `toLowerCase(str: string): string` | Converts a string to lowercase. |

### 🔹 **Time Utilities**

| Function                         | Description                         |
| -------------------------------- | ----------------------------------- |
| `formatDate(date: Date): string` | Formats a date as `YYYY-MM-DD`.     |
| `getCurrentTimestamp(): number`  | Returns the current UNIX timestamp. |

---

## 📌 IntelliSense Support

All functions are documented using **JSDoc comments**, meaning you can see **function descriptions, parameters, and return types** directly in **VS Code or any modern IDE**.

For example, when you type `toUpperCase()`, you'll see:

```ts
/**
 * Converts a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} The uppercase version of the string.
 */
```

🚀 **This makes development faster and easier!**

---

## 📌 Contributing

🚀 Want to contribute? Feel free to submit a **pull request** or **open an issue** for any improvements.

**GitHub Repository**: [https://github.com/yourusername/egingir-utils](https://github.com/yourusername/egingir-utils)

---

## 📌 License

MIT © 2025 Emrah Gingir
