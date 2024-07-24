const fs = require('fs')
function commonWords(filename){
    const text = fs.readFileSync(filename, 'utf-8')
    const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
    const wordCount = {};
    words.forEach(word => {
        if(word){
            if(!wordCount[word]){
                wordCount[word] = 0;
            }
            wordCount[word]++
        }
    })
    const sortedWords = Object.entries(wordCount).sort(([,a], [,b])=>b-a).slice(0,10)
    sortedWords.forEach(([word, count])=>{
        console.log(`${word}: ${count}`)
    })
}

commonWords('example.txt')