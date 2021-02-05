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
        const {
            name,
            hash,
            date,
            email,
        } = parsedData
        const user = {
            name,
            hash,
            date: {
                // 'YYYY-MM-DD'
                inscription: new Date(date.inscription),
                completion: new Date(date.completion),
            },
            email,
        }

        return user
    } catch (error) {
        throw error
    }
}

async function getUser(hash: string): Promise<User> {
    if (!hash) return null

    const response = await fetch(`https://data-poster.herokuapp.com/data/${hash}`)

    if (!response) return null

    const json = await response.json()
    const { data } = json

    try {
        const parsedData = JSON.parse(data)
        const user = getComposedUser(parsedData)

        return user
    } catch {
        return null
    }
}

function getURLHash(): string {
    return new URLSearchParams(window.location.search).get('hash')
}

function printCertificate(user: User) {

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

export default () => {
    const [user, setUser] = useState(null)
    const URLHash = getURLHash()
    const [stateHash, setStateHash] = useRecoilState(hashState)
    const localStorageHash = localStorage.getItem('hash')

    useEffect(() => {
        (async () => {
            const user = await getUser(
                URLHash
             || stateHash
             || localStorageHash
            )

            setStateHash(user.hash)

            setUser(user)
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
                                    that on the month of {months[user.date.completion.getMonth()]},
                                    {weekDays[user.date.completion.getDay()]}
                                    {(day => {
                                        if (day === 1) return `${day}st`
                                        else if (day === 2) return `${day}nd`
                                        else if (day === 3) return `${day}rd`
                                        return `${day}th`
                                    })(user.date.completion.getUTCDate())}
                                    mastered the course of 'this course name'

                                    Under the observance of 'organization name'
                                </String.Text>
                                <String.Image src='some image'/>
                            </div>
                            <Quark.Button
                                text='Press to print'
                                click={() => printCertificate(user)}
                            />
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