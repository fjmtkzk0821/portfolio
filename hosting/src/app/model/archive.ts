class Archive {
  id: string;
  year: string;
  month: string;
  count: number;

  constructor(
    id: string,
    year: string,
    month: string,
    count: number
  ) {
    this.id = id;
    this.year = year;
    this.month = month;
    this.count = count;
  }
}

export { Archive };
