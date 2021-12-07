# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
OnlineClass.destroy_all
OnlineClass.reset_pk_sequence
PrivateClass.destroy_all
PrivateClass.reset_pk_sequence
Client.destroy_all
Client.reset_pk_sequence
Trainer.destroy_all
Trainer.reset_pk_sequence
User.destroy_all
User.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence


billy = Client.create( email:"billy@gmail.com", name:"Billy", birth:"20100628", goal:"flexibility")
mandy = Client.create( email:"mandy@gmail.com", name:"Mandy", birth:"19940628", goal:"strength")
grim = Client.create(email:"grim@gmail.com", name:"Grim", birth:"19950628", goal:"endurance")
dad = Client.create( email:"dad@gmail.com", name:"Dad", birth:"19990628", goal:"strength")


brendan = Trainer.create(name:"Brendan", bio:"I can't believe it's not butter! It's Brendan")
jane = Trainer.create(name:"Jane", bio:"Hey! Jane here. I'm going to make you do crunches until your breakfast is on the floor!")
juliette = Trainer.create(name:"Juliette", bio:"Ruff! It's me! Your favorite furry friend!")
william = Trainer.create(name:"William", bio:"Will.I.Am? More like Will.I.Can do this workout!")


User.create(username:"billy", password:"billy", client_id:billy.id, trainer_id:"nil")
User.create(username:"mandy", password:"mandy", client_id:mandy.id, trainer_id:"nil")
User.create(username:"grim", password:"grim", client_id:grim.id, trainer_id:"nil")
User.create(username:"dad", password:"dad", client_id: dad.id, trainer_id:"nil")
User.create(username:"brendan", password:"brendan", client_id: "nil", trainer_id: brendan.id)
User.create(username:"jane", password:"jane", client_id: "nil", trainer_id: jane.id)
User.create(username:"juliette", password:"juliette", client_id: "nil" , trainer_id:juliette.id)
User.create(username:"william", password:"william", client_id: "nil", trainer_id:william.id)

juliettepushups = OnlineClass.create(video: "Juliette push ups", description:"Push up demontration from our most beloved trainedr Juliette.", client_id:"nil", trainer_id:juliette.id, category:"Strength building", name:"If I can do it, you better be doing it!")
juliettewalks = OnlineClass.create(video: "Juliette walks", description:"Watch and learn how to walk like Juliette.", client_id:"nil",  trainer_id:juliette.id, category:"Endurance building", name:"Take a stroll with your favorite trainer.")

# juliettewalks = OnlineClass.create(video: "Juliette walks", description:"Watch and learn how to walk like Juliette.", client_id: 1,  trainer_id: 1, category:"Endurance building", name:"Take a stroll with your favorite trainer.")

PrivateClass.create(description:"I want to increase my shoulder strength.",date:"20211210040000",client_id:billy.id, trainer_id:brendan.id)
PrivateClass.create(description:"I am ready for whatever.",date:"20211215090000",client_id:mandy.id, trainer_id:william.id)
PrivateClass.create(description:"Need some cuteness.",date:"20211220180000",client_id:dad.id, trainer_id:juliette.id)
PrivateClass.create(description:"Feeling a litte tight in my hips.",date:"20211210150000",client_id:grim.id, trainer_id:jane.id)

Review.create(content:"Juliette is the best training", rating:"10", online_class_id: juliettepushups.id, client_id: billy.id)
Review.create(content:"I'm walking better now! Thanks Juliette!", rating:"10", online_class_id: juliettewalks.id, client_id: dad.id)

