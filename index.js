import '~/fixture';
import $ from 'jquery';

$.get({ url: '/recipes', dataType: 'json'})
  .then(function(recipes) {
    let $app = $('#app');

    $app.empty();

    recipes.forEach(function(recipe) {
      $app.append(`<div>${recipe.name}</div>`);
    });
  });
