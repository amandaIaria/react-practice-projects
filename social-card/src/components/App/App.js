import React from 'react';
import ReactDOM from 'react-dom';
import SocialWrapper from '../social/social-wrapper/social-wrapper';

import '../../assets/style/style.css';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          "avatar": "https://robohash.org/clean.png?size=300x300",
          "bio": "Once more. Say you are in the country; in some high land of lakes. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream. There is magic in it. Let the most absent-minded of men be plunged in his deepest reveries—stand that man on his legs, set his feet a-going, and he will infallibly lead you to water, if water there be in all that region. Should you ever be athirst in the great American desert, try this experiment, if your caravan happen to be supplied with a metaphysical professor. Yes, as every one knows, meditation and water are wedded for ever.",
          "email": "francisca@outlook.com",
          "gender": "female",
          "last_login": {
            "date_time": "Sat Dec  6 08:40:56 UTC 1969",
            "ip4": "173.178.237.45"
          },
          "name": {
            "first_name": "Cecile",
            "last_name": "Blanda",
            "nickname": "richy.frost"
          },
          "social": {
            "facebook": "14985",
            "instagram": "06569",
            "twitter": "91313"
          }
        },
        {
          "avatar": "https://robohash.org/company.png?size=300x300",
          "bio": "There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.",
          "email": "farm9@hotmail.com",
          "gender": "male",
          "last_login": {
            "date_time": "Sat Nov  8 14:59:31 UTC 1969",
            "ip4": "189.187.59.229"
          },
          "name": {
            "first_name": "Marge",
            "last_name": "Cummings",
            "nickname": "itchy-hill"
          },
          "social": {
            "facebook": "97064",
            "instagram": "51008",
            "twitter": "96156"
          }
        },
        {
          "avatar": "https://robohash.org/optio.png?size=300x300",
          "bio": "But here is an artist. He desires to paint you the dreamiest, shadiest, quietest, most enchanting bit of romantic landscape in all the valley of the Saco. What is the chief element he employs? There stand his trees, each with a hollow trunk, as if a hermit and a crucifix were within; and here sleeps his meadow, and there sleep his cattle; and up from yonder cottage goes a sleepy smoke. Deep into distant woodlands winds a mazy way, reaching to overlapping spurs of mountains bathed in their hill-side blue. But though the picture lies thus tranced, and though this pine-tree shakes down its sighs like leaves upon this shepherd’s head, yet all were vain, unless the shepherd’s eye were fixed upon the magic stream before him. Go visit the Prairies in June, when for scores on scores of miles you wade knee-deep among Tiger-lilies—what is the one charm wanting?—Water—there is not a drop of water there! Were Niagara but a cataract of sand, would you travel your thousand miles to see it? Why did the poor poet of Tennessee, upon suddenly receiving two handfuls of silver, deliberate whether to buy him a coat, which he sadly needed, or invest his money in a pedestrian trip to Rockaway Beach? Why is almost every robust healthy boy with a robust healthy soul in him, at some time or other crazy to go to sea? Why upon your first voyage as a passenger, did you yourself feel such a mystical vibration, when first told that you and your ship were now out of sight of land? Why did the old Persians hold the sea holy? Why did the Greeks give it a separate deity, and own brother of Jove? Surely all this is not without meaning. And still deeper the meaning of that story of Narcissus, who because he could not grasp the tormenting, mild image he saw in the fountain, plunged into it and was drowned. But that same image, we ourselves see in all rivers and oceans. It is the image of the ungraspable phantom of life; and this is the key to it all.",
          "email": "id37@yahoo.com",
          "gender": "male",
          "last_login": {
            "date_time": "Sun Nov  9 21:37:30 UTC 1969",
            "ip4": "175.91.117.28"
          },
          "name": {
            "first_name": "Vada",
            "last_name": "Stokes",
            "nickname": "dawn-haze-57"
          },
          "social": {
            "facebook": "32151",
            "instagram": "69679",
            "twitter": "62224"
          }
        },
        {
          "avatar": "https://robohash.org/invent.png?size=300x300",
          "bio": "No, when I go to sea, I go as a simple sailor, right before the mast, plumb down into the forecastle, aloft there to the royal mast-head. True, they rather order me about some, and make me jump from spar to spar, like a grasshopper in a May meadow. And at first, this sort of thing is unpleasant enough. It touches one’s sense of honor, particularly if you come of an old established family in the land, the Van Rensselaers, or Randolphs, or Hardicanutes. And more than all, if just previous to putting your hand into the tar-pot, you have been lording it as a country schoolmaster, making the tallest boys stand in awe of you. The transition is a keen one, I assure you, from a schoolmaster to a sailor, and requires a strong decoction of Seneca and the Stoics to enable you to grin and bear it. But even this wears off in time.",
          "email": "jared@gmail.com",
          "gender": "female",
          "last_login": {
            "date_time": "Fri Dec 26 04:07:07 UTC 1969",
            "ip4": "197.13.179.96"
          },
          "name": {
            "first_name": "Deanna",
            "last_name": "Dicki",
            "nickname": "frosty-grass"
          },
          "social": {
            "facebook": "19575",
            "instagram": "25303",
            "twitter": "58748"
          }
        },
        {
          "avatar": "https://robohash.org/top.png?size=300x300",
          "bio": "But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange! Nothing will content them but the extremest limit of the land; loitering under the shady lee of yonder warehouses will not suffice. No. They must get just as nigh the water as they possibly can without falling in. And there they stand—miles of them—leagues. Inlanders all, they come from lanes and alleys, streets and avenues—north, east, south, and west. Yet here they all unite. Tell me, does the magnetic virtue of the needles of the compasses of all those ships attract them thither?",
          "email": "ignatius@outlook.com",
          "gender": "male",
          "last_login": {
            "date_time": "Sun Nov  9 15:00:55 UTC 1969",
            "ip4": "161.94.228.170"
          },
          "name": {
            "first_name": "Rosina",
            "last_name": "Muller",
            "nickname": "wispy.snowflake.9"
          },
          "social": {
            "facebook": "51556",
            "instagram": "31792",
            "twitter": "34818"
          }
        },
        {
          "avatar": "https://robohash.org/garden.png?size=300x300",
          "bio": "Now, when I say that I am in the habit of going to sea whenever I begin to grow hazy about the eyes, and begin to be over conscious of my lungs, I do not mean to have it inferred that I ever go to sea as a passenger. For to go as a passenger you must needs have a purse, and a purse is but a rag unless you have something in it. Besides, passengers get sea-sick—grow quarrelsome—don’t sleep of nights—do not enjoy themselves much, as a general thing;—no, I never go as a passenger; nor, though I am something of a salt, do I ever go to sea as a Commodore, or a Captain, or a Cook. I abandon the glory and distinction of such offices to those who like them. For my part, I abominate all honorable respectable toils, trials, and tribulations of every kind whatsoever. It is quite as much as I can do to take care of myself, without taking care of ships, barques, brigs, schooners, and what not. And as for going as cook,—though I confess there is considerable glory in that, a cook being a sort of officer on ship-board—yet, somehow, I never fancied broiling fowls;—though once broiled, judiciously buttered, and judgmatically salted and peppered, there is no one who will speak more respectfully, not to say reverentially, of a broiled fowl than I will. It is out of the idolatrous dotings of the old Egyptians upon broiled ibis and roasted river horse, that you see the mummies of those creatures in their huge bake-houses the pyramids.",
          "email": "beatae64@hotmail.com",
          "gender": "female",
          "last_login": {
            "date_time": "Tue Dec 16 19:00:21 UTC 1969",
            "ip4": "176.157.102.241"
          },
          "name": {
            "first_name": "Geoffrey",
            "last_name": "Erdman",
            "nickname": "rapid-silence-70"
          },
          "social": {
            "facebook": "08775",
            "instagram": "97158",
            "twitter": "30986"
          }
        },
        {
          "avatar": "https://robohash.org/et.png?size=300x300",
          "bio": "What of it, if some old hunks of a sea-captain orders me to get a broom and sweep down the decks? What does that indignity amount to, weighed, I mean, in the scales of the New Testament? Do you think the archangel Gabriel thinks anything the less of me, because I promptly and respectfully obey that old hunks in that particular instance? Who ain’t a slave? Tell me that. Well, then, however the old sea-captains may order me about—however they may thump and punch me about, I have the satisfaction of knowing that it is all right; that everybody else is one way or other served in much the same way—either in a physical or metaphysical point of view, that is; and so the universal thump is passed round, and all hands should rub each other’s shoulder-blades, and be content.",
          "email": "mackenzie@yahoo.com",
          "gender": "female",
          "last_login": {
            "date_time": "Fri Nov  7 04:19:58 UTC 1969",
            "ip4": "209.23.165.204"
          },
          "name": {
            "first_name": "Jameson",
            "last_name": "Ferry",
            "nickname": "crisp-sunset"
          },
          "social": {
            "facebook": "94638",
            "instagram": "78581",
            "twitter": "43998"
          }
        },
        {
          "avatar": "https://robohash.org/molestias.png?size=300x300",
          "bio": "Again, I always go to sea as a sailor, because they make a point of paying me for my trouble, whereas they never pay passengers a single penny that I ever heard of. On the contrary, passengers themselves must pay. And there is all the difference in the world between paying and being paid. The act of paying is perhaps the most uncomfortable infliction that the two orchard thieves entailed upon us. But _being paid_,—what will compare with it? The urbane activity with which a man receives money is really marvellous, considering that we so earnestly believe money to be the root of all earthly ills, and that on no account can a monied man enter heaven. Ah! how cheerfully we consign ourselves to perdition!",
          "email": "enemy@gmail.com",
          "gender": "male",
          "last_login": {
            "date_time": "Mon Nov 17 06:11:11 UTC 1969",
            "ip4": "181.91.229.14"
          },
          "name": {
            "first_name": "Carlos",
            "last_name": "Kerluke",
            "nickname": "crimson.sea"
          },
          "social": {
            "facebook": "13819",
            "instagram": "74732",
            "twitter": "48332"
          }
        },
        {
          "avatar": "https://robohash.org/fresh.png?size=300x300",
          "bio": "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.",
          "email": "town_lukas@gmail.com",
          "gender": "female",
          "last_login": {
            "date_time": "Thu Nov 27 01:25:26 UTC 1969",
            "ip4": "177.235.205.111"
          },
          "name": {
            "first_name": "Macey",
            "last_name": "Koch",
            "nickname": "spacy-fire"
          },
          "social": {
            "facebook": "07796",
            "instagram": "76900",
            "twitter": "07928"
          }
        },
        {
          "avatar": "https://robohash.org/support.png?size=300x300",
          "bio": "By reason of these things, then, the whaling voyage was welcome; the great flood-gates of the wonder-world swung open, and in the wild conceits that swayed me to my purpose, two and two there floated into my inmost soul, endless processions of the whale, and, mid most of them all, one grand hooded phantom, like a snow hill in the air.",
          "email": "it_geo@yahoo.com",
          "gender": "male",
          "last_login": {
            "date_time": "Sun Dec  7 10:56:03 UTC 1969",
            "ip4": "178.140.203.120"
          },
          "name": {
            "first_name": "Bettye",
            "last_name": "O'Connell",
            "nickname": "sad.forest.32"
          },
          "social": {
            "facebook": "75914",
            "instagram": "36890",
            "twitter": "00189"
          }
        }
      ],
      error: []
    };
  }

  // componentWillMount() { }

  render () {
    return (
      <main className="dll-grid dll-grid__row--auto full-height dll-grid--align-center">
       {this.state.people.map((personData, index) => <SocialWrapper person={personData} id={index}></SocialWrapper>)}
      </main>
    );
  }
}

export default App;
