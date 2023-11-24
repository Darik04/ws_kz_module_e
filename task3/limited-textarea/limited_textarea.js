
class LimitedTextarea extends HTMLElement {
    constructor() {
        super()
        const root = this.attachShadow({ mode: 'open' })

        this._input = document.createElement('textarea')

        this._preview = document.createElement('div')
        this._preview.style.color = '#666'

        this._input.oninput = () => {
          this.updatePreview()
          this.dispatchEvent(
            new Event('change')
          )
        }


        // this._input.onchange = () => {
          
        // }
        // const style = document.createElement('style')
        // style.textContent = css
        // root.appendChild(style)
        root.appendChild(this._input)
        root.appendChild(this._preview)

        this.updatePreview()

      }

      static get observedAttributes() {
        return ['placeholder']
      }
    
      attributeChangedCallback() {
        this._input.placeholder = this.getAttribute('placeholder')
      }
      
    
      get maxchars() {
        return this.getAttribute('maxchars')
      }
    
      // set maxchars(maxchars) {
      //   this.setAttribute('maxchars', maxchars)
      // }
    
      get value() {
        return this.checkCharsLength(this._input.value)
      }

      get valid() {
        const maxCharsInt = parseInt((this.maxchars ?? '500'))
        const leftChars = maxCharsInt - this._input.value.length
        return 0 <= leftChars
      }
    
      set value(value) {
        this._input.value = value
        this.updatePreview()
      }
    
    
      updatePreview() {
        const maxCharsInt = parseInt((this.maxchars ?? '500'))
        const leftChars = maxCharsInt - this._input.value.length

        let color = '#000000'
        if(0 > leftChars){
          color = '#f0620d'
        }else if((maxCharsInt*0.1) > leftChars){
          color = '#ea1010'
        }

        this._preview.innerHTML = `<span style="color: ${color};">${leftChars}</span> left characters`
      }


      checkCharsLength(value){
        const maxCharsInt = parseInt((this.maxchars ?? '500'))
        const newStr = this._input.value.substring(0, maxCharsInt)
        return newStr
      }
  }
  customElements.define("limited-textarea", LimitedTextarea);