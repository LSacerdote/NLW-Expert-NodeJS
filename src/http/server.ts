import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/Create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import Websocket  from '@fastify/websocket'
import { pollresults } from './ws/poll-results'

const app = fastify()


app.register(cookie, {
    secret: "polls-app-nlw", 
    hook: 'onRequest', 
 
})
app.register(Websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollresults)



app.listen({port:3333}).then(()=>
console.log('HTTP Server Running!')
);
