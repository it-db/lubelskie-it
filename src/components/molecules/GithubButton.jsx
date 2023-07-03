import {useState, useEffect} from 'react'

const GithubButton = ({repoUrl, }) => {
    const [stars, setStars] = useState(0)

    useEffect(() => {
        const parts = repoUrl.split("/")
        const author = parts[3]
        const repo = parts[4]
        fetch("https://api.github.com/repos/" + author + "/" + repo)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data['stargazers_count'])
            const stargazers_count = data['stargazers_count']
            setStars(stargazers_count);
        });
    }, [])


    return(
        <div className="flex  flex-row border-2 text-xs font-bold rounded">
            <a href={repoUrl} target={"_blank"} className="bg-[#]">
                Star
            </a>

            <a href={repoUrl + "/stargazers"} target={"_blank"} className="border-2">
                {stars}
            </a>
        </div>
    )
}

export default GithubButton