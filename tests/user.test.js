require('dotenv').config();
const { getUser } = require('../src/api/userAPI');
const { mockGetUser } = require('./mocks/mockServer');

describe('getUser Test Cases', () => {
  
  // Before each test, set up the mocks.
  beforeEach(() => {
    mockGetUser(); 
  });

  // Test case for successful retrieval with a token that has user scope.
  it('should successfully retrieve user data with a valid token with user scope', async () => {
    const tokenWithUserScope = process.env.BEARER_TOKEN_WITH_USER;
    const userData = await getUser(tokenWithUserScope);
    
    // Assert data in the response for user public data 
    expect(userData).toBeDefined();
    expect(userData.login).toEqual('octocat');
    expect(userData.id).toEqual(1);
    expect(userData.node_id).toEqual('MDQ6VXNlcjE=');
    expect(userData.gravatar_id).toEqual(3);
    expect(userData.url).toEqual('https://api.github.com/users/octocat');
    expect(userData.html_url).toEqual('https://github.com/octocat');
    expect(userData.followers_url).toEqual('https://api.github.com/users/octocat/followers');
    expect(userData.following_url).toEqual('https://api.github.com/users/octocat/following{/other_user}');
    expect(userData.gists_url).toEqual('https://api.github.com/users/octocat/gists{/gist_id}');
    expect(userData.starred_url).toEqual('https://api.github.com/users/octocat/starred{/owner}{/repo}');
    expect(userData.subscriptions_url).toEqual('https://api.github.com/users/octocat/subscriptions');
    expect(userData.organizations_url).toEqual('https://api.github.com/users/octocat/orgs');
    expect(userData.repos_url).toEqual('https://api.github.com/users/octocat/repos');
    expect(userData.events_url).toEqual('https://api.github.com/users/octocat/events{/privacy}');
    expect(userData.received_events_url).toEqual('https://api.github.com/users/octocat/received_events');
    expect(userData.type).toEqual('User');
    expect(userData.site_admin).toEqual(false);
    expect(userData.public_repos).toEqual(2);
    expect(userData.public_gists).toEqual(1);
    expect(userData.followers).toEqual(20);
    expect(userData.following).toEqual(0);
    expect(userData.created_at).toEqual('2008-01-14T04:33:35Z');
    expect(userData.updated_at).toEqual('2008-01-14T04:33:35Z');
    // Assert data in the response for user private data 
    expect(userData.email).toEqual('octocat@github.com');
    expect(userData.bio).toEqual('There once was...');
    expect(userData.twitter_username).toEqual('monatheoctocat');
    expect(userData.company).toEqual('GitHub');
    expect(userData.blog).toEqual('https://github.com/blog');
    expect(userData.location).toEqual('San Francisco');
    expect(userData.hireable).toEqual(false);
    expect(userData.name).toEqual('monalisa octocat');
    expect(userData.private_gists).toEqual(3);
    expect(userData.total_private_repos).toEqual(100);
    expect(userData.owned_private_repos).toEqual(12);
    expect(userData.disk_usage).toEqual(1000);
    expect(userData.collaborators).toEqual(8);
    expect(userData.two_factor_authentication).toEqual(true);
  });

  // Test case for successful retrieval with a token that does not have user scope.
  it('should successfully retrieve only public user data with a valid token without user scope', async () => {
    const tokenWithoutUserScope = process.env.BEARER_TOKEN_NO_USER;
    const userData = await getUser(tokenWithoutUserScope);

    // Assert data in the response for user public data 
    expect(userData).toBeDefined();
    expect(userData.login).toEqual('octocat');
    expect(userData.id).toEqual(1);
    expect(userData.node_id).toEqual('MDQ6VXNlcjE=');
    expect(userData.gravatar_id).toEqual(3);
    expect(userData.url).toEqual('https://api.github.com/users/octocat');
    expect(userData.html_url).toEqual('https://github.com/octocat');
    expect(userData.followers_url).toEqual('https://api.github.com/users/octocat/followers');
    expect(userData.following_url).toEqual('https://api.github.com/users/octocat/following{/other_user}');
    expect(userData.gists_url).toEqual('https://api.github.com/users/octocat/gists{/gist_id}');
    expect(userData.starred_url).toEqual('https://api.github.com/users/octocat/starred{/owner}{/repo}');
    expect(userData.subscriptions_url).toEqual('https://api.github.com/users/octocat/subscriptions');
    expect(userData.organizations_url).toEqual('https://api.github.com/users/octocat/orgs');
    expect(userData.repos_url).toEqual('https://api.github.com/users/octocat/repos');
    expect(userData.events_url).toEqual('https://api.github.com/users/octocat/events{/privacy}');
    expect(userData.received_events_url).toEqual('https://api.github.com/users/octocat/received_events');
    expect(userData.type).toEqual('User');
    expect(userData.site_admin).toEqual(false);
    expect(userData.public_repos).toEqual(2);
    expect(userData.public_gists).toEqual(1);
    expect(userData.followers).toEqual(20);
    expect(userData.following).toEqual(0);
    expect(userData.created_at).toEqual('2008-01-14T04:33:35Z');
    expect(userData.updated_at).toEqual('2008-01-14T04:33:35Z');
  });

  // Test case for unauthorized access when no token is provided.
  it('should return an error for unauthorized access if no token provided', async () => {
    // Test the scenario where no token is provided (expect a 401 error)
    const userData = await getUser(null);

    // Assertions to check if the correct error message is returned.
    expect(userData).toBeDefined();
    expect(userData.message).toEqual('Authentication failed. Please provide a valid token.');
  });

  // Test case for forbidden access when an invalid token is used.
  it('should return an error for forbidden access if token is invalid', async () => {
    const invalidToken = process.env.BEARER_TOKEN_WRONG;
    const userData = await getUser(invalidToken);

    // Assertions to check if the correct error message is returned.
    expect(userData).toBeDefined();
    expect(userData.message).toEqual('Access denied. You do not have permission to access this resource.');
  });

});