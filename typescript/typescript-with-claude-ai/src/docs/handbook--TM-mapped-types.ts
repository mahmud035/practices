//* The Basics: Transforming Object Types
// Mapped types let you transform every property of an existing type:

// Basic syntax: { [K in keyof T]: ... }

interface IJob {
  title: string;
  company: string;
  salary: number;
  isRemote: boolean;
}

// Make all properties optional
export type PartialJob = {
  [K in keyof IJob]?: IJob[K];
};
// Type: { title?: string; company?: string; salary?: number; isRemote?: boolean }

// Make all properties readonly
export type ReadonlyJob = {
  readonly [K in keyof IJob]: IJob[K];
};
// Type: { readonly title: string; readonly company: string; ... }

// Make all properties nullable
export type NullableJob = {
  [K in keyof IJob]: IJob[K] | null;
};
// Type: { title: string | null; company: string | null; ... }

// NOTE: Why this matters: Instead of manually creating variations, you transform types automatically.

//* Mapping Modifiers: + and -
// You can add or remove `readonly` and `?` modifiers:

interface IJob2 {
  readonly _id: string;
  title?: string;
  company: string;
}

// Remove readonly from all properties
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

export type MutableJob = Mutable<IJob2>;
// Type: { _id: string; title?: string; company: string }

// Make all properties required (remove ?)
export type Required<T> = {
  [K in keyof T]-?: T[K];
};

export type RequiredJob = Required<IJob2>;
// Type: { readonly _id: string; title: string; company: string }

// Add readonly to all properties
export type Immutable<T> = {
  +readonly [K in keyof T]: T[K];
};

export type ImmutableJob = Immutable<IJob2>;
// Type: { readonly _id: string; readonly title?: string; readonly company: string }

// NOTE: Note: `+` is implicit, so `readonly` = `+readonly` and `?` = `+?`.

//* Key Remapping with `as`
// You can rename keys while mapping:

interface IJob3 {
  _id: string;
  title: string;
  company: string;
  salary: number;
}

// Add "get" prefix to all keys
type Getters<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};

export type JobGetters = Getters<IJob3>;
// Type: {
//   get_id: () => string;
//   getTitle: () => string;
//   getCompany: () => string;
//   getSalary: () => number;
// }

// Convert to event names
type Events<T> = {
  [K in keyof T as `on${Capitalize<K & string>}Change`]: (value: T[K]) => void;
};

export type JobEvents = Events<IJob3>;
// Type: {
//   on_idChange: (value: string) => void;
//   onTitleChange: (value: string) => void;
//   onCompanyChange: (value: string) => void;
//   onSalaryChange: (value: number) => void;
// }
