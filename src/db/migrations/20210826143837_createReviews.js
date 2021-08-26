
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
      table.increments("review_id").primary();
      table.text("context");
      table.integer("score");
      table
        .foreign("critic_id")
        .references("critic_id")
        .inTable("critics")
        .onDelete("cascade");
    table   
        .forgign("movie_id")
        .references("movie_id")
        .inTable("movies")
        .onDelete("cascade");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("reviews");
};
