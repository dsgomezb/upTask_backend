import colors from 'colors'
import server from './server'

const port = process.env.POST || 4000

server.listen(port, () => {
    console.log(colors.cyan.bold('desde index'))
})