import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

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

function CorConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
              title="Components" 
              description="The core UI building block."
              image={componentsImg}
            />
            <CorConcept/>
            <CorConcept/>
            <CorConcept/>
          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
