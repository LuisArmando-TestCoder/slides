import React, { useState, useEffect } from 'react'
import {
    Quark,
    String,
} from '../..'
import {
    useRecoilState,
} from 'recoil'
import {
    hash as hashState,
} from '../../../state'

class User {
    name: string
    hash: string
    date: {
        inscription: Date,
        completion: Date
    }
    email: string
}

function getComposedUser(parsedData): User {
    try {
        const { data, hash, date } = parsedData
        const { name, email } = data

        return { name, hash, date, email }
    } catch (error) {
        throw error
    }
}

async function getUser(hash: string): Promise<User> {
    if (!hash) return null

    const targetUrl = `https://open-certificates.herokuapp.com/data/${hash}`
    const blob = await fetch(targetUrl)

    if (!blob) return null

    const json = await blob.json()
    const { data } = json

    try {
        const parsedData = JSON.parse(data)
        const user = getComposedUser(parsedData)

        return user
    } catch {
        return null
    }
}

function getURLHash(window): string {
    return new URLSearchParams(location.search).get('hash')
}

function setAppHash(setStateHash, hash) {
    setStateHash(hash)
    localStorage.setItem('hash', hash)
}


const months = [
    'january', 'february', 'march',
    'april', 'may', 'june',
    'july', 'august', 'september',
    'october', 'november', 'december',
]

const weekDays = [
    'monday', 'tuesday', 'wednesday', 'thursday',
    'friday', 'saturday', 'sunday',
]

export default ({ hash }) => {
    const [user, setUser] = useState(null)
    const [stateHash, setStateHash] = useRecoilState(hashState)
    const localStorageHash = localStorage.getItem('hash')

    useEffect(() => {
        (async () => {
            const URLHash = getURLHash(window)
            const user = await getUser(
                hash
             || URLHash
             || stateHash
             || localStorageHash
            )

            if (user) {
                setAppHash(setStateHash, user.hash)
                setUser(user)
            }
        })()
    })

    return (
        <>
            {
                user ?
                <section className='certificate'>
                    {
                        user?.date?.completion ?
                        <>
                            <div className='certificate__printable'>
                                <String.Text type='title'>
                                    Master Range
                                </String.Text>
                                <String.Text type='subtitle'>
                                    Certificate of completion
                                </String.Text>
                                <String.Text type='dark-paragraph'>
                                    The current certificate guarantees
                                    that {user.name},
                                    under the email of {user.email},
                                    that on the month of {months[user.date.getMonth()]},
                                    {weekDays[user.date.getDay()]}
                                    {(day => {
                                        if (day === 1) return `${day}st`
                                        else if (day === 2) return `${day}nd`
                                        else if (day === 3) return `${day}rd`
                                        return `${day}th`
                                    })(user.date.getUTCDate())}
                                    mastered the course of 'this course name'

                                    Under the observance of 'organization name'
                                </String.Text>
                                <String.Image src='some image'/>
                            </div>
                        </>
                        :
                        <>
                            This user exists but hasn't complete course just yet
                        </>
                    }
                </section>
                :
                <>
                    Certificate section
                </>
            }
        </>
    )
}