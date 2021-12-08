
export const highlightText = (obj, matchingObjectValue, query) => {

    //const parts = text.split(new RegExp(term, 'gi'));console.log('parts==', parts)

    const partoHighlight = query.match(new RegExp(query, 'gi')).join('');console.log('parts==', partoHighlight)
    //const restOfWord = text
    return <span style={{color:'red'}}></span>
/*     return <span>{parts.map((part, i) => <span key={i} style={part.toLowerCase()=== term.toLowerCase()? 
    { fontWeight: 'bold'} : {} } > {part} </span>)}</span> */
}