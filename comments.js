
// comments.js
export const comments = [
  { postId: 1, id: 1, name: "id labore ex et quam laborum", email: "Eliseo@gardner.biz", body: "laudantium enim quasi..." },
  { postId: 1, id: 2, name: "quo vero reiciendis velit similique earum", email: "Jayne_Kuhic@sydney.com", body: "est natus enim nihil..." },
  { postId: 1, id: 3, name: "odio adipisci rerum aut animi", email: "Nikita@garfield.biz", body: "quia molestiae reprehenderit..." },
  { postId: 1, id: 4, name: "alias odio sit", email: "Lew@alysha.tv", body: "non et expedita..." },
  { postId: 1, id: 5, name: "vero eaque aliquid doloribus et culpa", email: "Hayden@althea.biz", body: "harum non quasi..." },
  { postId: 2, id: 6, name: "et fugarum", email: "Presley.Mueller@mycom.com", body: "doloribus at sed..." },
  { postId: 2, id: 7, name: "repellat aliquid praesentium", email: "Dallas@ole.me", body: "maiores sed dolores..." },
  { postId: 2, id: 8, name: "et omnis dolorem", email: "Mallory_Fritsch@coder.net", body: "ut voluptatem corrupti..." },
  { postId: 2, id: 9, name: "provident id nulla", email: "Meghan_Loring@arena.com", body: "sapiente assumenda..." },
  { postId: 2, id: 10, name: "eaque et tate", email: "Ines_Barrows@alisa.info", body: "voluptate iusto..." }
];

//7 8 9

import { comments } from './comments.js';
const commentsWithCom = comments.filter(comment => comment.email.includes('.com'));
console.log("Задача 7 (почта содержит .com):");
console.log(commentsWithCom);
const updatedPostIds = comments.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});

console.log("\nЗадача 8 (измененные postId):");
console.log(updatedPostIds);

const simplifiedComments = comments.map(comment => {
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log("\nЗадача 9 (только id и name):");
console.log(simplifiedComments);

//10
const validatedComments = comments.map(comment => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});

console.log("\nЗадача 10 (свойство isInvalid):");
console.log(validatedComments);