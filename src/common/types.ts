export type TSelect<T> = Partial<Record<keyof T,boolean>>;
// type Select<T> = { [K in keyof T]?: boolean }
