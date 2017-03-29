import '~/fixture';
import $ from 'jquery';

import 'bootstrap/less/bootstrap.less';

$.get({ url: '/recipes', dataType: 'json'})
  .then(function(recipes) {
    let $app = $('#app');

    $app.empty();

    recipes.forEach(function(recipe) {
      $app.append(`<h2 class="text-center">${recipe.name}</h2>`);
    });
  });
