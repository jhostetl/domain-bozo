import {useState, useRef} from 'react';

function Rhymes () {
    const inputEl = useRef(null);
    const [rhymeWords, setWordList] = useState([]);
    const [savedWords, setSavedWords] = useState([]);
    const [description, setDescription] = useState([]);

    function saveWord(idx) {

        if (savedWords.includes(rhymeWords[idx])){
           const newSavedList = savedWords; 
           setSavedWords(newSavedList);
        }else{
           const newSavedList = savedWords.concat(rhymeWords[idx]); 
           setSavedWords(newSavedList);            
        }
        
    }

    const elements = [];
    for(let i = 0; i<rhymeWords.length; i++) {
        const item = rhymeWords[i];
        const elem = <RhymeItem onSave={() => saveWord(i)} key={i} description={item} />;      
        elements.push(elem);
    }

    function addRhyme() {
       
        setDescription("loading...");
        const search_word = inputEl.current.value;
        const search_string = "https://api.datamuse.com/words?rel_rhy=" + search_word;
        const word_list = [];

        fetch(search_string).then(response => response.json())
            .then((result) => {
                if (result.length > 0){              
                    const grouped_results = groupBy(result, "numSyllables");
                    for (const property in grouped_results) {                       
                        word_list.push(property + " Syllable Words: ");    
                        for (const a in grouped_results[property]) {
                            word_list.push(grouped_results[property][a]["word"]);
                        }                
                    }
                    setWordList(word_list);
                    setDescription("Words that rhyme with " + search_word);
                }else{
                    setWordList(word_list);
                    setDescription("No words rhyme with " + search_word);
                }              
            }); 
      
        inputEl.current.value = '';
        inputEl.current.focus();
    }

    function addSynonym() {
        setDescription("loading...");
        const search_word = inputEl.current.value;
        const search_string = "https://api.datamuse.com/words?ml=" + search_word;
        const word_list = [];

        fetch(search_string).then(response => response.json())
            .then((result) => {
                if (result.length > 0){   
                    for (let i = 0; i < result.length; i++){
                        word_list.push(result[i]["word"]);                               
                    }                           
                    setWordList(word_list);
                    setDescription("Words with a similar meaning to " + search_word);
                }else{
                    setWordList(word_list);
                    setDescription("No words with a similar meaning to " + search_word);                   
                }              
            }); 
      
        inputEl.current.value = '';
        inputEl.current.focus();
    }

    function onKeydown(event) {
        if(event.key === 'Enter') {
            addRhyme();
        }
    }

    function RhymeItem(props) {
        if (props.description.includes(" Syllable Words: ")){
            return <h6>{props.description}</h6>
        }else{
            return <li>{props.description} <button className = "btn btn-save btn-outline-secondary" onClick={props.onSave}>Save</button></li>
        }
    }

    // or:
    // const elements = Rhymes.map((item) => <RhymeItem description={item} /> );
    return <div>
    <div>{savedWords.join(', ')}</div>
    <div className="input-group col">
        <input className = "form-control" onKeyDown={onKeydown} ref={inputEl} type="text"></input>
        <button onClick={addRhyme} className = "btn btn-primary">Show Rhyming Words</button>
        <button onClick={addSynonym} className = "btn btn-light btn-outline-dark">Show Synonyms</button>
    </div>    
    <h5 className = "output_description">{description}</h5>
    <ul>{elements}</ul>
    </div>;
}

export default Rhymes;



/**
 * Returns a list of objects grouped by some property. For example:
 * groupBy([{name: 'Steve', team:'blue'}, {name: 'Jack', team: 'red'}, {name: 'Carol', team: 'blue'}], 'team')
 * 
 * returns:
 * { 'blue': [{name: 'Steve', team: 'blue'}, {name: 'Carol', team: 'blue'}],
 *    'red': [{name: 'Jack', team: 'red'}]
 * }
 * 
 * @param {any[]} objects: An array of objects
 * @param {string|Function} property: A property to group objects by
 * @returns  An object where the keys representing group names and the values are the items in objects that are in that group
 */
function groupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if(typeof property !== 'function') {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for(const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if(!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for(const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}


