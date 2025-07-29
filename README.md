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

Return a number from the main function to set the exit code and exit the application.

```ts
import { Startup } from "@zerm/startup";

@Startup.Main
class Program {
    main(): number {
        console.log("Hello, world!");
        return 1; // The program will exit with code 1 once the main function has exited
    }
}
```
