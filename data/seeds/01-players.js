exports.seed = function(knex, Promise) {
  return knex("players")
    .truncate()
    .then(function() {
      return knex("players").insert([
        { name: "Ken Griffey Jr", number: "24", position: "CF" },
        { name: "Frank Thomas", number: "35", position: "1B" },
        { name: "Ryne Sandberg", number: "10", position: "2B" }
      ]);
    });
};
