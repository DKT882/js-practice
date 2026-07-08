async function fetchUserDetails(username) {

        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);
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

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData) ;

            displayUserData(parsedData);
        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }