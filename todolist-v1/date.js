// exports.getDate = function(){
//     let today = new Date();

//     let options = {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//     };
//     return today.toLocaleDateString("en-US", options); 
// }

// exports.getDay = function(){
//     let today = new Date();

//     let options = {
//       weekday: "long",
     
//     };
//     return today.toLocaleDateString("en-US", options);  
// }
exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function () {

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};