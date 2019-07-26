interface Result {
  total: number;
  unique: {
    [key: string]: number;
  };
}

declare function distinct(collection: string[]): Result;
