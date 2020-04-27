export interface Filter {
  apply: (path: string) => void;
}
