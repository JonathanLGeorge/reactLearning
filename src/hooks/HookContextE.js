import React, {useContext} from 'react'
import HookContextF from './HookContextF'
import {UserContextHooks, ChannelContext} from '../App'
function HookContextE() {

    const user = useContext(UserContextHooks)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default HookContextE
