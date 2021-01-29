import presetScene, { actions } from 'scene-preset'

export default () => presetScene({
    setup() {
        actions.blacklistControls([
            // 'setFirstPersonPosition',
            // 'setFirstPersonDirection',
            'setFirstPersonZoom',
            'setCanvasAutoFocus',
        ])
    },
})