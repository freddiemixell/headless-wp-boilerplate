const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get("/blog/:slug", (req, res) => {
      const actualPage = "/blog";
      const queryParams = { slug: req.params.slug, apiRoute: "post" };
      app.render(req, res, actualPage, queryParams);
  });

  
  server.get("/:slug", (req, res) => {
      const actualPage = "/page";
      const queryParams = { slug: req.params.slug, apiRoute: "page" };
      const actualPageBlog = "/blog";
      const queryParamsBlog = { slug: req.params.slug, apiRoute: "post" };
      if(req.params.slug === "blog") {
        app.render(req, res, actualPageBlog, queryParamsBlog);
      }
      else {
        app.render(req, res, actualPage, queryParams);
      }
  });

  server.get("/category/:slug", (req, res) => {
      const actualPage = "/category";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
  });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> View the dankness on http://localhost:${port}`)
    })
  })
