/* Bot: IF new article on SLACK, THEN makes a new issue on GITLAB. */
const { Gitlab } = require('@gitbeaker/node');
const api = new Gitlab({
  host: 'https://git.promedius.dev',
  token: 'VX32ZQCRyxL16D4H1f66',
});

