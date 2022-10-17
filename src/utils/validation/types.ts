import { ObjectShape } from 'yup/lib/object';

type ObjectShapeValues = ObjectShape extends Record<string, infer V>
  ? V
  : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObjectShape<T extends Record<any, any>> = Partial<
  Record<keyof T, ObjectShapeValues>
>;
