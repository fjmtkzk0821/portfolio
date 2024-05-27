/**
 *
 */
class Announcement {
  title: string;
  author: string;
  createdAt: Date;
  content: string;

  /**
   *
   * @param {string} title
   * @param {string} author
   * @param {Date} createdAt
   * @param {string} content
   */
  constructor(title: string, author: string, createdAt: Date, content: string) {
    this.title = title;
    this.author = author;
    this.createdAt = createdAt;
    this.content = content;
  }
}

export { Announcement };
