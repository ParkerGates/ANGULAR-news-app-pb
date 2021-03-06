import { Injectable } from '@angular/core';
import { AllLikesItem } from 'src/app/interfaces/all-likes-item';
import { ArticleContent } from 'src/app/interfaces/article-content';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey: string = "75e20b21ea8f499190960a2dfbc5f410";
  categories: string[] = ['business','entertainment','general','health','science','sports','technology'];
  sideNavShouldOpen = null;

  constructor() { }

  topHeadlinesEndpoint(category: any) {
    let link = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${this.apiKey}`;
    return link;
  }

  everythingEndpoint(query: string, category: any) {
    if (category === "general") {
      let link = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${this.apiKey}`;
      return link;
    }
    else if (this.categories.includes(category)) {
      let link = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&q=${query}&apiKey=${this.apiKey}`;
      return link;
    }
    else {
      let link = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${this.apiKey}`;
      return link;
    }
  }

  
  dumby = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Fawn Fire north of Redding, California scorches more than 7,000 acres, sends residents fleeing - CBS News",
            "description": "A 30-year-old woman has been arrested on suspicion of starting the blaze, which as of Saturday was only 10% contained.",
            "url": "https://www.cbsnews.com/news/fawn-fire-redding-california-evacuations/",
            "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2021/09/25/59dd5770-1d09-4d3c-8692-beb5a73ee5da/thumbnail/1200x630/444047044f804cbbf95c9339213b07b0/ap21267065737995.jpg",
            "publishedAt": "2021-09-25T16:28:52Z",
            "content": "The huge Fawn Fire north of Redding, California continued to spread on Saturday. It has scorched more than 7,000 acres, according to Cal Fire, and forced hundreds of evacuations.\r\nA 30-year-old woman??? [+1608 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jeanine Santucci, USA TODAY",
            "title": "Masks help keep students safe from COVID, studies say; vaccine mandate for NYC teachers temporarily blocked. Latest COVID-19 updates - USA TODAY",
            "description": "NYC schools temporarily blocked from enforcing teacher vaccine mandate. COVID outbreaks more common when schools didn't mandate masks, studies say.",
            "url": "https://www.usatoday.com/story/news/health/2021/09/25/masks-help-prevent-students-catching-covid-19-live-updates/5848277001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/09/20/USAT/f9557c8d-5350-4b69-8e49-0a5ce95a6c0d-USATSI_16770148.jpg?auto=webp&crop=5886,3311,x0,y358&format=pjpg&width=1200",
            "publishedAt": "2021-09-25T16:18:45Z",
            "content": "CDC Director Rochelle Walensky has rejected a recommendation of a CDC advisory panel and instead expanded the list of people eligible for a COVID-19 booster shot to include those who are at greater r??? [+7161 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Melissa Roberto",
            "title": "TOXIC: Britney Spears' former security staffer claims star's bedroom was bugged - Fox News",
            "description": "A former member of Britney Spears' longtime security team claims the pop star's bedroom was bugged with an audio recording device that monitored her personal conversations at home.",
            "url": "https://www.foxnews.com/entertainment/britney-spears-former-security-staffer-claims-bedroom-bugged-audio-recording-device",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/spears-omg-.jpg",
            "publishedAt": "2021-09-25T15:55:06Z",
            "content": "A former member of Britney Spears' longtime security team claims the pop star's bedroom was bugged with an audio recording device that monitored her personal conversations at home.\r\nThe \"New York Tim??? [+5855 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Brooke Pryor",
            "title": "Pittsburgh Steelers' T.J. Watt downgraded to out because of groin injury - ESPN",
            "description": "T.J. Watt had expressed hope that he could \"leave the door open\" to play despite a groin injury, but the Steelers have ruled the linebacker out for Sunday's game against the Bengals.",
            "url": "https://www.espn.com/nfl/story/_/id/32275976/pittsburgh-steelers-tj-watt-downgraded-due-groin-injury",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0107%2Fr799059_1296x729_16%2D9.jpg",
            "publishedAt": "2021-09-25T15:33:26Z",
            "content": "PITTSBURGH -- Pittsburgh Steelers outside linebacker T.J. Watt has been downgraded to out for Sunday's game against the Cincinnati Bengals, the team announced Saturday.\r\nWatt injured his groin in the??? [+1520 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Corinne Heller",
            "title": "Pregnant Kylie Jenner Notes She's \"Really Popped\" as She Shares New Baby Bump Photo - E! NEWS",
            "description": "Kylie Jenner, who is pregnant with her and Travis Scott's second child, shared a new baby bump photo and noted that she's \"really popped.\" See her new pic.",
            "url": "https://www.eonline.com/news/1303848/pregnant-kylie-jenner-notes-shes-really-popped-as-she-shares-new-baby-bump-photo",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2021825/rs_386x386-210925075902-600-kylie-jenner-instagram-cjh-2-092521.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2021-09-25T15:05:00Z",
            "content": "Kylie Jenner is bumping along!\r\nOn Friday night, Sept. 24, the 24-year-old Keeping Up With the Kardashians??star, who is pregnant with her and Travis Scott's second child, showcased a new baby bump se??? [+727 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Maggie Fox, CNN",
            "title": "5 things to know about coronavirus booster shots - CNN",
            "description": "Booster shots are here. Here's what you need to know about them.",
            "url": "https://www.cnn.com/2021/09/25/health/covid-boosters-5-things/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210924201734-covid-booster-vaccine-0824-super-tease.jpg",
            "publishedAt": "2021-09-25T14:51:00Z",
            "content": "(CNN)Booster shots are here, after much hoopla from the White House and a great deal of discussion and consideration from the teams of doctors and other experts who advise the US Food and Drug Admini??? [+6735 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "https://www.engadget.com/about/editors/jon-fingas",
            "title": "Galaxy S22 Ultra leak suggests Samsung will include the Note's S-Pen slot - Engadget",
            "description": "Samsung Galaxy S22 leaks suggest the Ultra model might include a Note-like design and the pen slot to match..",
            "url": "https://www.engadget.com/samsung-galaxy-s22-plus-ultra-design-leaks-144617511.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/6394e300-1e0e-11ec-835f-4c8c8ce6da28",
            "publishedAt": "2021-09-25T14:48:45Z",
            "content": "Don't be dismayed that Samsung passed on the Galaxy Note in 2021... you might get your stylus-equipped phone before too long. Frequent tipster OnLeaks has shared renders with Zouton, 91Mobiles and Di??? [+1266 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Gaydos",
            "title": "Tiger Woods' text to US Ryder Cup team inspired big first day, players say - Fox News",
            "description": "The U.S. Ryder Cup team built the biggest opening-day lead over Europe since 1975 on the first day of the tournament, finishing leading 6-2.",
            "url": "https://www.foxnews.com/sports/tiger-woods-text-us-ryder-cup-team",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/04f23fd6-Tiger-Woods.jpg",
            "publishedAt": "2021-09-25T14:47:24Z",
            "content": "The U.S. Ryder Cup team built the biggest opening day lead over Europe since 1975 on the first day of the tournament, finishing leading 6-2.\r\nWhile Tiger Woods did not make the trip to Whistling Stra??? [+2186 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Shang-Chi Set Up A Better MCU Thanos Replacement Than Kang - Screen Rant",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiTWh0dHBzOi8vc2NyZWVucmFudC5jb20vc2hhbmctY2hpLXhpYWxpbmctdmlsbGFpbi1tY3UtdGhhbm9zLWJlc3QtcmVwbGFjZW1lbnQv0gFRaHR0cHM6Ly9zY3JlZW5yYW50LmNvbS9zaGFuZy1jaGkteGlhbGluZy12aWxsYWluLW1jdS10aGFub3MtYmVzdC1yZXBsYWNlbWVudC9hbXAv?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-09-25T14:19:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Megan Specia, Anna Joyce",
            "title": "UK's Migrant Boat Dispute Has Eyes Fixed on the Channel - The New York Times",
            "description": "The southeastern coast of England is increasingly the focal point of Britain???s migration debate as the government advocates more extreme measures to halt asylum seekers arriving by boat.",
            "url": "https://www.nytimes.com/2021/09/25/world/europe/uk-migrants-london-england.html",
            "urlToImage": "https://static01.nyt.com/images/2021/09/20/world/xxuk-migrants01/xxuk-migrants01-facebookJumbo.jpg",
            "publishedAt": "2021-09-25T14:17:07Z",
            "content": "The Home Office declined to comment on the exercises, stating they were operationally sensitive.\r\nBut experts say the guidance may prove to be little more than political theater. Pushbacks can put li??? [+855 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Houston Keene",
            "title": "Cruz blames Biden for Haitian migrant crisis, cites 'canceled' deportation flights - Fox News",
            "description": "Cruz was the Friday keynote speaker at the Mackinac Republican Leadership Conference in Michigan, where the senator spoke on the raging illegal immigration crisis at the southern border.",
            "url": "https://www.foxnews.com/politics/cruz-biden-canceling-flights-deporting-illegal-migrants",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/06/Biden-Cruz.jpg",
            "publishedAt": "2021-09-25T14:07:32Z",
            "content": "Senator Ted Cruz\r\n, R-Texas, torched President Biden\r\n for canceling flights scheduled to deport Haitian illegal migrants only to put them \"under the bridge\" in Del Rio, Texas, instead.\r\nCruz was the??? [+2264 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Press Herald"
            },
            "author": null,
            "title": "Maine CDC reports 603 COVID-19 cases, 4 deaths - Portland Press Herald - Press Herald",
            "description": "The seven-day average ticked up to 468.6 cases, though it's slightly less this Saturday than it was a week ago.",
            "url": "https://www.pressherald.com/2021/09/25/maine-cdc-reports-603-covid-19-cases-4-deaths/",
            "urlToImage": "https://multifiles.pressherald.com/uploads/sites/10/2021/09/new-covid-cases-0924-1024x620.jpeg",
            "publishedAt": "2021-09-25T14:03:30Z",
            "content": "The Maine Center for Disease Control and Prevention on Saturday reported 603 cases of COVID-19 and four additional deaths, lending to a steady increase in case averages as, nationally, the U.S. CDC e??? [+3644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": null,
            "title": "iPhone 13 Pro Max durability tested in new video - 9to5Mac",
            "description": "If you wonder how does the iPhone 13 Pro Max and 13 Pro handle dropping from different heights, here they are.",
            "url": "https://9to5mac.com/2021/09/25/iphone-13-pro-max-durability-tested-in-new-video/",
            "urlToImage": "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/09/iphone-13-pro-max-drop-test-9to5mac-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2021-09-25T14:01:00Z",
            "content": "With every new iPhone, we always see similar testings. If in the early days, people were obsessed with bending smartphones, the drop test is one of the most important for customers. If you wonder how??? [+1914 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jackie Wattles, CNN Business",
            "title": "An alarm went off on SpaceX's all-tourist space flight. The problem was the toilet - CNN",
            "description": "As Jared Isaacman and his three fellow crewmates were freeflying through Earth's orbit, shielded from the unforgiving vacuum of space by nothing but a 13-foot-wide carbon-fiber capsule, an alarm started blaring.",
            "url": "https://www.cnn.com/2021/09/25/tech/spacex-toilet-waste-management-system-scn/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210924162407-spacex-falcon-9-inspiration4-crew-0915-super-tease.jpg",
            "publishedAt": "2021-09-25T14:01:00Z",
            "content": "New York (CNN Business)As Jared Isaacman and his three fellow crewmates were freeflying through Earth's orbit, shielded from the unforgiving vacuum of space by nothing but a 13-foot-wide carbon-fiber??? [+7751 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Britain expected to ease visa rules as truck driver shortage bites - Reuters UK",
            "description": "Britain is expected to announce plans to issue temporary work visas to truck drivers to ease an acute labour shortage that has led to fuel rationing at hundreds of gas stations and long queues to fill up - with pumps running dry in some places.",
            "url": "https://www.reuters.com/world/uk/britain-expected-ease-visa-rules-truck-driver-shortage-bites-2021-09-25/",
            "urlToImage": "https://www.reuters.com/resizer/8jSnHP4XZyzcugCRjHbIBwTbFiA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CAYUFIZFEVNDXJOQPOGH5JJQIE.jpg",
            "publishedAt": "2021-09-25T13:35:00Z",
            "content": "LONDON, Sept 25 (Reuters) - Britain is expected to announce plans to issue temporary work visas to truck drivers to ease an acute labour shortage that has led to fuel rationing at hundreds of gas sta??? [+3602 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By Al Goodman, CNN",
            "title": "Spanish volcano eruption intensifies and suspends flights - CNN",
            "description": "Eruptions on the Cumbre Vieja volcano on the Canary Island of La Palma intensifies, as flights are suspended and more evacuations are made while hot lava spews from the volcano and toxic ash blankets the surrounding area.",
            "url": "https://www.cnn.com/travel/article/la-palma-volcano-eruption-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210925073052-01-la-palma-volcano-0925-super-tease.jpg",
            "publishedAt": "2021-09-25T12:50:55Z",
            "content": "(CNN) Eruptions from the Cumbre Vieja volcano on the Canary Island of La Palma have intensified, as flights are suspended and officials ordered additional evacuations -- bringing the total number of ??? [+2475 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MMA Mania"
            },
            "author": "Jesse Holland",
            "title": "Nick Diaz vs Robbie Lawler full fight video preview for UFC 266 - MMA Mania",
            "description": "Nick Diaz vs. Robbie Lawler full fight video preview for UFC 266 middleweight rematch TONIGHT (Sat., Sept. 25, 2021) inside T-Mobile Arena in Las Vegas, Nevada.",
            "url": "https://www.mmamania.com/2021/9/25/22692513/nick-diaz-vs-robbie-lawler-full-fight-video-preview-ufc-266-mma",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/AGY6hHRvO_3g_S4ec35M5scxQbc=/0x0:4355x2450/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/69907258/462598690.jpg.0.jpg",
            "publishedAt": "2021-09-25T12:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Matthew Fox",
            "title": "A crypto-trading hamster is outperforming the S&P 500 - Markets Insider",
            "description": "The top cyptocurrencies currently held by the hamster include Tron, Ripple's XRP, cardano's ada, and ether.",
            "url": "https://markets.businessinsider.com/news/currencies/hamster-trading-cryptocurrencies-rigged-cage-goxx-bitcoin-price-ether-doge-2021-9",
            "urlToImage": "https://images2.markets.businessinsider.com/614e09b2b414c10018625015?format=jpeg",
            "publishedAt": "2021-09-25T12:15:29Z",
            "content": "The \"Goxx Box.\"\r\nTwitter: @Mrgoxx\r\n<ul><li>A hamster named Mr. Goxx has been trading cryptocurrencies in a rigged box since June.</li><li>The hamster determines which crypto to buy or sell by running??? [+2477 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "Maren Estrada",
            "title": "10 amazing deals you don???t want to miss on Saturday - BGR",
            "description": "There are so many great Amazon deals out there this weekend, but we're only going to show you the best of the best. Don't miss out.",
            "url": "https://bgr.com/deals/10-amazing-deals-you-dont-want-to-miss-on-saturday-oct-25/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2020/08/Amazon-Deals-2.jpg?quality=70&strip=all",
            "publishedAt": "2021-09-25T12:10:00Z",
            "content": "If you purchase an independently reviewed product or service through a link on\r\nour website, we may receive an affiliate commission.\r\nHead over to this special Amazon deals page right now and you???ll ??? [+2348 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Avery Hartmans",
            "title": "Housing market softening due to soaring home prices: NAR report - Business Insider",
            "description": "The median price for an existing home jumped nearly 15% from August 2020 to August 2021, according to the National Association of Realtors.",
            "url": "https://www.businessinsider.com/housing-market-softening-home-prices-unaffordable-realtors-association-report-2021-9",
            "urlToImage": "https://i.insider.com/614cb1bc4c42bc00190f8fd3?width=1200&format=jpeg",
            "publishedAt": "2021-09-25T11:44:40Z",
            "content": "The housing market cooled off slightly last month, but that's not exactly good news for homebuyers. It's partly because prices remain too high for many would-be homebuyers.??\r\nExisting home sales fell??? [+2552 chars]"
        }]
    }




    allLikes: AllLikesItem[] = [
        { count: 1, article: {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jackie Wattles, CNN Business",
            "title": "An alarm went off on SpaceX's all-tourist space flight. The problem was the toilet - CNN",
            "description": "As Jared Isaacman and his three fellow crewmates were freeflying through Earth's orbit, shielded from the unforgiving vacuum of space by nothing but a 13-foot-wide carbon-fiber capsule, an alarm started blaring.",
            "url": "https://www.cnn.com/2021/09/25/tech/spacex-toilet-waste-management-system-scn/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210924162407-spacex-falcon-9-inspiration4-crew-0915-super-tease.jpg",
            "publishedAt": "2021-09-25T14:01:00Z",
            "content": "New York (CNN Business)As Jared Isaacman and his three fellow crewmates were freeflying through Earth's orbit, shielded from the unforgiving vacuum of space by nothing but a 13-foot-wide carbon-fiber??? [+7751 chars]"
        }},{ count: 2, article: {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By Al Goodman, CNN",
            "title": "Spanish volcano eruption intensifies and suspends flights - CNN",
            "description": "Eruptions on the Cumbre Vieja volcano on the Canary Island of La Palma intensifies, as flights are suspended and more evacuations are made while hot lava spews from the volcano and toxic ash blankets the surrounding area.",
            "url": "https://www.cnn.com/travel/article/la-palma-volcano-eruption-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210925073052-01-la-palma-volcano-0925-super-tease.jpg",
            "publishedAt": "2021-09-25T12:50:55Z",
            "content": "(CNN) Eruptions from the Cumbre Vieja volcano on the Canary Island of La Palma have intensified, as flights are suspended and officials ordered additional evacuations -- bringing the total number of ??? [+2475 chars]"
        }},{ count: 3, article: {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Avery Hartmans",
            "title": "Housing market softening due to soaring home prices: NAR report - Business Insider",
            "description": "The median price for an existing home jumped nearly 15% from August 2020 to August 2021, according to the National Association of Realtors.",
            "url": "https://www.businessinsider.com/housing-market-softening-home-prices-unaffordable-realtors-association-report-2021-9",
            "urlToImage": "https://i.insider.com/614cb1bc4c42bc00190f8fd3?width=1200&format=jpeg",
            "publishedAt": "2021-09-25T11:44:40Z",
            "content": "The housing market cooled off slightly last month, but that's not exactly good news for homebuyers. It's partly because prices remain too high for many would-be homebuyers.??\r\nExisting home sales fell??? [+2552 chars]"
        }}

    ]

}
