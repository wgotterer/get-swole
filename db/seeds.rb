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

juliettepushups = Onlineclass.create(video: "Juliette push ups", description:"Push up demontration from our most beloved trainedr Juliette.", trainer_id:juliette.id, category:"Strength building", name:"If I can do it, you better be doing it!" )
juliettewalks = OnlineClass.create(video: "Juliette walks", description:"Watch and learn how to walk like Juliette.",  trainer_id:juliette.id, category:"Endurance building", name:"Take a stroll with your favorite trainer." )



Privateclass.create(description:"I want to increase my shoulder strength.",date:"20211210150000",client_id:billy.id, trainer_id:brendan.id)
Privateclass.create(description:"I am ready for whatever.",date:"20211215090000",client_id:mandy.id, trainer_id:william.id)
Privateclass.create(description:"Need some cuteness.",date:"20211220180000",client_id:dad.id, trainer_id:juliette.id)
Privateclass.create(description:"Feeling a litte tight in my hips.",date:"20211210150000",client_id:grim.id, trainer_id:jane.id)

Reviews.create(content:"Juliette is the best training", rating:"10", online_class_id: juliettepushups.id, client_id: billy.id)
Reviews.create(content:"I'm walking better now! Thanks Juliette!", rating:"10", online_class_id: juliettewalks.id, client_id: dad.id)

