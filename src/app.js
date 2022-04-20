const path = require('path')
const express = require('express')
const hbs = require('hbs')
console.log(__dirname)
console.log(path.join(__dirname,'../public'))
const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>{

        res.render('index', {
                title:'Photo',
                name: 'Sandeep'
        })
        


})




app.get('/weather', (req, res)=>{
            res.send([
                {
                location:'kathmandu',
                forecast: '25 degree'
                },
        
                {
                location:'birgunj',
                forecast:'50 degree'
                }
        ])
        })

app.listen(port, ()=>{
console.log('server is up on port'+ port)

})