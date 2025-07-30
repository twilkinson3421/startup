# Startup

Utilities for application startup.

## Usage

### Main

Automatically executes the target method.

```ts
import { Startup } from "@zerm/startup";

class Program {
    @Startup.Main
    static main(): void {
        // This can also be async
        console.log("Hello, world!");
    }
}
```

You **SHOULD NOT** use the `this` object to refer to other static fields of the parent class inside the main method. **ONLY** refer to the class using its name:

```ts
class Program {
    @Startup.Main
    static main(): void {
        console.log(this.name); // SHOULD NOT do this
        console.log(Program.name); // OK
    }
}
```

Return a number from the main method to set the exit code and exit the program.

```ts
class Program {
    @Startup.Main
    static main(): number {
        return 1; // Exit with code 1
    }
}
```

The main method also receives the command line arguments.

```ts
class Program {
    @Startup.Main
    static main(args: string[]): void {
        console.log(args);
    }
}
```

#### A real-world example

```ts
export class Program {
    @Startup.Main
    public static async main(): Promise<number> {
        const program = new Program();
        await program.init();
        await program.run();
        program.deinit();
        return 0;
    }

    public async init(): Promise<void> {
        // Initialize
    }

    public async run(): Promise<void> {
        // Run
    }

    public deinit(): void {
        // Deinitialize
    }
}
```
