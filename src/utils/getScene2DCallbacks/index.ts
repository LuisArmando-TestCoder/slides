import * as scenes2D from '../../scenes2D'

export default (sceneNames: string[]): Function[] => {
    return sceneNames.map(sceneName => scenes2D[sceneName])
}