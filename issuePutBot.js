/* Bot: IF new article on SLACK, THEN makes a new issue on GITLAB. */
const { Gitlab } = require('@gitbeaker/node');
const api = new Gitlab({
  host: 'https://git.promedius.dev',
  token: 'VX32ZQCRyxL16D4H1f66',
});

require('http').createServer((req,res)=>{
  let body = [];
  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', async ()=> {
    let content;
    try {
      content = JSON.parse(Buffer.concat(body).toString());
    } catch(e) {
      console.error(e);
    }
    console.log(req.method, req.url, content);
    const { title, description } = content;
    if (title && description) {
      await api.Issues.create(130, {
        title, description
      });
    }
    res.end("ok");
  });
}).listen(8080);
