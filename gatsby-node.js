const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);
  const projectPost = path.resolve(`./src/templates/project-post.jsx`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(post)/.*\\\\md$/"}},
          limit: 1000,
          sort: {fields: frontmatter___date}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  const projects = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(project)/.*\\\\md$/"}},
          limit: 1000,
          sort: {fields: frontmatter___date}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  if(projects.errors) {
    throw projects.errors
  }

  // Create blog-list pages
  const posts = result.data.allMarkdownRemark.edges;
  const postsPerPage = 8;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_,i)=>{
    createPage({
      path: i === 0 ? `/blog` :`/blog/${i+1}`,
      component: path.resolve("./src/templates/blog-list.jsx"),
      context: {
        limit:postsPerPage,
        skip: i*postsPerPage,
        numPages,
        currentPage:i+1,
      },
    })
  })
  // Create blog posts pages.
  //const posts = result.data.allMarkdownRemark.edges 위에서 선언함...

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create project-list pages
  const projectPosts = projects.data.allMarkdownRemark.edges;
  const projectPostsPerPage = 8;
  const projectPostsnumPages = Math.ceil(projectPosts.length / projectPostsPerPage);
  Array.from({ length: numPages }).forEach((_,i)=>{
    createPage({
      path: i === 0 ? `/project` :`/project/${i+1}`,
      component: path.resolve("./src/templates/project-list.jsx"),
      context: {
        limit:projectPostsPerPage,
        skip: i*projectPostsPerPage,
        numPages:projectPostsnumPages,
        currentPage:i+1,
      },
    })
  })
  // Create project posts pages.
  //const projectPosts 위에서 선언함...

  projectPosts.forEach((post, index) => {
    const previous = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node
    const next = index === 0 ? null : projectPosts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: projectPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }


}
