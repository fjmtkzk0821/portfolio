class Work {
  id: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
  type: number;

  constructor(
    id: string,
    name: string,
    description: string,
    tags: string[],
    link: string,
    type: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.link = link;
    this.type = type;
  }
}

export { Work };
