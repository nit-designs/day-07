//a.Get all the countries from the Asia continent /region using the Filter function

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    let countries = data;
    let asianCountries = countries.filter(country => country.region === "Asia");
    console.log(asianCountries);
  }); 
  
  
  //b.Get all the countries with a population of less than 2 lakhs using Filter function
  
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data =>{
    let countries = data;
    let population = countries.filter(country =>country.population <2,00,000);
    console.log(population);
});

//c.Print the following details name, capital, flag using forEach function

fetch("https://restcountries.com/v3.1/all")
.then(response =>response.json())
.then(data =>{
let countries = data;
countries.forEach(ele => {
  console.log(ele.name,ele.capital,ele.flag);  
  console.log(ele.capital);
  console.log(ele.flag);
});
}) ;

//d.Print the total population of countries using reduce function
fetch("https://restcountries.com/v3.1/all")
.then(response =>response.json())
.then(data =>{
    let countries = data;
    const totPop= countries.reduce((acc,ini) => acc + ini.population, 0);
    console.log(totPop);
    });


    //e.Print the country which uses US Dollars as currency.
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data =>{
    let countries = data;
    let dollarcurrency= countries.filter(country => country.currency=== "$");
    let cn = dollarcurrency.map(country => country.name);
    console.log(cn);
});





