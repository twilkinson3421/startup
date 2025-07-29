type Awaitable<T> = Promise<T> | T;

interface MainClass {
    main?(): Awaitable<void | number>;
}

/** Execute the main function of the target class on load. */
export function Main<TargetClass extends MainClass>(Target: TargetClass): TargetClass {
    addEventListener("load", async function (): Promise<void> {
        const result = await Target.main?.();
        if (typeof result === "number") {
            Deno.exitCode = result;
            Deno.exit();
        }
    });
    return Target;
}
