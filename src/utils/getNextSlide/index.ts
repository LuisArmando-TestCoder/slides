import { TimelineMax } from 'gsap'

import SceneSlider from './SceneSlider'

type SceneSliderChildren = {
    [index: string]: {
        index: number
        sceneSliders: SceneSlider[]
    }
}

const slideSceneGroup: SceneSliderChildren = {}

async function importSliders(slideNames, slideNamesKey, index) {
    for (const slideName of slideNames) {
        try {
            const { show, hide } = await import(`../../scenes3D/${slideName}`)

            if (!slideSceneGroup[slideNamesKey]) {
                slideSceneGroup[slideNamesKey] = {
                    index,
                    sceneSliders: [],
                }
            }

            slideSceneGroup[slideNamesKey].sceneSliders.push(new SceneSlider(show, hide))
        } catch (error) {
            console.error(error)
        }
    }
}

export default async function getNextSlide(slideNames: string[], index = 0): Promise<() => SceneSlider> {
    const slideNamesKey = slideNames.join('')

    await importSliders(slideNames, slideNamesKey, index)

    return () => {
        const { length } = slideSceneGroup[slideNamesKey].sceneSliders

        if (length > 1) {
            const { index, sceneSliders } = slideSceneGroup[slideNamesKey]

            const sceneSlider = sceneSliders[index ? index - 1 : length - 1]
            
            sceneSlider.state = 'hide'
            sceneSlider.hide && sceneSlider.hide(new TimelineMax())
        }

        const sceneSlider = slideSceneGroup[slideNamesKey].sceneSliders[
            slideSceneGroup[slideNamesKey].index
        ]

        slideSceneGroup[slideNamesKey].index = (
            slideSceneGroup[slideNamesKey].index + 1
        ) % length

        if (sceneSlider.state === 'show') {
            sceneSlider.state = 'hide'
            sceneSlider.hide && sceneSlider.hide(new TimelineMax())

            return
        }
        
        sceneSlider.state = 'show'
        sceneSlider.show && sceneSlider.show(new TimelineMax())

        return sceneSlider
    }
}