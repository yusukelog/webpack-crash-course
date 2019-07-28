import _ from 'lodash'
import Lion from './utilities'

console.log(Lion.say())

function component() {
    const element = document.createElement('div')
    const array = ['Hello','webpack','!!!!E']
    element.innerHTML = _.join(array,' ')
    return element
}

document.body.appendChild(component())