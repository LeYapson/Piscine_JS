  // Clone1 et Clone2 avec Object.assign()
  const clone1 = Object.assign({}, person);
  const clone2 = Object.assign({}, person);
  
  // SamePerson avec la référence à l'objet person original
  const samePerson = person;
  
  // Augmenter l'âge de person de 1 et définir son pays sur 'FR'
  person.age += 1;
  person.country = 'FR';
  
  console.log(person); // { name: 'Rick', age: 78, country: 'FR' }
  console.log(clone1); // { name: 'Rick', age: 77, country: 'US' }
  console.log(clone2); // { name: 'Rick', age: 77, country: 'US' }
  console.log(samePerson); // { name: 'Rick', age: 78, country: 'FR' }
  