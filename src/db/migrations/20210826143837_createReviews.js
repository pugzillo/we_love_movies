// Set up schemas for reviews table
exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary();
    table.text("context");
    table.integer("score");
    table.integer("critic_id").unsigned().notNullable(); // foreign key from critics
    table
      .foreign("critic_id")
      .references("critic_id")
      .inTable("critics")
      .onDelete("CASCADE");
    table.integer("movie_id").unsigned().notNullable(); // foreign key from movies
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
      table.timestamp(true, true);  // created_at & updated_at timestamp
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
