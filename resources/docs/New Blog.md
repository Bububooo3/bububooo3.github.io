Ok, so basically there are like 3 things you have to do:

1. Write the blog
   - Use the "sample.html" template
   - Change the subtitle to [BLOG TITLE - MM/DD/YY]
   - Make sure the file is in the `../blogs` directory

2. Add the blog to the "random blog" arrays
   - They're `../scripts/global/blog.js` AND `../scripts/global/main.js`
   - The blog one needs .. in front of it, but the main one doesn't
   - If you get confused, just copy what's already going on there
   - Just copy the name from VSC Explorer and paste it as-is
   - Then move on

3. Add the blog to the blogs list in `../blogs.html`
   - The href should be the exact same as what you put in the "random blog" array
   - Paste this above the top separator.
   - Go on, add it. Add it to the top using the following format:
   - ```html
     <!-- SEPARATOR -->
     <span>
       <a class="title" href="SAME_AS_FOR_RANDOM_BLOG_ARRAY">[TITLE]</a>
       <p class="description">[DESCRIPTION]</p>
     </span>

     <hr style="margin-top: 2%;" />
     ```

4. You're done! Voila! Idk maybe I should automate this...