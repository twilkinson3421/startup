/** Run the main function */
export function Main<Return>(method: () => Return): typeof method;
export function Main<Return>(method: (args: string[]) => Return): typeof method;
export function Main<Return>(method: (args: string[]) => Return): typeof method {
    const result = method(Deno.args);
    if (typeof result === "number") Deno.exit(result);
    return method;
}
