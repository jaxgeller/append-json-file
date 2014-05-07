### Example

+ You need to append to a json file, but sometimes it hasn't been created yet.
+ This solves that problem.

```javascript
var myJson = {
    name: {
        first: 'Jackson',
        last: 'Geller'
    }
}

// My file contains {dob: '9/27/1994'}
var myFile = 'data.json'

// Call -- creates file if it doesn't exist and appends
appendjson(myJson, myFile, function() {
    console.log('done')
})

/* output -- data.json
  {
    dob: '9/27/1994,
    name: {
        first: 'Jackson',
        last: 'Geller'
    }
  } 
*/

```

---
### Installation
+ `npm install appendjson --save`

----

### Use
```javascript
var appendjson = require('appendjson');

appendjson(jsonObj, filepath, callback)
```


