import fixture from 'can-fixture';

fixture("GET /recipes", function() {
  return [
    { id: 1, name: "omelette" },
    { id: 2, name: "hot dog" }
  ];
});
