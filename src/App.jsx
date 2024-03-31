import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data.js"

function App() {
  const [selectedTab, setTab] = useState(null)
  function handleSelect(component) {
    setTab(component);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>  
            {CORE_CONCEPTS.map((coreConcept) => (<CoreConcept {...coreConcept} key={coreConcept.title}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton isSelected={selectedTab === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTab && (<p>Please select topic</p>)}
          {selectedTab && (<div id="tab-content">
                <h2>{EXAMPLES[selectedTab].title}</h2>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTab].code}</code>
                </pre>
              </div>
          )}          
        </section>
      </main>
    </div>
  );
}

export default App;
