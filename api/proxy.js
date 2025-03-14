export default async (req, res) => {
  const targetUrl = 'https://github.com';
  const mirrorDomain = 'https://github.shfu.cn';
  const response = await fetch(targetUrl + req.url);
  const html = await response.text();
  const modifiedHtml = html.replace(/github\.com/g, mirrorDomain);
  res.setHeader('Content-Type', 'text/html');
  res.send(modifiedHtml);
};
