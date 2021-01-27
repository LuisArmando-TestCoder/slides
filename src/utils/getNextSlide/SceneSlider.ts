export default class SceneSlider {
    show: Function
    hide: Function
    state: 'show' | 'hide' = 'hide'

    constructor(show: Function, hide: Function) {
        this.show = show
        this.hide = hide
    }
}