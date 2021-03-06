
export default class ButtonGroup {
  constructor (options) {
    this.options = options
    console.log(this.options)
  } 

  setPosition(coords) {
    let position = coords.get3dPosition(this.options.layout)
    this.object.position.set(position.x, position.y, position.z)
  }
  
  init() {
    let container = document.createElement('div')
    
    let label = document.createElement('label')
    label.for = this.options.id
    label.append(this.options.label)
    container.append(label)

    let buttonGroup = document.createElement('button-group')
    buttonGroup.id = this.options.id
    container.append(buttonGroup)
    buttonGroup.style.padding = '10px 24px'

    let hourly = document.createElement('button')
    let hourlyText = document.createTextNode('Hourly')
    hourly.append(hourlyText)
    buttonGroup.append(hourly)

    let day = document.createElement('button')
    let dayText = document.createTextNode('Day')
    day.append(dayText)
    buttonGroup.append(day)

    let week = document.createElement('button')
    let weekText = document.createTextNode('Week')
    week.append(weekText)
    buttonGroup.append(week)


    /*buttonGroup.style.backgroundColor = '#77A3B9'
    buttonGroup.style.padding = '25px 30px'
    buttonGroup.style.borderRadius = '5px'
    buttonGroup.style.textAlign = 'center'
    buttonGroup.style.color = 'white'
    buttonGroup.style.textTransform = 'uppercase'
    buttonGroup.style.display = 'inline-block'*/
  

    
  // create the object3d
    let cssObject = new THREE.CSS3DObject( container )

    this.object = cssObject

    return(this.object)
  }
}

