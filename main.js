const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Standard for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach

companies.forEach(function(company, index, companies) {
  console.log(index, company, companies.length);
});

// filter

// Get 21 and over
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// Short form
// const canDrink = ages.filter(age => age >= 21);
// console.log('canDrink', canDrink);

// Get all retail companies
// const retailsCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });
// short form
// const retailsCompanies = companies.filter(
//   company => company.category === 'Retail'
// );
// console.log('Log: -----> : retailsCompanies', retailsCompanies);

// Get 80's companies
// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.start < 1990
// );
// console.log('Log: -----> : eightiesCompanies', eightiesCompanies);

// const lastedTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log('Log: -----> : lastedTenYears', lastedTenYears);

// Map

// const companyNames = companies.map(function(company) {
//   return company.name;
// });
// console.log('Log: -----> : companyNames', companyNames);

// const companyNamesWithYears = companies.map(
//   company => `${company.name} - ${company.start}`
// );
// console.log('Log: -----> : companyNamesWithYears', companyNamesWithYears);

// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log('Log: -----> : ageMap', ageMap);

// sort

// sort companies by year
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
//  short form
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log('Log: -----> : sortedCompanies', sortedCompanies);

// sort ages
// const agesAsc = ages.sort((a, b) => a - b);
// console.log('Log: -----> : agesAsc', agesAsc[0]);

// const agesDesc = ages.sort((a, b) => b - a);
// console.log('Log: -----> : agesDesc', agesDesc[0]);

// reduce

// standard way
// let ageSum = 0;
// for (let index = 0; index < ages.length; index++) {
//   const element = ages[index];
//   ageSum += element;
// }
// console.log('Log: -----> : ageSum', ageSum);

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// short form
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log('Log: -----> : ageSum', ageSum);

// // get total years for all companies
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log('Log: -----> : totalYears', totalYears);

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((total, age) => total + age, 0);

// console.log(combined);
