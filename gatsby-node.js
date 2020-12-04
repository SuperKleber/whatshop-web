const slug = require("./lib/slug");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanitySales {
        nodes {
          id
          email
          clientName
          businessName
          businessDescription
          endSaleDate
          startSaleDate
          whatsapp
        }
      }
    }
  `);

  result.data.allSanitySales.nodes.forEach((sale) => {
    createPage({
      path: `/${
        sale.businessName ? slug(sale.businessName) : slug(sale.clientName)
      }`,
      component: require.resolve("./src/templates/salesTemplate.jsx"),
      context: {
        sale,
      },
    });
  });
};
