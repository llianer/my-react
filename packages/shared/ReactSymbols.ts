const supportSymbol = typeof Symbol === 'function' && Symbol.for;

const REACT_ELEMENT_TYPE = supportSymbol ? Symbol.for('react.element') : 0xeac7;

export { REACT_ELEMENT_TYPE };
