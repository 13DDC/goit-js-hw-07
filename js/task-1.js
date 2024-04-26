const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
  const categoriesTitle = item.querySelector('h2').textContent;
  console.log(`Category : ${categoriesTitle}`);
  const listItem = item.querySelectorAll('li');
  console.log(`Elements : ${listItem.length}`);
});
addClass('.item h2', 'item_title');
addClass('.item ul li', 'item_list');
