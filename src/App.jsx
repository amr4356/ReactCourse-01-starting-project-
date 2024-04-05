import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';

const reactDescriotions=["Fundamental",'Crucial','Core'];
function genRandoInt(max){
  return Math.floor(Math.random() * (max+1));
}


function Header(){
  const description= reactDescriotions[genRandoInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CorConcept({title,description,image}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CorConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CorConcept 
              {...CORE_CONCEPTS[1]}
            />
            <CorConcept 
              {...CORE_CONCEPTS[2]}
            />
            <CorConcept 
              {...CORE_CONCEPTS[3]}
            />
            
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
