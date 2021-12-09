ClientOnlineClass.destroy_all
ClientOnlineClass.reset_pk_sequence
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

adam = Client.create(email:'adam@gmail.com', name:'Adam', birth:'20000101', goal:'Upper Body')
billy = Client.create(email:"billy@gmail.com", name:"Billy", birth:"20100628", goal:"Stretching and Flexibility")
carson = Client.create(email:'carson@gmail.com', name:'Carson', birth:'19850321', goal:'Weight Loss')
dad = Client.create(email:"dad@gmail.com", name:"Dad", birth:"19990628", goal:"Lower Body")
edward = Client.create(email:'edward@gmail.com', name:'Edward', birth:'19690917', goal:'Upper Body')
fredrick = Client.create(email:'fredrick@gmail.com', name:'Fredrick', birth:'18170214', goal:'Stretching and Flexibility')
grim = Client.create(email:"grim@gmail.com", name:"Grim", birth:"19950628", goal:"Lower Body")
homer = Client.create(email:'homer@gmail.com', name:'Homer', birth:'19890715', goal:'Lower Body')
ivan = Client.create(email:'ivan@gmail.com', name:'Ivan', birth:'19980513', goal:'Weight Loss')
janet = Client.create(email:'janet@gmail.com', name:'Janet', birth:'19860305', goal:'Stretching and Flexibility')
kyle = Client.create(email:'kyle@gmail.com', name:'Kyle', birth:'19990420', goal:'Lower Body')
lisa = Client.create(email:'Lisa@gmail.com', name:'Lisa', birth:'20011225', goal:'Upper Body')
mandy = Client.create(email:"mandy@gmail.com", name:"Mandy", birth:"19940628", goal:"Upper Body")
nina = Client.create(email:'nina@gmail.com', name:'Nina', birth:'20020121', goal:'Weight Loss')
oliver = Client.create(email:'oliver@gmail.com', name:'Oliver', birth:'19420316', goal:'Stretching and Flexibility')
patrick = Client.create(email:'patrick@gmail.com', name:'Patrick', birth:'19920618', goal:'Weight Loss')
quan = Client.create(email:'quan@gmail.com', name:'Quan', birth:'19760730', goal:'Lower Body')
rachel = Client.create(email:'rachel@gmail.com', name:'Rachel', birth:'19970819', goal:'Lower Body')
sara = Client.create(email:'sara@gmail.com', name:'Sara', birth:'20030521', goal:'Weight Loss')
trinity = Client.create(email:'trinity@gmail.com', name:'Trinity', birth:'19891121', goal:'Upper Body')
ulysses = Client.create(email:'ulysses@gmail.com', name:'Ulysses', birth:'18220427', goal:'Stretching and Flexibility')
veronica = Client.create(email:'veronica@gmail.com', name:'Veronica', birth:'19820617', goal:'Stretching and Flexibility')
wesley = Client.create(email:'wesley@gmail.com', name:'Wesley', birth:'20000424', goal:'Upper Body')
xavier = Client.create(email:'xavier@gmail.com', name:'Xavier', birth:'19950716', goal:'Lower Body')
yusuf = Client.create(email:'yusuf@gmail.com', name:'Yusuf', birth:'19830313', goal:'Weight Loss')
zoe = Client.create(email:'zoe@gmail.com', name:'Zoe', birth:'20020909', goal:'Stretching and Flexibility')

brendan = Trainer.create(name:"Brendan", picture: "https://c8.alamy.com/comp/T9CB93/funny-cartoon-monster-with-big-mouth-vector-blue-monster-illustration-halloween-design-T9CB93.jpg", bio:"I can't believe it's not butter! It's Brendan")
jane = Trainer.create(name:"Jane", picture:"https://previews.123rf.com/images/drawkman/drawkman1807/drawkman180700294/104064005-funny-cartoon-monster-vector-orange-monster-illustration-halloween-design.jpg", bio:"Hey! Jane here. I'm going to make you do crunches until your breakfast is on the floor!")
juliette = Trainer.create(name:"Juliette", picture:"https://ih1.redbubble.net/image.363652257.7171/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg", bio:"Ruff! It's me! Your favorite furry friend!")
william = Trainer.create(name:"William", picture:"https://i.graphicmama.com/uploads/2016/8/57a4a36fa6003-hal-the-messy-pal.png", bio:"Will.I.Am? More like Will.I.Can do this workout!")

User.create(username:"brendan", password:"brendan", client_id: "nil", trainer_id: brendan.id)
User.create(username:"jane", password:"jane", client_id: "nil", trainer_id: jane.id)
User.create(username:"juliette", password:"juliette", client_id: "nil" , trainer_id:juliette.id)
User.create(username:"william", password:"william", client_id: "nil", trainer_id:william.id)

