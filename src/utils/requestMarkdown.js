import fs from "fs";
import matter from "gray-matter";
import { fileURLToPath } from "url";
import { dirname } from "path";

const requestMarkdown = (pathFile = "/content/projects/") => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const path = __dirname.split("utils")[0];

  const files = fs.readFileSync(path + pathFile, "utf8");

  const c = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${path}${pathFile}${filename}`)
      .toString();
    const { data } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
    };
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return c;
};

export default requestMarkdown;

requestMarkdown();
