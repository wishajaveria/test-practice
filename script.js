let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  {
    title: "Episode #  PaRt #47 - Jaan Cartoon ",
    lengthInMinutes: 8,
    category: "Cartoon",
    uploadDate: new Date("25-07- 2019"),
    tags: "funny, moral",
    features: ["Subtitles/CC", "Purchased"],
    viewCount: 617,
    rating: 4.5
  },
  {
    title: "Nugget Recipe",
    lengthInMinutes: 2,
    category: "Cooking",
    uploadDate: new Date("25-07-2019"),
    tags: "enjoyment",
    features: ["Creative Commons", "HD"],
    viewCount: 129802,
    rating: 8.5
  },
  {
    title: "5 Minutes Craft",
    lengthInMinutes: 1,
    category: "Craft",
    uploadDate: new Date("06-03-2019"),
    tags: "art work",
    features: ["live", "4K"],
    viewCount: 181557,
    rating: 3.5
  },
  {
    title: "Funny video -Forget Cat ",
    lengthInMinutes: 1,
    category: "funny",
    uploadDate: new Date("11-10-2018"),
    tags: "Entertainment",
    features: ["Purchased", "Creative Commons"],
    viewCount: 156763711,
    rating: 8.5
  },
  {
    title: "Maulana Tariq Jameel",
    lengthInMinutes: 1,
    category: "Islam",
    uploadDate: new Date("26 Jul 2019"),
    tags: "Knowledge",
    features: ["Purchased", "HD"],
    viewCount: 318879,
    rating: 4.5
  },
  {
    title: " News Headlines - Maryam Nawaz Exposed PMLN Corruption",
    lengthInMinutes: 6,
    category: "Sindh Goverment",
    uploadDate: new Date("29-05-2018"),
    tags: "Knowledge",
    features: ["Purchased", "HD"],
    viewCount: 2733,
    rating: 3.5
  },
  {
    title: "match - Pakistan And Australia",
    lengthInMinutes: 2,
    category: "Match",
    uploadDate: new Date(" 06-03-2019"),
    tags: "Entertaiment, enjoyment",
    features: ["Purchased", "HD"],
    viewCount: 933435,
    rating: 8.7
  },
  {
    title: "Conjuring",
    lengthInMinutes: 60,
    category: "Horror Movie",
    uploadDate: new Date("11-10-2018"),
    tags: "Scary",
    features: ["VR180", "HD"],
    viewCount: 14047598,
    rating: 5.5
  },
  {
    title: "Episode # 5 - Sonu Chanda - Ost",
    lengthInMinutes: 2,
    category: "Drama",
    uploadDate: new Date(" 6-03-2013"),
    tags: "enjoyment , Mind relaxation",
    features: ["HDR", "Subtitles/CC"],
    viewCount: 3270007,
    rating: 2.5
  },
  {
    title: "Experiment Magic fire - Magic Fire",
    lengthInMinutes: 3,
    category: "Experiments",
    uploadDate: new Date("11-10-2018"),
    tags: "learning , enjoyment",
    features: ["Purchased", "location"],
    viewCount: 772,
    rating: 6.5
  },
];

// QUESTION NO: 01

// for (let i = 0; i < videos.length; i++) {
//   console.log("title:" + videos[i].title + "\n" +"category:" + videos[i].category + "\n " + "Rating:" + videos[i].Rating + "\n" +  " viewCount:" + videos[i].viewCount)
// }


// QUESTION NO : 02

// for (let i = 0; i < videos.length; i++){
// if(videos[i].lengthInMinutes < 3){

//   console.log("title:" + videos[i].title);
// }
// }

// QUESTION NO : 03

// for(let i = 0; i< videos.length; i++){
//   if(videos[i].lengthInMinutes > 20){
//     console.log("title:" + videos[i].title);

//   }

// }

// QUESTION NO: 04

// for(let i = 0; i< videos.length; i++){
//   if(videos[i].lengthInMinutes < 50){
//     console.log("title:" + videos[i].title);

//   }

// }

// QUESTION NO: 05

// for(let i = 0; i< videos.length; i++){
//   if(videos[i].lengthInMinutes > 50){
//     console.log("title:" + videos[i].title);

//   }

// }


// QUESTION NO: 06

// for (let i = 0; i < videos.length; i++) {
//   if (videos[i].category == "Education") {
//     console.log("title:" + videos[i].title);

//   }
// }


//  QUESTION NO: 07


// for(let i = 0; i < videos.length; i++){
//     if(videos[i].tags == "javascript"){
//       console.log("title:" + videos[i].title);

//     }
//   }


//  QUESTION NO: 08

// for(let i = 0; i < videos.length; i++){

//   if(videos[i].category =="drama"){
//     console.log("title:" + videos[i].title);

//   }

// }

 //QUESTION NO:09

for (let i = 0; i < videos.length; i++){

  if(videos[i].uploadDate == 6 ){
    console.log("title:" + videos[i].title);

  }
}