User.create(username:'adam', password:'adam', client_id: adam.id, trainer_id:'nil')
User.create(username:"billy", password:"billy", client_id: billy.id, trainer_id:"nil")
User.create(username:'carson', password:'carson', client_id: carson.id, trainer_id:'nil')
User.create(username:"dad", password:"dad", client_id: dad.id, trainer_id:"nil")
User.create(username:'edward', password:'edward', client_id: edward.id, trainer_id:'nil')
User.create(username:'fredrick', password:'fredrick', client_id: fredrick.id, trainer_id:'nil')
User.create(username:"grim", password:"grim", client_id:grim.id, trainer_id:"nil")
User.create(username:'homer', password:'homer', client_id: homer.id, trainer_id:'nil')
User.create(username:'ivan', password:'ivan', client_id: ivan.id, trainer_id:'nil')
User.create(username:'janet', password:'janet', client_id: janet.id, trainer_id:'nil')
User.create(username:'kyle', password:'kyle', client_id: kyle.id, trainer_id:'nil')
User.create(username:'lisa', password:'lisa', client_id: lisa.id, trainer_id:'nil')
User.create(username:"mandy", password:"mandy", client_id:mandy.id, trainer_id:"nil")
User.create(username:'nina', password:'nina', client_id: nina.id, trainer_id:'nil')
User.create(username:'oliver', password:'oliver', client_id: oliver.id, trainer_id:'nil')
User.create(username:'patrick', password:'patrick', client_id: patrick.id, trainer_id:'nil')
User.create(username:'quan', password:'quan', client_id: quan.id, trainer_id:'nil')
User.create(username:'rachel', password:'rachel', client_id: rachel.id, trainer_id:'nil')
User.create(username:'sara', password:'sara', client_id: sara.id, trainer_id:'nil')
User.create(username:'trinity', password:'trinity', client_id: trinity.id, trainer_id:'nil')
User.create(username:'ulysses', password:'ulysses', client_id: ulysses.id, trainer_id:'nil')
User.create(username:'veronica', password:'veronica', client_id: veronica.id, trainer_id:'nil')
User.create(username:'wesley', password:'wesley', client_id: wesley.id, trainer_id:'nil')
User.create(username:'xavier', password:'xavier', client_id: xavier.id, trainer_id:'nil')
User.create(username:'yusuf', password:'yusuf', client_id: yusuf.id, trainer_id:'nil')
User.create(username:'zoe', password:'zoe', client_id: zoe.id, trainer_id:'nil')

juliettepushups = OnlineClass.create(video:"video url", description:"Push up demontration from our most beloved trainer Juliette.", trainer_id:juliette.id, category:"Upper Body", name:"Push ups with Juliette")
juliettefetch = OnlineClass.create(video:"video url", description:"Watch and learn how to fetch like Juliette.", trainer_id:juliette.id, category:"Weight Loss", name:"Fetching with Juliette")
julietteyoga = OnlineClass.create(video:'video url', description:'Learn how to form the downward dog and shavasana poses with Juliette.', trainer_id:juliette.id, category:'Stretching and Flexibility', name:'Yoga with Juliette')
brendanjumpingjacks = OnlineClass.create(video:'video url', description:'Learn how to do jumping jacks for cardio with Brendan', trainer_id:brendan.id, category:'Weight Loss', name:'Jumping Jacks with Brendan')
brendanrunninginplace = OnlineClass.create(video:'video url', description:'Watch Brendan practice running in place, the easier way to run (you can watch tv while you do it!!!)', trainer_id:brendan.id, category:'Weight Loss', name:'Running with Brendan')
brendansquats = OnlineClass.create(video:'video url', description:'Brendan is back with a squat demonstration starring a special guest', trainer_id:brendan.id, category:'Lower Body', name:'Squats with Brendan')
williamweightloss = OnlineClass.create(video:'https://www.youtube.com/watch?v=SKGAJDQ3Ks4', description:'50 rounds of 10 jumping jacks, 10 seconds juggling, 10 pushups!', trainer_id:william.id, category:'Weight Loss', name:'Burning Cals with William')
williamchest = OnlineClass.create(video:'https://youtu.be/7L-6Hckhjy0', description:'1000 band chest presses', trainer_id:william.id, category:'Upper Body', name:'Every Day Is Chest Day')
williamstretch = OnlineClass.create(video:'https://youtu.be/rOqQIxeLKVQ', description:'Touch your toes, pause for a deep stretch, get a reward, repeat', trainer_id:william.id, category:'Stretching and Flexibility', name:'Stretch with Wilhelm')



ClientOnlineClass.create( online_class_id: juliettepushups.id, client_id: billy.id)
ClientOnlineClass.create( online_class_id: juliettepushups.id, client_id: mandy.id)
ClientOnlineClass.create( online_class_id: juliettefetch.id, client_id: grim.id)
ClientOnlineClass.create( online_class_id: juliettefetch.id, client_id: dad.id)

PrivateClass.create(description:"I want to increase my shoulder strength.",date:"20211210040000",client_id:billy.id,  trainer_id:brendan.id)
PrivateClass.create(description:"I am ready for whatever.",date:"20211215090000",client_id:mandy.id, trainer_id:william.id)
PrivateClass.create(description:"Need some cuteness.",date:"20211220180000",client_id:dad.id, trainer_id:juliette.id)
PrivateClass.create(description:"Feeling a litte tight in my hips.",date:"20211210150000",client_id:grim.id, trainer_id:jane.id)

Review.create(content:"Juliette is the best training", rating:"10", online_class_id: juliettepushups.id, client_id: billy.id, client_name: billy.name)
Review.create(content:"I'm walking better now! Thanks Juliette!", rating:"10", online_class_id: juliettefetch.id, client_id: dad.id, client_name: dad.name)