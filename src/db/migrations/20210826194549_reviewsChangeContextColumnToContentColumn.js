// I mispelled column name in reviews, so change columns name
exports.up = function (knex) {
  return knex.schema.table("reviews", (table) => {
    table.renameColumn("context", "content");
  });
};

exports.down = function (knex) {
  return knex.schema.table("reviews", (table) => {
    table.renameColumn("content", "context");
  });
};
