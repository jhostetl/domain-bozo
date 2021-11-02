
let word_output = document.getElementById('word_output');
let output_description = document.getElementById('output_description');
let saved_words = document.getElementById('saved_words');
let saved_array = [];


// formats the result of rhyming words
function rhyme_function(){

	const search_word = document.getElementById('word_input').value;
	const search_string = "https://api.datamuse.com/words?rel_rhy=" + search_word;
	word_output.textContent = "";
	fetch(search_string).then(response => response.json())
	    .then((result) => {
	    	if (result.length > 0){
	    		output_description.textContent = "Words that rhyme with " + search_word;
	    		const grouped_results = groupBy(result, "numSyllables");
				for (const property in grouped_results) {
					const newH5Element = document.createElement('h5');
					newH5Element.textContent = property + " Syllable:";
					word_output.append(newH5Element);	

					for (const a in grouped_results[property]) {
						const newListElement = document.createElement('li');
				    	newListElement.textContent = grouped_results[property][a]["word"];	
				    	
			    		const saveButtonElement = document.createElement('button');
					    saveButtonElement.textContent = 'Save';
					    saveButtonElement.classList.add("btn");
					    saveButtonElement.classList.add("btn-sm");
					    saveButtonElement.classList.add("btn-outline-secondary");
					    saveButtonElement.classList.add("btn-save");
					    newListElement.append(saveButtonElement);

					    word_output.append(newListElement);	
					}
				}
	    	}else{
	    		output_description.textContent = "No words rhyme with " + search_word;
	    	}
	      
	    }); 
}

// when somebody clicks enter from input 
document.querySelector('#word_input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    	output_description.textContent = "...loading";
        rhyme_function();      
    }
});

// sends fetch for rhyming words
const show_rhymes = document.getElementById('show_rhymes', event);
show_rhymes.addEventListener('click', ()=> {
	output_description.textContent = "...loading";
	rhyme_function();
});

// shows synonyms
const show_synonyms = document.getElementById('show_synonyms', event);
show_synonyms.addEventListener('click', ()=> {
	output_description.textContent = "...loading";
	const search_word = document.getElementById('word_input').value;
	const search_string = "https://api.datamuse.com/words?ml=" + search_word;
	word_output.textContent = "";
	fetch(search_string).then(response => response.json())
	    .then((result) => {
	    	if (result.length > 0){
	    		output_description.textContent = "Words with a similar meaning to " + search_word;
	    		for (let i = 0; i < result.length; i++){
					const newListElement = document.createElement('li');
	    			newListElement.textContent = result[i]["word"];	
	    			const saveButtonElement = document.createElement('button');
				    saveButtonElement.textContent = 'Save';
				    saveButtonElement.classList.add("btn");
				    saveButtonElement.classList.add("btn-sm");
				    saveButtonElement.classList.add("btn-outline-secondary");
				    saveButtonElement.classList.add("btn-save");
				    newListElement.append(saveButtonElement);
	    			word_output.append(newListElement);			    		 			
	    		}
	    	}else{
	    		output_description.textContent = "No words with a similar meaning to " + search_word;
	    	}
	      
	    }); 
});


// saves word to list
document.addEventListener('click',function(e){
	if(e.target && e.target.classList.contains('btn-save')){
		saved_array.push(e.target.parentElement.firstChild.textContent);
		saved_words.textContent = saved_array.join(', ');
	 }
});



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


