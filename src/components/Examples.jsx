
import { useState } from "react";
import {EXAMPLES} from "../data.js"
import TabButton from "./TabButton.jsx"
import Tabs from "./Tabs.jsx"
import Section from "./Section.jsx"


export default function Examples(){
    const [selectedTab, setTab] = useState(null)
    function handleSelect(component) {
      setTab(component);
    }

    let TabContent = <p>Please select topic</p>;

    if(selectedTab){
      TabContent = <>
      <div id="tab-content">
            <h2>{EXAMPLES[selectedTab].title}</h2>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>
          </div>
      </>;
    }

    return (
        <Section id="examples" title="Examples"> 
        <Tabs
          buttonsContainer="menu"
          buttons={(
          <>
             <TabButton isSelected={selectedTab === 'components'} onClick={() => handleSelect('components')}>Component</TabButton>
              <TabButton isSelected={selectedTab === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTab === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTab === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
          </>)}
        >
          {TabContent}
        </Tabs>
        
      </Section>
    )
}