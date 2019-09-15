const Sentiment = require('sentiment');
const googleTrends = require('google-trends-api');
 

const article1 = {
  'source': {
    'id': 'cnn',
    'name': 'CNN'
  },
  'author': 'Caroline Kelly, CNN',
  'title': 'Pompeo blames Iran for drone attacks on Saudi oil field - CNN',
  'description': 'Secretary of State Mike Pompeo pinned the blame on Iran for an attack at a Saudi oil field in a pair of tweets Saturday.',
  'url': 'https://www.cnn.com/2019/09/14/politics/pompeo-drone-strikes-saudi-oil/index.html',
  'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/190910134354-mike-pompeo-briefing-9-10-2019-super-tease.jpg',
  'publishedAt': '2019-09-14T21:32:00Z',
  'content': 'Washington (CNN)Secretary of State Mike Pompeo pinned the blame on Iran for an attack at a Saudi oil field in a pair of tweets Saturday. \r\nDrone strikes on crucial Saudi Arabian oil facilities have disrupted about half of the kingdom\'s oil capacity, or 5% of … [+3508 chars]'
};

const article2 = {
  'source': {
    'id': null,
    'name': 'Redandblack.com'
  },
  'author': 'Anna Glenn Grove | Football Beat Writer',
  'title': 'Georgia defense brings the pressure against Arkansas State - Red and Black',
  'description': 'Georgia’s defense executed its first shutout of the 2019 season in a 55-0 victory over Arkansas State on Saturday. It marked Georgia\'s first shutout since the first game of last',
  'url': 'https://www.redandblack.com/gameday/georgia-defense-brings-the-pressure-against-arkansas-state/article_9c7e0a1c-d733-11e9-9658-5b06ee39d22a.html',
  'urlToImage': 'https://bloximages.newyork1.vip.townnews.com/redandblack.com/content/tncms/assets/v3/editorial/7/8e/78ec9dde-d71a-11e9-bb0b-1fb39099301b/5d7d2c4ee698d.image.jpg?resize=945%2C630',
  'publishedAt': '2019-09-14T21:30:00Z',
  'content': 'Georgias defense executed its first shutout of the 2019 season in a 55-0 victory over Arkansas State on Saturday. It marked Georgia\'s first shutout since it beat Austin Peay 45-0 in the first game of last season. \r\nThe Bulldogs dominated on the defensive side… [+2638 chars]'
};

const newsBattle = (article1, article2) => {
  // sentiment
  const sentiment1 = new Sentiment();
  const result1 = sentiment1.analyze(article1.title);
  console.log('sentiment article1', result1);
  const sentiment2 = new Sentiment();
  const result2 = sentiment2.analyze(article2.title);
  console.log('sentiment article2', result2);
  // google-trending-api
  googleTrends.dailyTrends({ geo: 'US' }, function(err, results) {
    if(err) {
      console.log(err);
    } else {
      const trendingSearches = JSON.parse(results).default.trendingSearchesDays[0].trendingSearches;
      const keywords = trendingSearches.map(search => {
        return search.title.query;
      });
      console.log(keywords);
    }
  });
  // facebook shares
};

newsBattle(article1, article2);
