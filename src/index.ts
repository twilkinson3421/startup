type MainFn<R> = ((args: string[]) => R) | (() => R);

/** Run the main function */
export function Main<R>(main: MainFn<R>): typeof main {
    const result = main(Deno.args);
    if (typeof result === "number") Deno.exit(result);
    return main;
}
