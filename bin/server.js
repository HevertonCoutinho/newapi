const app = require('../src/app/app.js')

const port = process.env.port || 3000
app.listen(port , () => {
    console.log(`server started on localhost:${port}`)
})

