# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_09_27_102746) do
  create_table "book_tags", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "label", null: false
    t.string "label_en", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "book_tags_books", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "book_id", null: false
    t.bigint "book_tag_id", null: false
  end

  create_table "books", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "title", null: false
    t.string "title_en", null: false
    t.string "comment", limit: 100
    t.string "comment_en"
    t.string "author", null: false
    t.string "author_en", null: false
    t.string "translator"
    t.string "translator_en"
    t.bigint "publisher_id", null: false
    t.string "quote"
    t.string "quote_en"
    t.integer "review_star"
    t.bigint "country_id", null: false
    t.integer "year", null: false
    t.boolean "is_public", default: false, null: false
    t.boolean "is_classic", default: false, null: false
    t.boolean "is_favorite", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_id"], name: "index_books_on_country_id"
    t.index ["publisher_id"], name: "index_books_on_publisher_id"
  end

  create_table "countries", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "label", null: false
    t.string "label_en", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "film_tags", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "label", null: false
    t.string "label_en", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "film_tags_films", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.bigint "film_id", null: false
    t.bigint "film_tag_id", null: false
  end

  create_table "films", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "title", null: false
    t.string "title_en", null: false
    t.string "comment", limit: 100
    t.string "comment_en"
    t.string "director"
    t.string "director_en"
    t.string "cast"
    t.string "cast_en"
    t.integer "review_star"
    t.bigint "country_id", null: false
    t.integer "year", null: false
    t.boolean "is_public", default: false, null: false
    t.boolean "is_classic", default: false, null: false
    t.boolean "is_favorite", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_id"], name: "index_films_on_country_id"
  end

  create_table "publishers", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "label"
    t.string "label_en"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_general_ci", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "books", "countries"
  add_foreign_key "books", "publishers"
  add_foreign_key "films", "countries"
end
