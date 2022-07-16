// can be used to generate error objects, error property-name (key) and then actual error message (value)
// you don't know how many key value properties you'll have

interface ErrorContainer {
  [prop: string]: number; // don't know the property name and don't know the count of the property BUT value is going to be property.
}
// can add properties only if it matches the index's value property.

const newError: ErrorContainer = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
}; // this is a bunch of key value pairs of type <string>:<number>
