const nock = require('nock'); // Import nock to mock HTTP requests.
require('dotenv').config();

const mockGetUser = () => {
const tokenWithUserScope = process.env.BEARER_TOKEN_WITH_USER;
const tokenWithoutUserScope = process.env.BEARER_TOKEN_NO_USER;
const invalidToken = process.env.BEARER_TOKEN_WRONG;
// Mock successful response for a valid token with 'user' scope.
nock('https://api.github.com')
  .get('/user')
  .matchHeader('Authorization', tokenWithUserScope)
  .reply(200, {
      // public profile information
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: 3,
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url: "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url: "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false,
      public_repos: 2,
      public_gists: 1,
      followers: 20,
      following: 0,
      created_at: "2008-01-14T04:33:35Z",
      updated_at: "2008-01-14T04:33:35Z",
      // private profile information
      email: "octocat@github.com",
      bio: "There once was...",
      twitter_username: "monatheoctocat",
      company: "GitHub",
      blog: "https://github.com/blog",
      location: "San Francisco",
      hireable: false,
      name: "monalisa octocat",
      private_gists: 3, 
      total_private_repos: 100, 
      owned_private_repos: 12, 
      disk_usage: 1000, 
      collaborators: 8, 
      two_factor_authentication: true, 
    });

  // Mock response for user authenticated without 'user' scope
  nock('https://api.github.com')
    .get('/user')
    .matchHeader('Authorization', tokenWithoutUserScope)
    .reply(200, {
        login: "octocat",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        gravatar_id: 3,
        url: "https://api.github.com/users/octocat",
        html_url: "https://github.com/octocat",
        followers_url: "https://api.github.com/users/octocat/followers",
        following_url: "https://api.github.com/users/octocat/following{/other_user}",
        gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
        starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
        organizations_url: "https://api.github.com/users/octocat/orgs",
        repos_url: "https://api.github.com/users/octocat/repos",
        events_url: "https://api.github.com/users/octocat/events{/privacy}",
        received_events_url: "https://api.github.com/users/octocat/received_events",
        type: "User",
        site_admin: false,
        public_repos: 2,
        public_gists: 1,
        followers: 20,
        following: 0,
        created_at: "2008-01-14T04:33:35Z",
        updated_at: "2008-01-14T04:33:35Z",
    });

  // Mock response for forbidden access when an invalid token is used.
  nock('https://api.github.com')
  .get('/user')
  .matchHeader('Authorization', invalidToken)
  .reply(403, { message: 'Access denied. You do not have permission to access this resource.' });

  // Mock response for unauthorized access when no token is provided.
  nock('https://api.github.com')
    .get('/user')
    .matchHeader('Authorization', (value) => value === undefined || value === 'null')
    .reply(401, { message: 'Authentication failed. Please provide a valid token.' });
};

module.exports = { mockGetUser };