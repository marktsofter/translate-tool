export interface Foo {
    prop1: string;
    prop2: string;
}

const fooObj: Foo = {
  prop1: 'prop1 value',
  prop2: 'prop1 value'
}


setInterval(() => {

  console.log("foo obj: ", JSON.stringify(fooObj));
}, 1000);
