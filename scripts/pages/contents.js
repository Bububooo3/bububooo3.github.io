function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const params = new URLSearchParams(window.location.search);
const blog_src = params.get("blog");

if (blog_src) {
  fetch(blog_src)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const headers = doc.querySelectorAll("a[id] h3");

      const tocContainer = document.getElementById("container");
      const tocList = document.createElement("ul");

      headers.forEach((header) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        const anchorId = header.parentElement.id;

        link.textContent = header.textContent;
        link.href = `${blog_src}#${anchorId}`;

        listItem.appendChild(link);
        tocList.appendChild(listItem);
      });
      tocContainer.appendChild(tocList);
    })
    .catch((error) => {
      console.error("Error fetching blog post:", error);
      tocContainer.innerHTML =
        "<p>Failed to fetch table of contents. (Error 2)</p>";
    });
} else {
  document.getElementById("toc-container").innerHTML =
    "<p>Failed to fetch table of contents. (Error 2)</p>";
}
