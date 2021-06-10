const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')


app.use(express.static(publicDirectoryPath))


app.set('view engine', 'hbs')
app.set('views', viewsPath)



app.get('', (req, res) => {
    res.render('index')

})

app.get('/absentDays', (req, res) => {
    res.render('absentDays')
    
})

app.get('/absentDetails', (req, res) => {
    res.render('absentDetails')
    
})

app.get('/leaveBalance', (req, res) => {
    res.render('leaveBalance')
    
})

app.get('/holidayCalendar', (req, res) => {
    res.render('holidayCalendar')
    
})










app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})