const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop]    
    } else if (prop !== "tracks" && value !== "") {
        records[id][prop] = value
    } else if (prop === "tracks" && value !== "") {
        if (records[id].hasOwnProperty("tracks") === false) {
            records[id][prop] = []
        }
        records[id][prop].push(value)
    }
    return records
  }
  
console.log(updateRecords(recordCollection, 1245, 'tracks', ''))

/*   
Instructions:
1. Your function must always return the entire records object. >>
2. If value is an empty string, delete the given prop property from the album. >>
3. If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
4. If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array. 
*/