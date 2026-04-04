Ok, so basically there are like 3 things you have to do to implement a new blog:

1. Write the blog
   - Duplicate the "sample.html" template
   - Change the "title" header to `BLOG TITLE - MM/DD/YY` format
   - Make sure the file is in the `../blogs` directory
   - Change all of the CUSTOM STUFF and MORE CUSTOM STUFF data
   - YES, we make a new rendition of the dolphin for every blog.

2. Add the blog to the "random blog" arrays
   - They're `../scripts/global/blog.js` AND `../scripts/global/main.js`
   - The blog one needs `../` in front of it, but the main one doesn't
   - If you get confused, just copy what's already going on there
   - Just copy the name from VSC Explorer and paste it as-is
   - Then move on

3. Add the blog path to the blogs array in `../scripts/pages/blogs.js`

4. You're done! Voila! Idk maybe I should automate this more...
