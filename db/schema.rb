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

ActiveRecord::Schema.define(version: 2021_12_07_170701) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "client_online_classes", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "online_class_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_client_online_classes_on_client_id"
    t.index ["online_class_id"], name: "index_client_online_classes_on_online_class_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.date "birth"
    t.string "goal"
  end

  create_table "online_classes", force: :cascade do |t|
    t.string "video"
    t.string "description"
    t.bigint "trainer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "category"
    t.string "name"
    t.index ["trainer_id"], name: "index_online_classes_on_trainer_id"
  end

  create_table "private_classes", force: :cascade do |t|
    t.string "description"
    t.bigint "client_id", null: false
    t.bigint "trainer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "date"
    t.index ["client_id"], name: "index_private_classes_on_client_id"
    t.index ["trainer_id"], name: "index_private_classes_on_trainer_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "content"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "online_class_id"
    t.integer "client_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "name"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "picture"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "client_id"
    t.integer "trainer_id"
  end

  add_foreign_key "client_online_classes", "clients"
  add_foreign_key "client_online_classes", "online_classes"
  add_foreign_key "online_classes", "trainers"
  add_foreign_key "private_classes", "clients"
  add_foreign_key "private_classes", "trainers"
end
