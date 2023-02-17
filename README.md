# chatgpt-nodejs

# Error [ERR_REQUIRE_ESM]: require() of ES Module

## cause

importing `chatgpt`

TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /Users/bamboo/Repos/chatgpt-nodejs/src/index.ts

## use `import syntax`

https://stackoverflow.com/questions/69081410/error-err-require-esm-require-of-es-module-not-supported

## help ReferenceError: exports is not defined in ES module scope

https://stackoverflow.com/questions/71478604/exports-is-not-defined-in-es-module-scope

## avoid using esm tag with tsconfig

https://codingbeautydev.com/blog/ts-node-unknown-file-extension-ts/
