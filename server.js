var express = require('express');
var app     = require('express')();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var request = require('request');
var path    = require('path');
var fs      = require('fs');
var xss     = require('xss');
var config = require(__dirname+'/config.js');

var words = (fs.readFileSync('./sensitiveWords.js','utf8')).split("||");

app.use(express.static(path.join(__dirname)));

io.on('connection', function(socket){
  console.log('一个新用户来啦!');
  socket.on('chat message', function(data){
    //脚本注入
    var msg = xss(data.msg);

    //过滤非法用词
    var repWord = '';
    words.filter(function(element){
      return (msg.indexOf(element)>=0);
    }).map(function(element){
      repWord=repWord.length<element.length?element:repWord;
      return element;
    });

    var rmsg = repWord?msg.replace(repWord,'***'):msg;
    io.emit('chat message', {userId:data.userId,msg:rmsg});
  });

  socket.on('disconnect', function(msg){
    console.log('用户已离开');
  });

});

var server = http.listen(config.port, function(){
  console.log('listening on *:'+config.port);
});
