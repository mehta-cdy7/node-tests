const expect =require('expect');

const utils= require('./utils');

describe('utils', () => {

describe('#add', () => {
it('should add two number', () => {
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
  // throw new Error ('value not correct');
// if (res !== 44) {
//   throw new Error(`expected 44 but get ${res}`)
// }
});

});
  
it('should square a number', (done) => {
  // var res =utils.square(3);
  utils.square(3, (res)=>{
  expect(res).toBe(9).toBeA('number');
  done();  
});
   // if(res !== 9)
  // throw new Error(`expected 9 but get ${res} `);
});


it('should add two numbers in asychmode',(done)=>
{
  utils.asyncAdd(3,4,  (sum)=>{
  expect(sum).toBe(7).toBeA('number');
  done();
  });
});
});

it('should set firstName and lastName',()=>{
   var user={location:'chd' , age:34}; 
   var res=utils.setName(user,'anmol mehta');

   expect(res).toInclude({
     firstName:'anmol',
     lastName:'mehta'
   });
});
