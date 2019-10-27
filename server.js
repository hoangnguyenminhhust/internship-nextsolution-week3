const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const URL = "http://vnexpress.net";
const URL2 = "http://youtube.com"
request(URL, function (err, res, body) {
    var mySet = new Set();
    if (err) {
        console.log(err);
    } else {
        try {
            let $ = cheerio.load(body);
            $('a').each(function (index) {
                var dis = $(this).attr('name');
                var title = $(this).attr('title');
                var link = $(this).attr('href');
                if (link.startsWith('http')) {
                    var obj = {
                        link: link,
                        title: title,
                        dis: dis
                    };
                    mySet.add(JSON.stringify(obj));
                }
            })
            console.log(mySet)
            // console.log(Array.from(mySet).join(' '));
            // if (mySet.size != 0)
            //     request(URL2)
            fs.writeFile('data.txt', Array.from(mySet).join(' '), function (err) {
                if (err) {
                    console.log('looi');
                } else {
                    console.log('success')
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
});