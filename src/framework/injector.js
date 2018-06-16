function injector(componentsMap = {}, functionsMap = {}) {

  function generateId() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  function creator(node, templateNodeId){
    // controllers logic
    let component = null
    try {
      component = functionsMap[node]()
    } catch(e) {
      throw new Error(`There is no component '${node}' in components map`)
    }
    if(typeof component === 'number'){
      return component// here are number of next component
    // components logic
    }else{
      let templateId = generateId()
      let template = component.querySelector('.template')
      const parent = document.getElementById(templateNodeId)
      if (template) {
        template.id = templateId  
      }
      parent.appendChild(component)
      return templateId
    }
  }

  function selector(map, nodeId){
    // last component in branch
    if(typeof map === 'string'){
      creator(map, nodeId)
    // not las component in branch
    }else{
      for(let node in map){
        if(typeof parseInt(node) === 'number' && !isNaN(parseInt(node))){
          selector(map[node], nodeId)
        }else{
          let templateId = creator(node, nodeId)
          // controller logic
          if(typeof templateId === 'number'){
            selector(map[node][templateId], nodeId)
            return
           // component logic 
          }else{
            selector(map[node], templateId)
          }
        }
      }
    }
  }

  if (componentsMap.root) {
    let currentId = null
    let rootComponent = functionsMap['root']()
    const appDiv = document.getElementById('app')
    let template = rootComponent.querySelector('.template')
    currentId = generateId()
    template.id = currentId    
    appDiv.appendChild(rootComponent)

    selector(componentsMap.root, currentId)
  } else {
    throw new Error('There is no root components map')
  }
}

export default injector