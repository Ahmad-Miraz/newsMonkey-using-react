import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles=[
    {
      "source": { "id": null, "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "95-year-old woman Tasered by police in Australia dies - BBC",
      "description": "Clare Nowland was Tasered by police at a care home in New South Wales last week, sparking an outcry.",
      "url": "https://www.bbc.com/news/world-australia-65696475",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/476F/production/_129778281_clare_nowland.jpg",
      "publishedAt": "2023-05-24T12:12:40Z",
      "content": "A 95-year-old woman who was Tasered by police at an Australian care home, sparking a public outcry, has died.\r\nClare Nowland was critically injured after police responded to reports she was wandering… [+1511 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Hannah Knowles",
      "title": "DeSantis to announce 2024 run on Twitter with Elon Musk, after rocky stretch - The Washington Post",
      "description": "Allies hope an official plunge into the 2024 presidential race will help Ron DeSantis regain momentum.",
      "url": "https://www.washingtonpost.com/elections/2023/05/24/ron-desantis-2024-president-announcement/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/05-24-2023/t_895e0831f67c42eea2931f0b908c3789_name_20230524_Mawar_00_01_04_06_Still014.jpg&w=1440",
      "publishedAt": "2023-05-24T12:00:00Z",
      "content": "Comment on this story\r\nComment\r\nFlorida Gov. Ron DeSantis will declare Wednesday evening that he is running for president, using an unorthodox announcement with Twitter CEO Elon Musk to launch a long… [+11427 chars]"
    },
    {
      "source": { "id": null, "name": "Vox" },
      "author": "Sara Morrison",
      "title": "Roku, Tubi, and Pluto: How do you watch TV for free? FAST wants to reach you - Vox.com",
      "description": "Welcome to FAST: The free, ad-supported, streaming television bargain bin.",
      "url": "https://www.vox.com/technology/2023/5/24/23733401/fast-streaming-tubi-pluto-roku",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/MrPTXTEfRydLdqgpksyNjaLgp5E=/0x330:7513x4264/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24674855/GettyImages_1243367408.jpg",
      "publishedAt": "2023-05-24T12:00:00Z",
      "content": "I was looking for Night Court, for research purposes. Not the new version; the original, which went off the air in 1992. Much to my surprise, I found all nine seasons on a streaming app that Id never… [+14643 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Andy Rose",
      "title": "Amanda Gorman’s Biden inauguration poem was moved out of an elementary library at a Miami-Dade school after a parent complained - CNN",
      "description": "“The Hill We Climb,” the poem written by Amanda Gorman for President Joe Biden’s inauguration, was moved out of the elementary section of one Miami-Dade County public school, the district confirmed Tuesday. It remains available to older children.",
      "url": "https://www.cnn.com/2023/05/23/us/miami-school-moves-biden-inaugural-poem/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230523222308-miami-school-moves-biden-inaugural-poem.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-05-24T11:49:00Z",
      "content": "The Hill We Climb, the poem written by Amanda Gorman for President Joe Bidens inauguration, was moved out of the elementary section of one Miami-Dade County public school, the district confirmed Tues… [+1839 chars]"
    },
    {
      "source": { "id": null, "name": "The Athletic" },
      "author": "Jared Weiss",
      "title": "Celtics defense finally flips switch after Joe Mazzulla’s surprising timeout - The Athletic",
      "description": "Joe Mazzulla surprised everyone with an early timeout to prevent a play from going south. It's exactly what the Celtics needed to take off.",
      "url": "https://theathletic.com/4547711/2023/05/24/celtics-heat-joe-mazzulla-game4-win/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/05/24020425/GettyImages-1492760020-1024x683.jpg",
      "publishedAt": "2023-05-24T11:19:09Z",
      "content": "MIAMI Coming out of halftime, the Celtics needed something to change if they were going to save their season. But after a few minutes, it was clear that wasnt happening. Jaylen Brown was trapped in t… [+8568 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Shimon Prokupecz,as told to Rachel Clarke",
      "title": "Uvalde school massacre: The story and the year that changed me - CNN",
      "description": "CNN’s Shimon Prokupecz reflects on a year of grief and questions, both in Uvalde, Texas, and personally, as he covered the worst school shooting since Sandy Hook.",
      "url": "https://www.cnn.com/2023/05/24/us/uvalde-one-year-on-shimon-prokupecz/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230523173855-shimon-uvalde-essay.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-05-24T11:18:00Z",
      "content": "Editors Note: Editors note: Shimon Prokupecz is CNNs Senior Crime and Justice Correspondent. He and his team have covered the botched law enforcement response to the Robb Elementary school shooting s… [+10919 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Exclusive: Russian hypersonic scientist accused of betraying secrets to China - Reuters.com",
      "description": "The director of a top Russian science institute, arrested on suspicion of treason along with two other hypersonic missile technology experts, stands accused of betraying secrets to China, two people familiar with the case told Reuters.",
      "url": "https://www.reuters.com/world/russian-hypersonic-scientist-accused-betraying-secrets-china-sources-2023-05-24/",
      "urlToImage": "https://www.reuters.com/resizer/pW5lFARUMPyAQOcrVjq4ZryTaqY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FCTH6QJVIZIW7HCQ5VCAMUQATE.jpg",
      "publishedAt": "2023-05-24T11:10:00Z",
      "content": "LONDON, May 24 (Reuters) - The director of a top Russian science institute, arrested on suspicion of treason along with two other hypersonic missile technology experts, stands accused of betraying se… [+7034 chars]"
    },
    {
      "source": { "id": null, "name": "GMA" },
      "author": "Haley Yamada",
      "title": "Netflix announces password sharing crackdown rollout in US - GMA",
      "description": "",
      "url": "https://www.goodmorningamerica.com/culture/story/netflix-announces-password-sharing-crackdown-rollout-us-99551562",
      "urlToImage": "https://s.abcnews.com/images/GMA/netflix-logo-gty-lv-230523_1684877686272_hpMain_16x9_608.jpg",
      "publishedAt": "2023-05-24T10:52:30Z",
      "content": "Netflix announced Tuesday that it will begin to send emails to members who are sharing their \r\n account information outside of their households in the U.S.\r\n\"A Netflix account is for use by one house… [+1248 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": "John Bacon, Jorge L. Ortiz",
      "title": "Ukraine Russia war live updates: Wagner Group fighters leaving Bakhmut - USA TODAY",
      "description": "Confusion over the status of Bakhmut intensified when Wagner founder Yevgeny Prigozhin said his mercenary forces will leave the city by month's end.",
      "url": "https://www.usatoday.com/story/news/world/2023/05/22/ukraine-russia-war-live-updates/70242385007/",
      "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/05/22/USAT/62fc4907-2844-443f-a64c-88299de7521f-AFP_33FT887.jpg?crop=1999,1125,x0,y101&width=1999&height=1125&format=pjpg&auto=webp",
      "publishedAt": "2023-05-24T10:26:18Z",
      "content": "Confusion over the status of Bakhmut intensified Monday when the leader of Russia's Wagner Group said his mercenary forces will leave the battered eastern Ukrainian city by month's end and suggested … [+7418 chars]"
    },
    {
      "source": { "id": null, "name": "Radio Free Europe/ Radio Liberty" },
      "author": "RFE/RL",
      "title": "Wagner Chief Prigozhin Says Russia's Plan To 'Demilitarize' Ukraine Failed - Radio Free Europe / Radio Liberty",
      "description": "The leader of Russia's Wagner private mercenary group, Yevgeny Prigozhin, says Moscow's plan to \"demilitarize\" Ukraine failed and that the invasion of its neighbor \"turned Ukraine's army into one of the most powerful in the world.\"",
      "url": "https://www.rferl.org/a/russia-wagner-prigozhin-failure/32425650.html",
      "urlToImage": "https://gdb.rferl.org/01000000-c0a8-0242-4beb-08db4fc1911e_cx19_cy7_cw69_w1200_r1.jpg",
      "publishedAt": "2023-05-24T10:17:31Z",
      "content": "British Defense Minister Ben Wallace met with his Ukrainian counterpart, Oleksiy Reznikov, during a surprise visit to Kyiv on May 24, Ukraine's Defense Ministry announced.\r\nThe visit comes a day ahea… [+5462 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Mike Calia",
      "title": "5 things to know before the stock market opens Wednesday - CNBC",
      "description": "Here are the most important news items that investors need to start their trading day.",
      "url": "https://www.cnbc.com/2023/05/24/5-things-to-know-before-the-stock-market-opens-wednesday-may-24.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107245492-1684865828905-Untitled-4.jpg?v=1684923393&w=1920&h=1080",
      "publishedAt": "2023-05-24T10:16:33Z",
      "content": "Traders work the floor at the New York Stock Exchange (NYSE) during the opening bell in New York on May 23, 2023. Stock markets slid on May 23 after fresh talks between President Joe Biden and House … [+4436 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Meredith Deliso, Max Golembo, Morgan Winsor",
      "title": "Typhoon Mawar hits Guam with 140 mph winds as potentially 'catastrophic' storm - ABC News",
      "description": "It could be the strongest tropical cyclone to impact Guam in decades.",
      "url": "https://abcnews.go.com/US/typhoon-mawar-set-hit-guam-potentially-catastrophic-storm/story?id=99541353",
      "urlToImage": "https://s.abcnews.com/images/International/typhoon-mawar-gty-lv-230523_1684889397947_hpMain_16x9_992.jpg",
      "publishedAt": "2023-05-24T10:07:30Z",
      "content": "A powerful typhoon taking aim at Guam could be the strongest tropical cyclone to impact the U.S. island territory in decades.\r\nAs of Wednesday 7:50 p.m. local time (5:50 a.m. ET), the eye of Typhoon … [+2720 chars]"
    },
    {
      "source": { "id": null, "name": "The Guardian" },
      "author": "Kira Lerner",
      "title": "Texas Republicans target state’s largest city with voting restrictions - The Guardian US",
      "description": "Two laws approved by the house on Tuesday will affect Democratic stronghold of Houston",
      "url": "https://www.theguardian.com/us-news/2023/may/24/texas-republicans-houston-local-election-authority",
      "urlToImage": "https://i.guim.co.uk/img/media/dedbb2675b3570a77cdbcebcfffcc8c3660ef907/0_340_5129_3079/master/5129.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f03d545f9a484548a56cd0c932ec8e2d",
      "publishedAt": "2023-05-24T10:00:00Z",
      "content": "Republican lawmakers in Texas are targeting Houston, the states largest city and Democratic stronghold, with a series of bills that would limit local authority to administer elections and give that p… [+10135 chars]"
    },
    {
      "source": { "id": null, "name": "NPR" },
      "author": "David Schaper",
      "title": "Flight delays and cancellations may ruin the busy summer air travel season - NPR",
      "description": "Memorial Day weekend kicks off the busy summer air travel season and this may be the busiest ever. But some worry it could be another summer of delays and cancellations after a \"pretty rocky\" 2022.",
      "url": "https://www.npr.org/2023/05/24/1177795371/summer-air-travel-tips-airlines-memorial-day",
      "urlToImage": "https://media.npr.org/assets/img/2023/05/23/gettyimages-1406235659_wide-cc99e49ed6fba57369474e7a1e8437701f6b0f7d-s1400-c100.jpg",
      "publishedAt": "2023-05-24T09:00:46Z",
      "content": "Travelers line up to check in for United Airlines flights at San Francisco International Airport on July 1, 2022 in San Francisco, Calif. This summer is expected to be a record for air travel.\r\nJusti… [+10090 chars]"
    },
    {
      "source": { "id": null, "name": "NPR" },
      "author": "Se Eun Gong",
      "title": "South Korea mosque project met with anti-Muslim protests and pig heads - NPR",
      "description": "The tensions are a test of the nation's tolerance of increasing diversity, when South Korea is looking to immigration to bolster its aging and shrinking workforce.",
      "url": "https://www.npr.org/2023/05/24/1176132837/south-korea-mosque-muslim-students-tensions",
      "urlToImage": "https://media.npr.org/assets/img/2023/05/19/4532834-kuhn-101_wide-c1ff254fdfb1eac64c3619a6f023e258319a814c-s1400-c100.jpg",
      "publishedAt": "2023-05-24T09:00:15Z",
      "content": "The Muslim community at Kyungpook National University mostly comprises students from Pakistan, Nigeria, Bangladesh and other countries with large Muslim populations. Here some members of the communit… [+11642 chars]"
    },
    {
      "source": { "id": "politico", "name": "Politico" },
      "author": null,
      "title": "White House believes up to 100 Dem votes may be needed on debt ceiling deal - POLITICO",
      "description": "The prospect of needing so many votes from within the party has begun to color Biden's negotiating strategy.",
      "url": "https://www.politico.com/news/2023/05/24/white-house-votes-debt-ceiling-deal-00098487",
      "urlToImage": "https://static.politico.com/a8/7e/71baafa4416b8c0e80ddc625432f/biden-25057.jpg",
      "publishedAt": "2023-05-24T08:30:00Z",
      "content": "But the realization that the party might need to supply a sizable percentage of the House votes to avert an economically disastrous default not to mention passage in the Democratic-controlled Senate … [+6622 chars]"
    },
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Melissa Rudy",
      "title": "New AI ‘cancer chatbot’ provides patients and families with 24/7 support: 'Empathetic approach' - Fox News",
      "description": "Cancer patients looking for quick answers or support between appointments can now turn to “Dave,\" an artificial intelligence chatbot trained to discuss all things related to oncology.",
      "url": "https://www.foxnews.com/health/new-ai-cancer-chatbot-provides-patients-families-24/7-support-empathetic-approach",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/woman-with-cancer-on-tablet.jpg",
      "publishedAt": "2023-05-24T06:00:00Z",
      "content": "Cancer patients looking for quick answers or support between their appointments can now turn to \"Dave,\" an artificial intelligence chatbot\r\n trained to discuss all things related to oncology.\r\nLaunch… [+7579 chars]"
    },
    {
      "source": { "id": "marca", "name": "Marca" },
      "author": "LW",
      "title": "Prince Harry and Megan Markle are being singled out as 'proven compulsive liars', per report - Marca English",
      "description": "Prince Harry and Meghan have been in constant mediatic turmoil following the car chase that some claim it was just a farse, and now they are being called &apos;compulsive liars&apo",
      "url": "https://www.marca.com/en/lifestyle/uk-news/2023/05/24/646da22a22601d40728b4603.html",
      "urlToImage": "https://phantom-marca.unidadeditorial.es/55ac99989f5afb22e8aaa076c1b23a76/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/24/16849043187527.jpg",
      "publishedAt": "2023-05-24T05:36:02Z",
      "content": "Prince Harry and Meghan have been in constant mediatic turmoil following the car chase that some claim it was just a farse, and now they are being called 'compulsive liars' by British news host Dan W… [+1629 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Yahoo Sports Staff",
      "title": "NBA playoffs: Celtics force Game 5 back in Boston, beat Heat to extend Eastern Conference finals - Yahoo Sports",
      "description": "Follow Game 4 of the Eastern Conference finals with Yahoo Sports.",
      "url": "https://sports.yahoo.com/nba-playoffs-celtics-force-game-5-back-in-boston-beat-heat-to-extend-eastern-conference-finals-044626008.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/SlQH51Hf8tsfdjes4bVVLA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/7e8145c0-f9ed-11ed-beff-310c3b21493e",
      "publishedAt": "2023-05-24T05:17:00Z",
      "content": "The Boston Celtics were not going to be swept. They staved off elimination with a 116-99 win over the Miami Heat in Game 4 of the Eastern Conference finals to force a Game 5 back in Boston on Thursda… [+420 chars]"
    },
    {
      "source": { "id": null, "name": "Entertainment Tonight" },
      "author": "Meredith B. Kile",
      "title": "'The Voice' Finale: Watch Gina Miles, Grace West, D. Smooth, Sorelle and NOIVAS Perform - Entertainment Tonight",
      "description": "Will your favorite singer be the season 23 winner?",
      "url": "https://www.etonline.com/the-voice-finale-watch-gina-miles-grace-west-d-smooth-sorelle-and-noivas-perform-205083",
      "urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2023-05/ETD_TRENDING%20The%20Voice%20Finale%20Watch_20230523_MG_VIDPIC.jpg?h=d1cb525d&itok=veWrWG2P",
      "publishedAt": "2023-05-24T04:18:14Z",
      "content": "The Voice is getting ready to crown its season 23 champion!\r\nThe Top 5 singers took the stage Monday night for one last chance to prove to America why they should be the latest winner of the NBC sing… [+3249 chars]"
    }
  ]
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false
    }

  }
  render() {
    return (
      <div className="container my=3">
        <h1 className="my-3 text-center">This are the top headlines of todays NewsMonkey</h1>
        <div className="row my-5">
          {this.state.articles.map((element)=>{
                return    <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                  </div>
          })}
          
        </div>
      </div>
    );
  }
}

export default News;
