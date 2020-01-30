exports.up = function(knex) {
  return knex.schema.createTable("players", tbl => {
    tbl.increments();

    tbl.string("name", 255).notNullable();
    tbl.string("number", 255).notNullable();
    tbl.string("position", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("players");
};
