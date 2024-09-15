"use strict";
const comments = [
    { id: 1, text: "Realmente disfruté este post. ¡Gracias!", likes: 5, user: "user1" },
    { id: 2, text: "No estoy seguro de lo que intentabas decir aquí.", likes: 1, user: "user2" },
    { id: 3, text: "Muy informativo, he aprendido mucho.", likes: 3, user: "user3" },
    { id: 4, text: "No estoy de acuerdo con tus puntos, pero buen intento.", likes: 2, user: "user4" },
    { id: 5, text: "Excelente explicación, ahora todo tiene sentido.", likes: 4, user: "user5" }
];
let commentsConstrained = comments.filter((comment) => comment.likes > 2);
let prefix = "Comment: ";
let modifiedComments = comments.map((comment) => prefix.concat(comment.text));
let poorComment = comments.find((comment) => comment.likes < 2);
let result = comments.every((comment) => comment.likes >= 1);
const initialValue = 0;
let totalLikes = comments.reduce((acc, comment) => acc + comment.likes, 0);
let sortedComments = comments.sort((comment1, comment2) => comment1.likes - comment2.likes);
console.log(sortedComments);
//# sourceMappingURL=solution.js.map