const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const targetUrl = 'https://leetcode.com/graphql/';

const myHeaders = new Headers();
myHeaders.append("content-type", "application/json");

const graphql = JSON.stringify({
    query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
    variables: { "username": `dharam20` }
})
const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
};