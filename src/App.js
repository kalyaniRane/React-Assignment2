
import './App.css';
import Service from './Service';
import Header from './Header';

function App() {


  const servicaData=[
    {
      title:"Boys Over Flowers",
      desc:"Boys Over Flowers is an old-school teen drama, focused on a group of popular/privileged/not-so-nice boys at the prestigious Shinhwa High School. The group, known as F4, bully others to get their way—until a working class girl named Geum Jan-di arrives at the school on scholarship and stands up to the boys.",
      img:"https://images-na.ssl-images-amazon.com/images/I/71n6DEsPU2L._RI_.jpg"
    },
    {
      title:"Start-Up",
      desc:"Suzy Bae and Nam Joo-hyuk stans will want to tune into this drama, which mixes comedy with romance. The show centers around a group of young individuals who are all eager to start their own businesses. When Bae and Nam's characters, Seo Dal-mi and Nam Do-san respectively, are chosen to join Sandbox (a tech accelerator for entrepreneurs), along with Seo's sister Won In-jae, the three are pitted against one another in a contest to be the best.",
      img:"https://upload.wikimedia.org/wikipedia/en/1/12/Start-Up_2020.jpg"
    },
    {
      title:"Tale of the Nine Tailed",
      desc:"You might want to keep the lights turned on for Lee Dong-wook's new show because it's a little scary (think scenes with ghosts and a water well à la The Ring). Aside from some minor scenes that make you shudder, however, the story largely revolves around his character Lee-yeon, a mythical fox known as gumiho, and a documentary filmmaker Nam Ji-a (played by Jo Bo-ah) who were once lovers in the past.",
      img:"https://otakukart.com/wp-content/uploads/2021/04/TTNT-poster-3-1200x900.jpg"
    },
    {
      title:"Stranger",
      desc:"For those who like crime dramas and slow-boiling mysteries, this show is for you. Netflix recently released season two of the show, which focuses on a policeman's death that is ruled as a suicide—but things don't add up once Si-mok starts investigating. You'll see most of your favorite characters again, including Dong-jae and Geon. You don't need to watch season one to enjoy the second one; however, I highly recommend you binge-watch the first season to get a full taste of all the characters' personalities.",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIJ6V6kT_2khqQgP-e4vKUrfVHGvZZaFwsQ&usqp=CAU"
    },
    {
      title:"Kingdom",
      desc:"Who doesn’t love a gory thriller? The crown prince, framed for treason and desperate to save his people, sets out on a journey to ‘unveil what evil lurks in the dark’. Set during Korea’s Joseon period a few years after the Japanese invasions of Korea (1592-1598), it’s full of gore, life-threatening political conspiracy and tonnes of blood, Kingdom is a perfect watch for all period watchers.",
      img:"https://m.media-amazon.com/images/M/MV5BNTBlZmE4YzItNTY5Mi00NmIxLTlhZTAtOWIxNjFlNTMzNmI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
      title:"Sky Castle",
      desc:"This series follows the journeys of four women and their families as they try to maintain the status quo among the upper crust of South Korean society. The drama revolves around one mother's obsession with getting her daughter into an elite university by any means necessary...sound familiar? This one is a nice mix of romance, soapy drama, and comedy, so if you enjoy human-interest stories, Sky Castle is definitely the K-drama for you.",
      img:"https://financerewind.com/wp-content/uploads/2020/08/ezgif-4-9db1e5754da3-1200x900.jpg"
    }
    
  ]


  return (
    <>
    <Header/>
    <div className="container">
        
        
            {
              servicaData.map((data,label)=>(
                <Service key={label} title={data.title} subtitle={data.subtitle} img={data.img} desc={data.desc} />
              ))
            }
         
          
      </div>
    </>
  );
}

export default App;
