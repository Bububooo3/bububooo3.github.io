const blogFiles = [
    'blogs/icallitarithemeticprogramming.html'
];

async function loadBlogSummaries() {
    const container = document.getElementsByClassName('blog-list')[0];

    for (const file of blogFiles) {
        try {
            const response = await fetch(file);
            const htmlString = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            
            const title = doc.getElementById("title").innerText || "No Title";
            const description = doc.querySelector('meta[name="description"]')?.content || "No description";

            const span = document.createElement('span');
            const hr = document.createElement('hr');

            hr.style = "margin-top: 2%;";

            span.innerHTML = `
                <!-- SEPARATOR -->
                <a class="title" href="${file}">${title}</a>
                <p class="description">${description}</p>
            `;

            container.appendChild(hr);
            container.appendChild(span);

        } catch (error) {
            console.error('Error loading file:', file, error);
        }
    }
}

// Run the function
loadBlogSummaries();
