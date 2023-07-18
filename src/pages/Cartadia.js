// const pdfjs = require("pdfjs-dist/es5/build/pdf");

// async function getContent(src) {
//   const loadingCard = await pdfjs.getDocument(src);
//   const page = await loadingCard.GetPage(1);
//   return await page.getTextContent();
// }

// async function getItems(src) {
//   const content = await getContent(src);
//   const items = content.items.map((item) => {
//     console.log(item.str);
//   });
//   return items;
// }

// getItems("../assets/CartaDia.pdf");
