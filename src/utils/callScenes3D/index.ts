import * as scenes3D from '../../scenes3D'

export default (sceneNames: string[]) => {
    for (const sceneName of sceneNames) scenes3D[sceneName]()
}