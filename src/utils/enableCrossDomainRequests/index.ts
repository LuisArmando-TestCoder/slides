export default () => {
    const cors_api_host = 'cors-anywhere.herokuapp.com'
    const cors_api_url = 'https://' + cors_api_host + '/'
    const slice = [].slice
    const origin = window.location.protocol + '//' + window.location.host
    const open = XMLHttpRequest.prototype.open

    XMLHttpRequest.prototype.open = function() {
        const args = slice.call(arguments)
        const targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1])
        const canEnableCrossDomainRequests = targetOrigin
                                          && targetOrigin[0].toLowerCase() !== origin
                                          && targetOrigin[1] !== cors_api_host

        if (canEnableCrossDomainRequests) {
            args[1] = cors_api_url + args[1]
        }

        return open.apply(this, args)
    }
}