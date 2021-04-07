/**
 * Example: 
 * OptionalPropertiesOf<{ foo: string; bar?: string; baz?: number }> 
 * is the type:  "bar" | "baz"
 */
/*export type OptionalPropertiesOf<T extends object> = Exclude<{
    [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>;*/



export type OptionalPropertiesOf<T extends Record<string, unknown>> = Exclude<({
    [Key in keyof T] : T extends Record<Key, T[Key]> 
    ? never 
    : Key;
})[keyof T], undefined>;


