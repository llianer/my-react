type Type = any;
type Key = any;
type Ref = any;
type Props = any;
type ElementType = any;

export interface ReactElementType {
  $$typeof: symbol | number;
  type: ElementType;
  key: Key;
  ref: Ref;
  props: Props;
  __mark: string;
}

export type { Type, Key, Ref, Props, ElementType };
