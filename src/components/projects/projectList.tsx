import techMap from './techMap'

const summaries = {
    "NodeJs Rest API":
        <div>
            JWT authentication implemented using NodeJS, Express and MongoDb
            <br />
            Intent Detection and NLP using Dialogflow
        </div>,
    "Graph Traversal Algorithms":
        <div>
            Graph Traversal Algorithms implemented in:
            <br />
            JavaScript, Rust, Go and Python
        </div>,
    "2D RPG Game":
        <div>
            2D RPG Game implemented in Rust
        </div>,
    "Rest API in Golang":
        <div>
            Rest API implemented in Go using the fiber package
        </div>,
    "Helix":
        <div>
            Cross Platform application made using Flutter with audio and text editing functions
        </div>
}

const ProjectList = [
    {
        title: "NodeJs Rest API",
        summary: summaries['NodeJs Rest API'],
        projectName: "user authentication api",
        codeUrl: "/nodeApiTest",
        technologies: [techMap.node, techMap.express, techMap.dialogflow, techMap.mongodb],
    },
    {
        title: "Graph Traversal Algorithms",
        summary: summaries['Graph Traversal Algorithms'],
        projectName: "graph traversal",
        codeUrl: "",
        technologies: [techMap.rust, techMap.go, techMap.python, techMap.js],
    },
    {
        title: "2D RPG Game",
        summary: summaries['2D RPG Game'],
        projectName: "bevy-game-1",
        codeUrl: "",
        technologies: [techMap.rust, techMap.bevy],
    },
    {
        title: "Rest API in Golang",
        summary: summaries['Rest API in Golang'],
        projectName: "golang-rest-api",
        codeUrl: "/golang-rest-api",
        technologies: [techMap.go],
    },
    {
        title: "Helix: Writing Application for Musicians",
        summary: summaries['Helix'],
        projectName: "helix",
        codeUrl: "",
        technologies: [techMap.flutter, techMap.firebase],
    },
]

export default ProjectList
