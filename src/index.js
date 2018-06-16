import injector from './framework/injector'
import appMap from './framework/appMap'
import componentsMap from './framework/componentsMap'

window.state = true;

window.render = function() {
  document.getElementById('app').innerHTML = ''
  injector(appMap, componentsMap)
}

injector(appMap, componentsMap)


