# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

billy = Client.create(username:"billy", email:"billy@gmail.com", name:"Billy", birth:"20100628", goal:"flexibility")
mandy = Client.create(username:"mandy", email:"mandy@gmail.com", name:"Mandy", birth:"19940628", goal:"strength")
grim = Client.create(username:"grim", email:"grim@gmail.com", name:"Grim", birth:"19950628", goal:"endurance")
dad = Client.create(username:"dad", email:"dad@gmail.com", name:"Dad", birth:"19990628", goal:"strength")

brendan = Trainer.create(name:"Brendan", content:"I can't believe it's not butter! It's Brendan")
jane = Trainer.create(name:"Jane", content:"Hey! Jane here. I'm going to make you do crunches until your breakfast is on the floor!")
juliette = Trainer.create(name:"Juliette", content:"Ruff! It's me! Your favorite furry friend!")
william = Trainer.create(name:"William", content:"Will.I.Am? More like Will.I.Can do this workout!")
