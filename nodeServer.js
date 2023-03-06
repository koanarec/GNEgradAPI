const http = require('http')
const fs = require("fs")

const server = http.createServer((req,res)=> {
    console.log(req.url)
    if (req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(fs.readFileSync('../website/index.html'))
    }
    else if (req.url === '/game_of_life.js'){
        res.writeHead(200, {'content-type':'text/js'})
        const homePageHTML = fs.readFileSync('../website/game_of_life.js')
        res.write(homePageHTML)
    }
    else if (req.url === '/GNEstock.js'){
        res.writeHead(200, {'content-type':'text/js'})
        const homePageHTML = fs.readFileSync('../website/GNEstock.js')
        res.write(homePageHTML)
    }
    else if (req.url === '/fractal.js'){
        res.writeHead(200, {'content-type':'text/js'})
        const homePageHTML = fs.readFileSync('../website/fractal.js')
        res.write(homePageHTML)
    }
    else if (req.url === '/chart.json'){
        res.writeHead(200, {'content-type':'text/json'})
        const homePageHTML = fs.readFileSync('../website/chart.json')
        res.write(homePageHTML)
    }
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write("<h1>Not available.<h1>")
    }
    res.end();
})

server.listen(3000)