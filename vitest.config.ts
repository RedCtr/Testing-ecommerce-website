import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "tests/setup.ts" // will run before each test file
    }
})