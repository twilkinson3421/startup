# Startup

Utilities for application startup.

## Usage

### Main

Automatically executes the `main` function of the target class when the application loads (listens for the `"load"` event).

```ts
import { Startup } from "@zerm/startup";

@Startup.Main
class Program {
    main(): void {
        console.log("Hello, world!");
    }
}
```
