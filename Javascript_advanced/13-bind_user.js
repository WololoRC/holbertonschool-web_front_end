const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Ialva",
  location: "Telaviv",
  occupation: "Engineer",
};

function logWelcomeUser(welcomeString) {
/* To attach object properties to a bind function "this.@propertie" is needed" */
  console.log(
    welcomeString + ", " + this.firstName + ". Your occupation is: " + this.occupation
  );
}

                        /* borrow object properties to a function */
const bindLogWelcome = logWelcomeUser.bind(user);
bindLogWelcome("Wololo!");

