module.exports = {
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "esnext", "dom.iterable"],
    "jsx": "react",
    "module": "esnext",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": "./src",
    "resolveJsonModule": true
  },
  "include": ["./src/**/*", "styled.d.ts"]
}