// We want to extract some insights and statistics about the given data

const comments = [
    { id: 1, text: "Realmente disfruté este post. ¡Gracias!", likes: 5, user: "user1" },
    { id: 2, text: "No estoy seguro de lo que intentabas decir aquí.", likes: 1, user: "user2" },
    { id: 3, text: "Muy informativo, he aprendido mucho.", likes: 3, user: "user3" },
    { id: 4, text: "No estoy de acuerdo con tus puntos, pero buen intento.", likes: 2, user: "user4" },
    { id: 5, text: "Excelente explicación, ahora todo tiene sentido.", likes: 4, user: "user5" }
  ];

// 1. Find all the comments with more than 2 likes

let commentsConstrained = comments.filter((comment) => comment.likes > 2);
//console.log(commentsConstrained)

// 2. Use the map method to create a list of strings containing "Comment: " before each comment
let prefix = "Comment: "
let modifiedComments = comments.map( (comment) => 
    prefix.concat(comment.text)
)

//console.log(modifiedComments)

// 3. Use the find method to find the first comment with less than 2 likes.
let poorComment = comments.find( (comment) => comment.likes < 2)

//console.log(poorComment)


// 4. Use "every" to check if every comment has at least one like
let result = comments.every( (comment) => comment.likes >= 1)
//console.log("Every comment has at least one like: " + result)


// 5. Use "reduce" to calculate the total of likes in all the comments
const initialValue = 0;
let totalLikes = comments.reduce((acc, comment) => acc + comment.likes, 0)
// console.log(totalLikes)


// 6. Use "sort" to order the comments from largest to smallest according to the number of likes
let sortedComments = comments.sort( (comment1, comment2) => comment1.likes - comment2.likes)
console.log(sortedComments)