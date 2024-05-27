/**
 *
 */
class Article {
  id: string;
  title: string;
  author: string;
  tags: string[];
  createdAt: Date;
  modifiedAt: Date;
  content: string;

  /**
   *
   * @param {string} title
   * @param {string} author
   * @param {string[]} tags
   * @param {Date} createdAt
   * @param {Date} modifiedAt
   * @param {string} content
   */
  constructor(
    id: string,
    title: string,
    author: string,
    tags: string[],
    createdAt: Date,
    modifiedAt: Date,
    content: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.tags = tags;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.content = content;
  }
}

export { Article };
