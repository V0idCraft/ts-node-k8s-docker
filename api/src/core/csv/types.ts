export type ObjectFieldParsers<T> = {
  [P in keyof T]: (value: string, data: SerializedObject<T>) => T[P];
};

export type ObjectFieldTestParser<T> = {
  [P in keyof T]: (value: string) => T[P];
};

export type SerializedObject<T> = {
  [P in keyof T]?: string;
};

export type ObjectParser<Output, Source = Output> = (
  data: SerializedObject<Source>
) => Output;
