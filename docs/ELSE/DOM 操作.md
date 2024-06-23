##### document
1. `document.createElement(tagName, option: { is: string })`
2. 


##### element
1. `element.insertBefore(newNode, existNode)`
2. `element.append`
3. `element.prepend`
4. `element.replaceWith` `replace self with argument node`

dom performance
1.  Time(dom.repalceChildren) > Time(dom.remove, dom.append)
2. Time(dom.innerHTML)  === Time(dom.append)