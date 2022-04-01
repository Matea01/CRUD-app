const express =require('express');
const app =express();
app.listen(3000, function(){console.log('slusam na 3000')})
app.get('/', (req, res) => {
  res.sendFile('C:/Users/Matea/OneDrive/Desktop/CRUD-app' + '/index.html')
})