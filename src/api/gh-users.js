import { Octokit } from "octokit"

const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
})

export async function getGithubUser(name) {
    const response = await octokit.request('GET /users/{username}', {
        username: name,
        headers: {
            'X-Github-Api-Version': '2022-11-28'
        }
    })

    return response.data
}